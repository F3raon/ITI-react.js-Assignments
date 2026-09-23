const RAPIDAPI_KEY = "848002a0d7msh2ee122a1f11d4eap11833djsn3eebe6008a6d";
const RAPIDAPI_HOST = "imdb188.p.rapidapi.com";
const RAPIDAPI_BASE = "https://imdb188.p.rapidapi.com";
const RAPIDAPI_ENDPOINTS = [
  "/api/v1/getMeterMovies",
  "/api/v1/getTop250",
  "/api/v1/getTrending",
  "/api/v1/getFanFavorites"
];

const TRAILER_POOL = [
  "https://vjs.zencdn.net/v/oceans.mp4",
  "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
];

let allMovies = [];
let filteredMovies = [];
let activeGenre = "all";
let searchQuery = "";
let watchlist = JSON.parse(localStorage.getItem("imdb_watchlist")) || [];

const moviesGrid = document.getElementById("moviesGrid");
const heroCarouselInner = document.getElementById("heroCarouselInner");
const heroCarouselIndicators = document.getElementById("heroCarouselIndicators");
const heroUpNextRail = document.getElementById("heroUpNextRail");
const top10Grid = document.getElementById("top10Grid");
const moviesLoading = document.getElementById("moviesLoading");
const searchInput = document.getElementById("searchInput");
const genreFiltersBar = document.getElementById("genreFiltersBar");
const watchlistCountBadge = document.getElementById("watchlistCountBadge");
const watchlistItemsList = document.getElementById("watchlistItemsList");
const trailerVideoPlayer = document.getElementById("trailerVideoPlayer");
const trailerModalTitle = document.getElementById("trailerModalTitle");
const trailerModalMeta = document.getElementById("trailerModalMeta");
const movieDetailsContainer = document.getElementById("movieDetailsContainer");
const toastElement = document.getElementById("actionToast");
const toastMessage = document.getElementById("toastMessage");

const trailerModal = new bootstrap.Modal(document.getElementById("trailerModal"));
const movieDetailsModal = new bootstrap.Modal(document.getElementById("movieDetailsModal"));
const actionToast = new bootstrap.Toast(toastElement);

function formatVotes(count) {
  if (!count) return "N/A";
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${Math.round(count / 1000)}K`;
  return String(count);
}

function transformApiResponse(rawList) {
  return rawList
    .filter(item => item.title && item.title.primaryImage)
    .map((item, index) => {
      const {
        id,
        titleText,
        primaryImage,
        ratingsSummary,
        releaseYear,
        titleType
      } = item.title;

      const title = titleText?.text || "Unknown Title";
      const poster = primaryImage?.imageUrl || "";
      const rating = ratingsSummary?.aggregateRating || null;
      const votes = ratingsSummary?.voteCount || 0;
      const topRank = ratingsSummary?.topRanking?.rank || null;
      const year = releaseYear?.year || "N/A";
      const type = titleType?.text || "Movie";

      return {
        id: id || `m-${index}`,
        localId: index + 1,
        title,
        poster,
        backdrop: poster,
        rating,
        votes: formatVotes(votes),
        rawVotes: votes,
        year,
        type,
        topRank,
        trailer: TRAILER_POOL[index % TRAILER_POOL.length],
        imdb_url: `https://www.imdb.com/title/${id}/`,
        plot: `${title} is a ${year} ${type.toLowerCase()} available on IMDb.`,
        genre: [],
        director: "N/A",
        cast: []
      };
    });
}

async function tryEndpoint(path) {
  const res = await fetch(`${RAPIDAPI_BASE}${path}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST
    }
  });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

function extractListFromResponse(json) {
  if (!json) return null;
  if (json.data?.list?.length) return json.data.list;
  if (json.data?.titles?.length) return json.data.titles.map(t => ({ title: t }));
  if (Array.isArray(json.data)) return json.data.map(t => ({ title: t }));
  if (json.items?.length) return json.items.map(t => ({ title: t }));
  return null;
}

async function fetchMovies() {
  if (moviesLoading) moviesLoading.style.display = "flex";
  if (moviesGrid) moviesGrid.innerHTML = "";

  let lastError = null;

  for (const endpoint of RAPIDAPI_ENDPOINTS) {
    try {
      const json = await tryEndpoint(endpoint);
      const list = extractListFromResponse(json);

      if (list && list.length > 0) {
        allMovies = transformApiResponse(list);
        break;
      }
    } catch (err) {
      lastError = err;
    }
  }

  if (allMovies.length === 0) {
    if (moviesLoading) moviesLoading.style.display = "none";
    if (moviesGrid) {
      moviesGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-triangle-exclamation text-warning display-4 mb-3"></i>
          <h4 class="text-white">Unable to load data from IMDb API</h4>
          <p class="text-muted small mb-3">All endpoints returned an error (${lastError?.message || "Unknown"}).<br>Check your RapidAPI key or subscription.</p>
          <button class="btn btn-imdb-gold btn-sm" onclick="fetchMovies()">
            <i class="fa-solid fa-rotate-right me-1"></i> Retry
          </button>
        </div>
      `;
    }
    return;
  }

  filteredMovies = [...allMovies];
  if (moviesLoading) moviesLoading.style.display = "none";

  renderHeroSpotlight();
  renderTop10();
  renderMoviesGrid();
  updateWatchlistUI();
}

