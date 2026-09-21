const filterTabs = document.querySelectorAll(".our-work ul li");
const portfolioItems = document.querySelectorAll(".our-work .product > div");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((item) => {
      item.classList.remove("active");
    });
    tab.classList.add("active");

    const category = tab.getAttribute("data-filter");

    portfolioItems.forEach((col) => {
      const box = col.querySelector(".box");
      const itemCategory = box.getAttribute("data-item");

      if (category === "all" || itemCategory === category) {
        col.style.display = "block";
      } else {
        col.style.display = "none";
      }
    });
  });
});

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
