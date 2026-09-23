const moviesData = [
  {
    id: 1,
    title: "سفاح الجيزة",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 1,
    rating: 8.8,
    year: 2023,
    duration: "8 حلقات",
    genre: "جريمة / إثارة / دراما",
    description: "مستوحى من وقائع حقيقية، تتبع القصة رجلاً يبدو هادئاً وودوداً للجميع بينما يخفي وجهاً مظلماً وسلسلة من الجرائم والغموض في مناطق متفرقة بمصر.",
    cast: ["أحمد فهمي", "ركين سعد", "باسم سمرة", "صلاح عبد الله"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 2,
    title: "الحشاشين",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 2,
    rating: 9.1,
    year: 2024,
    duration: "30 حلقة",
    genre: "تاريخي / تشويق / دراما",
    description: "في القرن الحادي عشر، يؤسس حسن الصباح قلعة ألموت وفرقة الحشاشين السرية التي غيرت مسار التاريخ عبر تنفيذ عمليات اغتيال سياسية جريئة.",
    cast: ["كريم عبد العزيز", "فتحي عبد الوهاب", "ميرنا نور الدين", "أحمد عيد"],
    poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  },
  {
    id: 3,
    title: "كيرة والجن",
    category: "movies",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 3,
    rating: 8.5,
    year: 2022,
    duration: "ساعتان و 55 دقيقة",
    genre: "أكشن / تاريخي / دراما",
    description: "يرصد الفيلم حالة الغليان التي كانت تموج بها مصر إبان ثورة 1919، ومقاومة أبطال الفدائيين المصريين ضد الاحتلال الإنجليزي في إطار من الأكشن والبطولة.",
    cast: ["كريم عبد العزيز", "أحمد عز", "هند صبري", "سيد رجب"],
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
    id: 4,
    title: "موضوع عائلي",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 4,
    rating: 8.9,
    year: 2023,
    duration: "موسمان",
    genre: "كوميدي / عائلي / دراما",
    description: "يكتشف الشيف إبراهيم فجأة بعد سنوات طويلة أن لديه ابنة شابة، ويكون عليه التكفل برعايتها والتعامل مع المواقف الكوميدية والمؤثرة في آن واحد.",
    cast: ["ماجد الكدواني", "رنا رئيس", "طه دسوقي", "سماء إبراهيم"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/echo-hereweare.mp4"
  },
  {
    id: 5,
    title: "ولاد رزق 3: القاضية",
    category: "movies",
    isFree: false,
    isVIP: true,
    isTop10: true,
    topRank: 5,
    rating: 8.7,
    year: 2024,
    duration: "ساعتان و 10 دقائق",
    genre: "أكشن / جريمة / مغامرة",
    description: "بعد سنوات من الانفصال، يضطر الإخوة للعودة معاً لتنفيذ عملية مصيرية ومحفوفة بالمخاطر تأخذهم إلى مغامرة غير مسبوقة.",
    cast: ["أحمد عز", "عمرو يوسف", "آسر ياسين", "كريم قاسم"],
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  },
  {
    id: 6,
    title: "الغرفة 207",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 6,
    rating: 8.4,
    year: 2022,
    duration: "10 حلقات",
    genre: "رعب / غموض / إثارة",
    description: "في فندق لونا الساحلي عام 1968، يدخل النزلاء الغرفة 207 ولا يخرجون منها كما كانوا أبداً بسبب أحداث وأسرار خارقة للطبيعة.",
    cast: ["محمد فراج", "ريهام عبد الغفور", "ناردين فرج", "مراد مكرم"],
    poster: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 7,
    title: "بيت الروبي",
    category: "movies",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 7,
    rating: 7.9,
    year: 2023,
    duration: "ساعة و 45 دقيقة",
    genre: "كوميدي / اجتماعي",
    description: "إبراهيم الروبي يعيش في هدوء بعيداً عن المدينة، لكن عودة شقيقه الصغير تجبره على العودة للقاهرة ومواجهة عوالم وسائل التواصل الاجتماعي.",
    cast: ["كريم عبد العزيز", "نور", "كريم محمود عبد العزيز", "تارا عماد"],
    poster: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  },
  {
    id: 8,
    title: "نعمة الأفوكاتو",
    category: "series",
    isFree: false,
    isVIP: true,
    isTop10: true,
    topRank: 8,
    rating: 8.1,
    year: 2024,
    duration: "16 حلقة",
    genre: "دراما / تشويق / انتقام",
    description: "محامية شابة ومجتهدة تكرس حياتها لمساعدة زوجها وتتفاجأ بخيانته ومؤامرته ضدها، فتبدأ رحلة الانتقام واستعادة حقوقها.",
    cast: ["مي عمر", "أحمد زاهر", "أروى جودة", "كمال أبو رية"],
    poster: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
    id: 9,
    title: "شماريخ",
    category: "movies",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 9,
    rating: 7.8,
    year: 2023,
    duration: "ساعة و 50 دقيقة",
    genre: "أكشن / رومانسي / إثارة",
    description: "رجل ينفذ أوامر غير قانونية لوالده، يلتقي بفتاة تغير مسار حياته ويقرران الهروب معاً في مطاردة ملتهبة.",
    cast: ["آسر ياسين", "أمينة خليل", "خالد الصاوي", "آدم الشرقاوي"],
    poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/echo-hereweare.mp4"
  },
  {
    id: 10,
    title: "العربجي",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: true,
    topRank: 10,
    rating: 8.6,
    year: 2023,
    duration: "30 حلقة",
    genre: "شامي / إثارة / ملحمي",
    description: "عبدو العربجي يتحدى الظلم والفساد في حارة دمشقية قديمة، ويخوض صراعاً ملحمياً ضد المتنفذين دفاعاً عن الشرف والعدالة.",
    cast: ["باسم ياخور", "سلوم حداد", "ديمة قندلفت", "نادين خوري"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 11,
    title: "فاصل من اللحظات اللذيذة",
    category: "movies",
    isFree: true,
    isVIP: false,
    isTop10: false,
    rating: 8.2,
    year: 2024,
    duration: "ساعة و 40 دقيقة",
    genre: "كوميدي / فانتازيا",
    description: "زوجان يعيشان حياة روتينية مليئة بالمشاكل، يكتشفان بوابة زمنية تقودهما لنسخة مثالية ومرحة من حياتهما في عالم موازٍ.",
    cast: ["هشام ماجد", "هنا الزاهد", "محمد ثروت", "بيومي فؤاد"],
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  },
  {
    id: 12,
    title: "رشيد",
    category: "series",
    isFree: true,
    isVIP: false,
    isTop10: false,
    rating: 8.0,
    year: 2023,
    duration: "15 حلقة",
    genre: "دراما / تشويق / جريمة",
    description: "يقع رشيد ضحية لمكيدة تدمر حياته في ليلة زفافه ويدخل السجن ظلماً، ليخرج بعد سنوات باحثاً عن ابنه والانتقام ممن غدروا به.",
    cast: ["محمد ممدوح", "ريهام عبد الغفور", "صلاح عبد الله", "سيد رجب"],
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
  },
  {
    id: 13,
    title: "الإسكندراني",
    category: "movies",
    isFree: false,
    isVIP: true,
    isTop10: false,
    rating: 7.7,
    year: 2024,
    duration: "ساعتان",
    genre: "أكشن / دراما / صراع",
    description: "بكر الإسكندراني يدخل في صراعات عنيفة مع والده وأهل منطقته ويسافر للخارج، ليعود بعد تحقيق الثروة ويشعل حرباً على القلوب والأموال.",
    cast: ["أحمد العوضي", "زينة", "حسين فهمي", "بيومي فؤاد"],
    poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  },
  {
    id: 14,
    title: "البيت بيتي 2",
    category: "series",
    isFree: false,
    isVIP: true,
    isTop10: false,
    rating: 8.8,
    year: 2024,
    duration: "10 حلقات",
    genre: "كوميدي / رعب / مغامرة",
    description: "بينو وكراكيري يعودان في مغامرة جديدة لحل لغز فندق مهجور تحيط به لعنة قديمة ومواقف كوميدية مرعبة.",
    cast: ["كريم محمود عبد العزيز", "مصطفى خاطر", "ميرنا جميل", "سامي مغاوري"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://vjs.zencdn.net/v/oceans.mp4"
  },
  {
    id: 15,
    title: "تاج",
    category: "movies",
    isFree: true,
    isVIP: false,
    isTop10: false,
    rating: 7.2,
    year: 2023,
    duration: "ساعة و 48 دقيقة",
    genre: "أكشن / كوميدي / خيال علمي",
    description: "يكتشف الشاب تاج امتلاكه لقوى خارقة للطبيعة، ويدخل في صراع غير متوقع مع شقيقه التوأم هارون الذي يستغل قواه في الشر.",
    cast: ["تامر حسني", "دينا الشربيني", "ساندي", "عمرو عبد الجليل"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    videoUrl: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
  }
];

let heroCurrentIndex = 0;
let heroSlideTimer = null;

const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const heroBackdrop = document.getElementById("heroBackdrop");
const heroBadges = document.getElementById("heroBadges");
const heroMeta = document.getElementById("heroMeta");
const heroActionButtons = document.getElementById("heroActionButtons");
const heroIndicators = document.getElementById("heroIndicators");

const top10Slider = document.getElementById("top10Slider");
const freeSlider = document.getElementById("freeSlider");
const vipSlider = document.getElementById("vipSlider");
const seriesSlider = document.getElementById("seriesSlider");
const moviesSlider = document.getElementById("moviesSlider");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchResultsSection = document.getElementById("searchResultsSection");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchKeyword = document.getElementById("searchKeyword");
const searchCount = document.getElementById("searchCount");
const mainContent = document.getElementById("mainContent");

const videoPlayerModal = new bootstrap.Modal(document.getElementById("videoPlayerModal"));
const movieDetailsModal = new bootstrap.Modal(document.getElementById("movieDetailsModal"));
const vipPromoModal = new bootstrap.Modal(document.getElementById("vipPromoModal"));

const videoPlayer = document.getElementById("shahidVideoPlayer");
const playerMovieTitle = document.getElementById("playerMovieTitle");
const playerInfoTitle = document.getElementById("playerInfoTitle");
const playerInfoGenre = document.getElementById("playerInfoGenre");
const playerInfoDesc = document.getElementById("playerInfoDesc");
const playerInfoYear = document.getElementById("playerInfoYear");
const playerInfoRating = document.getElementById("playerInfoRating");
const playerInfoDuration = document.getElementById("playerInfoDuration");

const modalBackdrop = document.getElementById("modalBackdrop");
const modalBadges = document.getElementById("modalBadges");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalActions = document.getElementById("modalActions");
const modalDesc = document.getElementById("modalDesc");
const modalCast = document.getElementById("modalCast");

const toastElement = document.getElementById("shahidToast");
const toast = new bootstrap.Toast(toastElement);
const toastMessage = document.getElementById("toastMessage");

function createCardHTML(movie, isTopTen = false) {
  const { id, title, rating, year, duration, isFree, poster, topRank } = movie;

  const badgeTag = isFree
    ? `<span class="badge-free"><i class="fa-solid fa-play fs-8 me-1"></i> مجاني</span>`
    : `<span class="badge-vip-card"><i class="fa-solid fa-crown fs-8 me-1"></i> VIP</span>`;

  const cardMarkup = `
    <div class="movie-card" data-id="${id}">
      <div class="movie-poster-wrapper">
        <img class="movie-poster-img" src="${poster}" alt="${title}" loading="lazy" />
        <div class="movie-card-overlay">
          <div class="movie-badges-top">
            ${badgeTag}
          </div>
          <div class="movie-hover-play">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      <div class="movie-card-info">
        <h6 class="movie-card-title">${title}</h6>
        <div class="movie-card-meta">
          <span class="movie-card-rating">
            <i class="fa-solid fa-star"></i> ${rating}
          </span>
          <span>${year}</span>
          <span>${duration}</span>
        </div>
      </div>
    </div>
  `;

  if (isTopTen) {
    return `
      <div class="top10-card-wrapper">
        <div class="top10-rank-number">${topRank}</div>
        ${cardMarkup}
      </div>
    `;
  }

  return cardMarkup;
}

function renderAllSections() {
  const top10 = moviesData
    .filter(({ isTop10 }) => isTop10)
    .sort((a, b) => a.topRank - b.topRank);
  top10Slider.innerHTML = top10.map((item) => createCardHTML(item, true)).join("");

  const freeItems = moviesData.filter(({ isFree }) => isFree);
  freeSlider.innerHTML = freeItems.map((item) => createCardHTML(item)).join("");

  const vipItems = moviesData.filter(({ isVIP }) => isVIP);
  vipSlider.innerHTML = vipItems.map((item) => createCardHTML(item)).join("");

  const seriesItems = moviesData.filter(({ category }) => category === "series");
  seriesSlider.innerHTML = seriesItems.map((item) => createCardHTML(item)).join("");

  const movieItems = moviesData.filter(({ category }) => category === "movies");
  moviesSlider.innerHTML = movieItems.map((item) => createCardHTML(item)).join("");

  bindCardClickEvents();
}

function updateHeroBanner(index) {
  const featured = moviesData.slice(0, 5);
  const activeMovie = featured[index % featured.length];
  const { id, title, genre, year, duration, rating, description, backdrop, isFree, isVIP } = activeMovie;

  heroBackdrop.style.opacity = "0.2";
  setTimeout(() => {
    heroBackdrop.style.backgroundImage = `url('${backdrop}')`;
    heroBackdrop.style.opacity = "1";
  }, 150);

  heroBadges.innerHTML = `
    ${isFree ? '<span class="badge-free px-3 py-1 fs-7"><i class="fa-solid fa-play me-1"></i> متاح للمشاهدة مجاناً</span>' : ''}
    ${isVIP ? '<span class="badge-vip-card px-3 py-1 fs-7"><i class="fa-solid fa-crown me-1"></i> حصرياً لمشتركي VIP</span>' : ''}
    <span class="badge bg-secondary px-2 py-1 fs-8">HD 1080p</span>
  `;

  heroTitle.textContent = title;
  heroMeta.innerHTML = `
    <span class="text-accent fw-bold"><i class="fa-solid fa-star me-1"></i> ${rating}</span>
    <span>•</span>
    <span>${year}</span>
    <span>•</span>
    <span>${duration}</span>
    <span>•</span>
    <span class="text-light">${genre}</span>
  `;
  heroDesc.textContent = description;

  const btnLabel = isFree ? "شاهد مجاناً الآن" : "شاهد مع VIP";
  const btnIcon = isFree ? "fa-play" : "fa-crown";

  heroActionButtons.innerHTML = `
    <button class="btn-play-hero" id="heroPlayBtn" data-id="${id}">
      <i class="fa-solid ${btnIcon}"></i> ${btnLabel}
    </button>
    <button class="btn-info-hero" id="heroInfoBtn" data-id="${id}">
      <i class="fa-solid fa-circle-info"></i> التفاصيل
    </button>
    <button class="btn-icon-circle" id="heroAddListBtn" data-title="${title}">
      <i class="fa-solid fa-plus"></i>
    </button>
  `;

  heroIndicators.innerHTML = featured
    .map(
      (_, i) => `<button class="hero-indicator-dot ${i === index ? "active" : ""}" data-index="${i}"></button>`
    )
    .join("");

  document.getElementById("heroPlayBtn").addEventListener("click", () => handleWatch(id));
  document.getElementById("heroInfoBtn").addEventListener("click", () => openDetails(id));
  document.getElementById("heroAddListBtn").addEventListener("click", () => notify(`تمت إضافة "${title}" إلى قائمتك`));

  document.querySelectorAll(".hero-indicator-dot").forEach((dot) => {
    dot.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-index"), 10);
      heroCurrentIndex = idx;
      updateHeroBanner(heroCurrentIndex);
      restartHeroTimer();
    });
  });
}

function startHeroTimer() {
  heroSlideTimer = setInterval(() => {
    heroCurrentIndex = (heroCurrentIndex + 1) % 5;
    updateHeroBanner(heroCurrentIndex);
  }, 6000);
}

function restartHeroTimer() {
  clearInterval(heroSlideTimer);
  startHeroTimer();
}

function handleWatch(movieId) {
  const selected = moviesData.find(({ id }) => id === parseInt(movieId, 10));
  if (!selected) return;

  const { title, videoUrl, isFree, genre, description, year, rating, duration } = selected;

  if (isFree) {
    playerMovieTitle.textContent = title;
    playerInfoTitle.textContent = title;
    playerInfoGenre.textContent = genre;
    playerInfoDesc.textContent = description;
    playerInfoYear.innerHTML = `<i class="fa-regular fa-calendar me-1"></i> سنة الإصدار: ${year}`;
    playerInfoRating.innerHTML = `<i class="fa-solid fa-star text-warning me-1"></i> التقييم: ${rating} / 10`;
    playerInfoDuration.innerHTML = `<i class="fa-regular fa-clock me-1"></i> المدة: ${duration}`;

    videoPlayer.src = videoUrl;
    videoPlayerModal.show();
    videoPlayer.play().catch(() => {});
  } else {
    vipPromoModal.show();
  }
}

function openDetails(movieId) {
  const selected = moviesData.find(({ id }) => id === parseInt(movieId, 10));
  if (!selected) return;

  const { id, title, genre, year, duration, rating, description, backdrop, cast, isFree, isVIP } = selected;

  modalBackdrop.style.backgroundImage = `url('${backdrop}')`;
  modalTitle.textContent = title;
  modalDesc.textContent = description;

  modalBadges.innerHTML = `
    ${isFree ? '<span class="badge-free px-3 py-1"><i class="fa-solid fa-play me-1"></i> مجاني بالكامل</span>' : ''}
    ${isVIP ? '<span class="badge-vip-card px-3 py-1"><i class="fa-solid fa-crown me-1"></i> شاهد VIP</span>' : ''}
  `;

  modalMeta.innerHTML = `
    <span class="text-accent fw-bold"><i class="fa-solid fa-star me-1"></i> ${rating}</span>
    <span>•</span>
    <span>${year}</span>
    <span>•</span>
    <span>${duration}</span>
    <span>•</span>
    <span>${genre}</span>
  `;

  const playLabel = isFree ? "شاهد الآن مجاناً" : "تشغيل عبر VIP";
  modalActions.innerHTML = `
    <button class="btn-play-hero" id="modalPlayBtn" data-id="${id}">
      <i class="fa-solid fa-play"></i> ${playLabel}
    </button>
    <button class="btn-icon-circle" id="modalAddListBtn" data-title="${title}">
      <i class="fa-solid fa-plus"></i>
    </button>
  `;

  modalCast.innerHTML = cast.map((actor) => `<span class="cast-badge">${actor}</span>`).join("");

  document.getElementById("modalPlayBtn").addEventListener("click", () => {
    movieDetailsModal.hide();
    handleWatch(id);
  });

  document.getElementById("modalAddListBtn").addEventListener("click", () => {
    notify(`تمت إضافة "${title}" إلى قائمتك`);
  });

  movieDetailsModal.show();
}

function bindCardClickEvents() {
  document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      handleWatch(id);
    });
  });
}