function renderHeroSpotlight() {
  if (!heroCarouselInner || allMovies.length === 0) return;

  const featured = allMovies.slice(0, 4);
  const upNext = allMovies.slice(4, 7);

  heroCarouselInner.innerHTML = featured.map((movie, idx) => {
    const { localId, title, year, rating, backdrop, topRank } = movie;
    const ratingBadge = rating ? `★ ${rating}/10` : "Not Rated";
    const rankBadge = topRank ? `IMDb Top #${topRank}` : "Trending";

    return `
      <div class="carousel-item ${idx === 0 ? "active" : ""}">
        <div class="hero-spotlight" style="background-image: url('${backdrop}');">
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <span class="badge bg-warning text-dark fw-bold px-2 py-1">${ratingBadge}</span>
              <span class="badge bg-dark border border-secondary text-light">${year}</span>
              <span class="badge bg-danger text-light fw-bold">${rankBadge}</span>
            </div>
            <h1 class="display-4 fw-extrabold text-white mb-2">${title}</h1>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-imdb-gold" onclick="playMovieTrailer(${localId})">
                <i class="fa-solid fa-play"></i> Watch Trailer
              </button>
              <button class="btn btn-glass-secondary" onclick="toggleWatchlist(${localId})">
                <i class="fa-solid fa-plus"></i> Watchlist
              </button>
              <a href="${movie.imdb_url}" target="_blank" class="btn btn-glass-secondary">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> IMDb Page
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (heroCarouselIndicators) {
    heroCarouselIndicators.innerHTML = featured.map((_, idx) => `
      <button type="button" data-bs-target="#heroSpotlightCarousel" data-bs-slide-to="${idx}" class="${idx === 0 ? "active" : ""}"></button>
    `).join("");
  }

  if (heroUpNextRail) {
    heroUpNextRail.innerHTML = upNext.map(movie => {
      const { localId, title, rating, poster, year } = movie;
      return `
        <div class="hero-up-next-card" onclick="openDetailsModal(${localId})">
          <img src="${poster}" class="hero-up-next-img" alt="${title}" onerror="this.src='https://via.placeholder.com/70x95/1a1d2e/f5c518?text=N%2FA'">
          <div class="overflow-hidden">
            ${rating ? `<span class="badge bg-warning text-dark small mb-1"><i class="fa-solid fa-star"></i> ${rating}</span>` : `<span class="badge bg-secondary small mb-1">N/A</span>`}
            <h6 class="fw-bold text-white text-truncate mb-1">${title}</h6>
            <p class="text-muted small mb-0">${year}</p>
          </div>
        </div>
      `;
    }).join("");
  }
}

function renderTop10() {
  if (!top10Grid || allMovies.length === 0) return;

  const sorted = [...allMovies]
    .filter(m => m.rating)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  top10Grid.innerHTML = sorted.map((movie, idx) => {
    const { localId, title, year, rating, poster } = movie;
    const isBookmarked = watchlist.includes(localId);

    return `
      <div class="col">
        <div class="movie-card">
          <button class="btn-bookmark ${isBookmarked ? "bookmarked" : ""}" onclick="toggleWatchlist(${localId})">
            <i class="fa-${isBookmarked ? "solid" : "regular"} fa-bookmark"></i>
          </button>
          <span class="rank-badge">#${idx + 1}</span>
          <div class="poster-wrapper" onclick="openDetailsModal(${localId})">
            <img src="${poster}" alt="${title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1a1d2e/f5c518?text=No+Image'">
          </div>
          <div class="movie-card-body">
            <div class="rating-row">
              <i class="fa-solid fa-star star-icon"></i>
              <span class="rating-score">${rating || "N/A"}</span>
            </div>
            <h6 class="movie-card-title" onclick="openDetailsModal(${localId})">${title}</h6>
            <div class="movie-meta-info">
              <span>${year}</span>
            </div>
            <button class="btn-card-trailer" onclick="playMovieTrailer(${localId})">
              <i class="fa-solid fa-play"></i> Trailer
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderMoviesGrid() {
  if (!moviesGrid) return;

  if (filteredMovies.length === 0) {
    moviesGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-film text-warning display-4 mb-3"></i>
        <h4 class="text-white">No movies found</h4>
        <p class="text-muted">Try a different search term or filter.</p>
        <button class="btn btn-imdb-gold btn-sm mt-2" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  moviesGrid.innerHTML = filteredMovies.map(movie => {
    const { localId, title, year, rating, votes, poster, type, topRank } = movie;
    const isBookmarked = watchlist.includes(localId);

    return `
      <div class="col">
        <div class="movie-card">
          <button class="btn-bookmark ${isBookmarked ? "bookmarked" : ""}" onclick="toggleWatchlist(${localId})">
            <i class="fa-${isBookmarked ? "solid" : "regular"} fa-bookmark"></i>
          </button>
          ${topRank ? `<span class="rank-badge">Top #${topRank}</span>` : ""}
          <div class="poster-wrapper" onclick="openDetailsModal(${localId})">
            <img src="${poster}" alt="${title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1a1d2e/f5c518?text=No+Image'">
          </div>
          <div class="movie-card-body">
            <div class="rating-row">
              <i class="fa-solid fa-star star-icon"></i>
              <span class="rating-score">${rating || "N/A"}</span>
              <span class="rating-votes">(${votes})</span>
            </div>
            <h6 class="movie-card-title" onclick="openDetailsModal(${localId})">${title}</h6>
            <div class="movie-meta-info">
              <span>${year}</span>
              <span>•</span>
              <span>${type}</span>
            </div>
            <button class="btn-card-trailer" onclick="playMovieTrailer(${localId})">
              <i class="fa-solid fa-play"></i> Trailer
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function applyFilters() {
  filteredMovies = allMovies.filter(movie => {
    const { title, year, type } = movie;

    let matchesSearch = true;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      matchesSearch = title.toLowerCase().includes(q) || String(year).includes(q);
    }

    let matchesGenre = true;
    if (activeGenre === "rated") {
      matchesGenre = movie.rating !== null;
    } else if (activeGenre === "unrated") {
      matchesGenre = movie.rating === null;
    } else if (activeGenre === "top") {
      matchesGenre = movie.topRank !== null;
    }

    return matchesSearch && matchesGenre;
  });

  renderMoviesGrid();
}

function playMovieTrailer(localId) {
  const movie = allMovies.find(m => m.localId === localId);
  if (!movie) return;

  const { title, year, rating, trailer } = movie;
  trailerModalTitle.innerHTML = `<i class="fa-solid fa-play text-warning"></i> ${title} — Trailer`;
  trailerModalMeta.textContent = `${year} • IMDb ★ ${rating || "N/A"}/10`;

  trailerVideoPlayer.src = trailer;
  trailerModal.show();
  trailerVideoPlayer.play().catch(() => {});
}

document.getElementById("trailerModal")?.addEventListener("hidden.bs.modal", () => {
  if (trailerVideoPlayer) {
    trailerVideoPlayer.pause();
    trailerVideoPlayer.currentTime = 0;
    trailerVideoPlayer.src = "";
  }
});

function openDetailsModal(localId) {
  const movie = allMovies.find(m => m.localId === localId);
  if (!movie) return;

  const { title, year, rating, votes, type, poster, backdrop, topRank, imdb_url } = movie;
  const isBookmarked = watchlist.includes(localId);

  movieDetailsContainer.innerHTML = `
    <div class="modal-header modal-header-custom border-0 pb-0 position-relative">
      <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body modal-body-custom pt-0">
      <div class="position-relative rounded-4 overflow-hidden mb-4" style="height: 220px;">
        <img src="${backdrop}" alt="${title}" class="w-100 h-100 object-fit-cover" onerror="this.style.background='#1a1d2e'">
        <div class="position-absolute w-100 h-100" style="background: linear-gradient(180deg, transparent 0%, rgba(18, 20, 26, 0.95) 100%); top: 0; left: 0;"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4 text-center">
          <img src="${poster}" alt="${title}" class="img-fluid rounded-3 shadow-lg mb-3 border border-secondary" style="max-height: 300px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x450/1a1d2e/f5c518?text=No+Image'">
          <button class="btn btn-imdb-gold w-100 mb-2" onclick="playMovieTrailer(${localId})">
            <i class="fa-solid fa-play"></i> Watch Trailer
          </button>
          <button class="btn btn-glass-secondary w-100 mb-2" onclick="toggleWatchlist(${localId})">
            <i class="fa-${isBookmarked ? "solid text-warning" : "regular"} fa-bookmark"></i>
            ${isBookmarked ? "In Watchlist" : "Add to Watchlist"}
          </button>
          <a href="${imdb_url}" target="_blank" class="btn btn-outline-warning w-100 rounded-pill btn-sm">
            <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> View on IMDb
          </a>
        </div>
        <div class="col-md-8">
          <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
            ${rating ? `<span class="badge bg-warning text-dark fw-bold"><i class="fa-solid fa-star"></i> ${rating}/10</span>` : ""}
            <span class="text-muted small">(${votes} votes)</span>
            <span class="badge bg-dark border border-secondary">${year}</span>
            <span class="badge bg-dark border border-secondary">${type}</span>
            ${topRank ? `<span class="badge bg-danger">Top #${topRank}</span>` : ""}
          </div>
          <h2 class="fw-bold text-white mb-3">${title}</h2>
          <div class="p-3 bg-dark bg-opacity-50 rounded-3 border border-secondary border-opacity-25">
            <span class="text-warning fw-bold small d-block mb-1">
              <i class="fa-solid fa-trophy me-1 text-warning"></i> IMDb RANKING
            </span>
            <span class="text-muted small">
              ${topRank ? `This title is ranked #${topRank} on IMDb's popularity chart.` : "This title is currently in the IMDb trending list."}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  movieDetailsModal.show();
}

function toggleWatchlist(localId) {
  const idx = watchlist.indexOf(localId);
  const movie = allMovies.find(m => m.localId === localId);
  const titleText = movie ? movie.title : "Title";

  if (idx > -1) {
    watchlist.splice(idx, 1);
    showToast(`Removed <strong>${titleText}</strong> from Watchlist`);
  } else {
    watchlist.push(localId);
    showToast(`Added <strong>${titleText}</strong> to Watchlist`);
  }

  localStorage.setItem("imdb_watchlist", JSON.stringify(watchlist));
  updateWatchlistUI();
  renderTop10();
  renderMoviesGrid();
}

function clearWatchlist() {
  watchlist = [];
  localStorage.setItem("imdb_watchlist", JSON.stringify(watchlist));
  updateWatchlistUI();
  renderTop10();
  renderMoviesGrid();
  showToast("Watchlist cleared");
}

function updateWatchlistUI() {
  if (watchlistCountBadge) watchlistCountBadge.textContent = watchlist.length;

  if (!watchlistItemsList) return;

  if (watchlist.length === 0) {
    watchlistItemsList.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-regular fa-bookmark text-muted display-4 mb-3"></i>
        <h6 class="text-white">Your Watchlist is empty</h6>
        <p class="text-muted small">Save movies and shows to watch later.</p>
      </div>
    `;
    return;
  }

  const saved = allMovies.filter(m => watchlist.includes(m.localId));

  watchlistItemsList.innerHTML = saved.map(movie => {
    const { localId, title, year, rating, poster } = movie;
    return `
      <div class="watchlist-item">
        <img src="${poster}" alt="${title}" class="watchlist-thumb" onerror="this.src='https://via.placeholder.com/55x75/1a1d2e/f5c518?text=N%2FA'">
        <div class="flex-grow-1 overflow-hidden">
          <h6 class="text-white text-truncate mb-1 fw-bold">${title}</h6>
          <div class="d-flex align-items-center gap-2 small text-muted">
            ${rating ? `<span><i class="fa-solid fa-star text-warning"></i> ${rating}</span><span>•</span>` : ""}
            <span>${year}</span>
          </div>
        </div>
        <div class="d-flex flex-column gap-1">
          <button class="btn btn-sm btn-outline-warning rounded-circle p-1" style="width:28px;height:28px;" onclick="playMovieTrailer(${localId})">
            <i class="fa-solid fa-play small"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger rounded-circle p-1" style="width:28px;height:28px;" onclick="toggleWatchlist(${localId})">
            <i class="fa-solid fa-xmark small"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function showToast(msg) {
  if (toastMessage) toastMessage.innerHTML = `<i class="fa-solid fa-circle-check text-warning"></i> ${msg}`;
  actionToast.show();
}

function resetFilters() {
  activeGenre = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".genre-filter-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.genre === "all");
  });

  filteredMovies = [...allMovies];
  renderMoviesGrid();
}

function handleSignIn(e) {
  e.preventDefault();
  const signInModal = bootstrap.Modal.getInstance(document.getElementById("signInModal"));
  if (signInModal) signInModal.hide();
  showToast("Welcome back! Signed in successfully.");
}

searchInput?.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  applyFilters();
});

genreFiltersBar?.addEventListener("click", (e) => {
  if (e.target.classList.contains("genre-filter-pill")) {
    document.querySelectorAll(".genre-filter-pill").forEach(p => p.classList.remove("active"));
    e.target.classList.add("active");
    activeGenre = e.target.dataset.genre;
    applyFilters();
  }
});

document.addEventListener("DOMContentLoaded", fetchMovies);
