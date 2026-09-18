let isLightMode = false;
let currentAccentColor = "#f95700";

const themeBtn = document.getElementById("btn-theme");
const colorBtn = document.getElementById("btn-color");
const colorPopup = document.getElementById("color-palette-popup");
const customColorInput = document.getElementById("custom-color-input");
const colorDots = document.querySelectorAll(".color-dot");
const themeIcon = themeBtn.querySelector("i");
const themeText = themeBtn.querySelector("span");

function syncLocationAndStorage(mode, color) {
    const cleanColor = color.replace("#", "");
    window.location.hash = `mode=${mode}&color=${cleanColor}`;
    window.localStorage.setItem("user_theme_mode", mode);
    window.localStorage.setItem("user_accent_color", color);
}

function updateActiveDot(color) {
    colorDots.forEach(dot => {
        if (dot.getAttribute("data-color").toLowerCase() === color.toLowerCase()) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
    if (customColorInput) {
        customColorInput.value = color;
    }
}

function applyTheme(mode, color) {
    currentAccentColor = color;

    if (mode === "light") {
        document.body.classList.add("light-theme");
        themeIcon.className = "fa-solid fa-sun";
        themeText.textContent = "Light";
        isLightMode = true;
    } else {
        document.body.classList.remove("light-theme");
        themeIcon.className = "fa-solid fa-moon";
        themeText.textContent = "Dark";
        isLightMode = false;
    }

    document.documentElement.style.setProperty("--accent-color", color);
    updateActiveDot(color);
}

function initFromLocationOrStorage() {
    let mode = "dark";
    let color = "#f95700";

    const hashString = window.location.hash.replace("#", "");
    const urlParams = new URLSearchParams(hashString || window.location.search);

    const hashMode = urlParams.get("mode");
    const hashColor = urlParams.get("color");

    const savedMode = window.localStorage.getItem("user_theme_mode");
    const savedColor = window.localStorage.getItem("user_accent_color");

    if (hashMode) {
        mode = hashMode;
    } else if (savedMode) {
        mode = savedMode;
    }

    if (hashColor) {
        color = hashColor.startsWith("#") ? hashColor : `#${hashColor}`;
    } else if (savedColor) {
        color = savedColor;
    }

    applyTheme(mode, color);
}

themeBtn.addEventListener("click", () => {
    isLightMode = !isLightMode;
    const currentMode = isLightMode ? "light" : "dark";
    applyTheme(currentMode, currentAccentColor);
    syncLocationAndStorage(currentMode, currentAccentColor);
});

colorBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    colorPopup.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!colorPopup.contains(e.target) && e.target !== colorBtn && !colorBtn.contains(e.target)) {
        colorPopup.classList.remove("show");
    }
});

colorDots.forEach(dot => {
    dot.addEventListener("click", () => {
        const selectedColor = dot.getAttribute("data-color");
        const currentMode = isLightMode ? "light" : "dark";
        applyTheme(currentMode, selectedColor);
        syncLocationAndStorage(currentMode, selectedColor);
    });
});

if (customColorInput) {
    customColorInput.addEventListener("input", (e) => {
        const pickedColor = e.target.value;
        const currentMode = isLightMode ? "light" : "dark";
        applyTheme(currentMode, pickedColor);
        syncLocationAndStorage(currentMode, pickedColor);
    });
}

window.addEventListener("hashchange", () => {
    initFromLocationOrStorage();
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

window.addEventListener("DOMContentLoaded", () => {
    initFromLocationOrStorage();
});
