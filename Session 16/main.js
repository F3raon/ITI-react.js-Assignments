document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const scrollButtons = document.querySelectorAll(".btn-arrow");
    scrollButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const targetRow = document.getElementById(targetId);
            if (targetRow) {
                const isLeft = btn.classList.contains("scroll-left");
                const scrollAmount = 450;
                targetRow.scrollBy({
                    left: isLeft ? scrollAmount : -scrollAmount,
                    behavior: "smooth"
                });
            }
        });
    });

    const categoryPills = document.querySelectorAll(".btn-category");
    const allCards = document.querySelectorAll(".stream-card, .top10-card");

    categoryPills.forEach(pill => {
        pill.addEventListener("click", () => {
            categoryPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");

            const filter = pill.getAttribute("data-filter");

            allCards.forEach(card => {
                const categories = card.getAttribute("data-category") || "";
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    const searchInput = document.getElementById("headerSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            allCards.forEach(card => {
                const titleElement = card.querySelector(".title") || card.querySelector("h6");
                const title = titleElement ? titleElement.textContent.toLowerCase() : "";
                if (title.includes(query)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    let watchlist = JSON.parse(localStorage.getItem("watchit_watchlist") || "[]");
    const countBadge = document.getElementById("watchlistCount");
    const watchlistContainer = document.getElementById("watchlistItems");
    const toastElement = document.getElementById("actionToast");
    const toastTitle = document.getElementById("toastTitle");
    const toastBody = document.getElementById("toastBody");
    const bsToast = toastElement ? new bootstrap.Toast(toastElement) : null;

    function updateWatchlistUI() {
        if (countBadge) {
            countBadge.textContent = watchlist.length;
        }

        if (watchlistContainer) {
            watchlistContainer.innerHTML = "";
            if (watchlist.length === 0) {
                watchlistContainer.innerHTML = '<p class="text-muted text-center py-4">قائمتك فارغة حالياً. اضغط على + لإضافة أفلام ومسلسلات.</p>';
                return;
            }

            watchlist.forEach(item => {
                const div = document.createElement("div");
                div.className = "watchlist-item";
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="info">
                        <h6 class="mb-1 text-white">${item.title}</h6>
                        <span class="badge bg-secondary">تم الحفظ</span>
                    </div>
                    <button class="remove-btn" data-id="${item.id}"><i class="fa-solid fa-trash-can"></i></button>
                `;

                div.querySelector(".remove-btn").addEventListener("click", () => {
                    removeFromWatchlist(item.id);
                });

                watchlistContainer.appendChild(div);
            });
        }
    }

    function addToWatchlist(id, title, img) {
        if (!watchlist.some(item => item.id === id)) {
            watchlist.push({ id, title, img });
            localStorage.setItem("watchit_watchlist", JSON.stringify(watchlist));
            updateWatchlistUI();
            if (bsToast) {
                toastTitle.textContent = "تمت الإضافة";
                toastBody.textContent = `تمت إضافة "${title}" إلى قائمتك بنجاح.`;
                bsToast.show();
            }
        } else {
            if (bsToast) {
                toastTitle.textContent = "تنبيه";
                toastBody.textContent = `"${title}" موجود بالفعل في قائمتك.`;
                bsToast.show();
            }
        }
    }

    function removeFromWatchlist(id) {
        watchlist = watchlist.filter(item => item.id !== id);
        localStorage.setItem("watchit_watchlist", JSON.stringify(watchlist));
        updateWatchlistUI();
    }

    document.querySelectorAll(".add-watchlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const id = btn.getAttribute("data-id");
            const title = btn.getAttribute("data-title");
            const img = btn.getAttribute("data-img");
            addToWatchlist(id, title, img);
        });
    });

    updateWatchlistUI();

    const videoModalElement = document.getElementById("videoModal");
    const modalVideoPlayer = document.getElementById("modalVideoPlayer");
    const videoModalTitle = document.getElementById("videoModalTitle");

    document.querySelectorAll(".btn-watch-now").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const title = btn.getAttribute("data-title") || "مشاهدة العمل";
            const videoSrc = btn.getAttribute("data-video");

            if (videoModalTitle) videoModalTitle.textContent = title;
            if (modalVideoPlayer && videoSrc) {
                modalVideoPlayer.src = videoSrc;
                const bsModal = new bootstrap.Modal(videoModalElement);
                bsModal.show();
                modalVideoPlayer.play();
            }
        });
    });

    if (videoModalElement && modalVideoPlayer) {
        videoModalElement.addEventListener("hidden.bs.modal", () => {
            modalVideoPlayer.pause();
            modalVideoPlayer.currentTime = 0;
        });
    }

    const detailsModal = document.getElementById("detailsModal");
    if (detailsModal) {
        detailsModal.addEventListener("show.bs.modal", (e) => {
            const button = e.relatedTarget;
            if (button) {
                const title = button.getAttribute("data-title");
                const desc = button.getAttribute("data-desc");
                const genre = button.getAttribute("data-genre");

                document.getElementById("detailTitle").textContent = title || "تفاصيل العمل";
                document.getElementById("detailDescription").textContent = desc || "";
                document.getElementById("detailGenre").textContent = genre || "";
            }
        });
    }

    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const htmlTag = document.documentElement;
            const currentLang = htmlTag.getAttribute("lang");

            if (currentLang === "ar") {
                htmlTag.setAttribute("lang", "en");
                htmlTag.setAttribute("dir", "ltr");
                langToggleBtn.innerHTML = '<i class="fa-solid fa-globe me-1"></i> AR';
                document.querySelector(".search-input").placeholder = "Search movies or series...";
            } else {
                htmlTag.setAttribute("lang", "ar");
                htmlTag.setAttribute("dir", "rtl");
                langToggleBtn.innerHTML = '<i class="fa-solid fa-globe me-1"></i> EN';
                document.querySelector(".search-input").placeholder = "ابحث عن فيلم أو مسلسل...";
            }
        });
    }
});