function notify(text) {
  toastMessage.textContent = text;
  toast.show();
}

document.querySelectorAll(".slider-nav-btns .nav-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = this.getAttribute("data-target");
    const container = document.getElementById(target);
    const scrollStep = this.classList.contains("next-btn") ? -360 : 360;
    container.scrollBy({ left: scrollStep, behavior: "smooth" });
  });
});

document.querySelectorAll(".filter-pill").forEach((pill) => {
  pill.addEventListener("click", function () {
    document.querySelectorAll(".filter-pill").forEach((item) => item.classList.remove("active"));
    this.classList.add("active");

    const category = this.getAttribute("data-filter");

    const sectionElements = {
      top10: document.getElementById("top10-section"),
      free: document.getElementById("free-section"),
      vip: document.getElementById("vip-section"),
      series: document.getElementById("series-section"),
      movies: document.getElementById("movies-section")
    };

    if (category === "all") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "block"));
    } else if (category === "free") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "none"));
      sectionElements.free.style.display = "block";
    } else if (category === "top10") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "none"));
      sectionElements.top10.style.display = "block";
    } else if (category === "series") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "none"));
      sectionElements.series.style.display = "block";
    } else if (category === "movies") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "none"));
      sectionElements.movies.style.display = "block";
    } else if (category === "vip") {
      Object.values(sectionElements).forEach((el) => (el.style.display = "none"));
      sectionElements.vip.style.display = "block";
    }
  });
});

searchInput.addEventListener("input", function (e) {
  const { value } = e.target;
  const term = value.trim().toLowerCase();

  if (term.length > 0) {
    clearSearchBtn.classList.remove("d-none");
    const results = moviesData.filter(({ title, genre, description, cast }) => {
      return (
        title.toLowerCase().includes(term) ||
        genre.toLowerCase().includes(term) ||
        description.toLowerCase().includes(term) ||
        cast.some((actor) => actor.toLowerCase().includes(term))
      );
    });

    searchKeyword.textContent = term;
    searchCount.textContent = `(${results.length} عمل)`;
    searchResultsSection.classList.remove("d-none");
    mainContent.classList.add("d-none");

    if (results.length > 0) {
      searchResultsGrid.innerHTML = results
        .map(
          (movie) => `
          <div class="col-6 col-sm-4 col-md-3 col-lg-2">
            ${createCardHTML(movie)}
          </div>
        `
        )
        .join("");
    } else {
      searchResultsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="fa-solid fa-film display-1 text-secondary opacity-50 mb-3"></i>
          <h4 class="text-light">لم نتمكن من العثور على أي نتائج</h4>
          <p class="text-secondary">جرب البحث بكلمات أخرى أو تصفح العروض المجانية</p>
        </div>
      `;
    }

    bindCardClickEvents();
  } else {
    resetSearch();
  }
});

function resetSearch() {
  searchInput.value = "";
  clearSearchBtn.classList.add("d-none");
  searchResultsSection.classList.add("d-none");
  mainContent.classList.remove("d-none");
}

clearSearchBtn.addEventListener("click", resetSearch);

document.getElementById("closePlayerBtn").addEventListener("click", () => {
  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.load();
});

document.getElementById("videoPlayerModal").addEventListener("hidden.bs.modal", () => {
  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.load();
});

document.getElementById("vipSubscribeBtn").addEventListener("click", () => vipPromoModal.show());
document.getElementById("promoSubscribeBtn").addEventListener("click", () => vipPromoModal.show());

document.getElementById("playerLikeBtn").addEventListener("click", () => notify("شكراً لتفاعلك! تمت إضافة إعجابك"));
document.getElementById("playerAddListBtn").addEventListener("click", () => notify("تمت الإضافة إلى قائمتك المفضلة"));
document.getElementById("playerShareBtn").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({ title: "شاهد", text: "استمتع بمشاهدة هذا العمل على منصة شاهد!", url: window.location.href });
  } else {
    notify("تم نسخ رابط المشاركة إلى الحافظة");
  }
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-navbar");
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderAllSections();
  updateHeroBanner(0);
  startHeroTimer();
});
