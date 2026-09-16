const appContainer = document.getElementById("app") || document.body;

const card = document.createElement("article");
card.classList.add("profile-card");

const banner = document.createElement("div");
banner.classList.add("card-banner");

const bannerBadge = document.createElement("span");
bannerBadge.classList.add("banner-badge");
bannerBadge.innerHTML = '<i class="fa-solid fa-code"></i> Developer';
banner.appendChild(bannerBadge);

const avatarWrap = document.createElement("div");
avatarWrap.classList.add("avatar-wrap");

const avatarImg = document.createElement("img");
avatarImg.src = "PortfolioImage.png";
avatarImg.alt = "Ahmed Hamada";

const statusDot = document.createElement("span");
statusDot.classList.add("status-dot");
statusDot.title = "Available for hire";

avatarWrap.appendChild(avatarImg);
avatarWrap.appendChild(statusDot);

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const nameHeading = document.createElement("h2");
nameHeading.classList.add("profile-name");
nameHeading.textContent = "Ahmed Hamada";

const roleBadge = document.createElement("span");
roleBadge.classList.add("profile-role");
roleBadge.textContent = "Full-Stack Developer (React & .NET)";

const bioParagraph = document.createElement("p");
bioParagraph.classList.add("profile-bio");
bioParagraph.textContent = "Passionate software engineer building fast, responsive web applications with modern frontend and scalable backend systems.";

const statsContainer = document.createElement("div");
statsContainer.classList.add("stats-container");

const statsData = [
    { number: "18+", label: "Projects" },
    { number: "1.5+", label: "Years Exp" },
    { number: "520", label: "Followers", id: "followers-count" }
];

statsData.forEach(item => {
    const statItem = document.createElement("div");
    statItem.classList.add("stat-item");

    const statNum = document.createElement("h3");
    statNum.textContent = item.number;
    if (item.id) statNum.id = item.id;

    const statLabel = document.createElement("span");
    statLabel.textContent = item.label;

    statItem.appendChild(statNum);
    statItem.appendChild(statLabel);
    statsContainer.appendChild(statItem);
});

const skillsContainer = document.createElement("div");
skillsContainer.classList.add("skills-container");

const skillsList = ["HTML5", "CSS3", "JavaScript", "React.js", ".NET", "C#", "SQL Server", "Git"];
skillsList.forEach(skill => {
    const skillBadge = document.createElement("span");
    skillBadge.classList.add("skill-badge");
    skillBadge.textContent = skill;
    skillsContainer.appendChild(skillBadge);
});

const actionsContainer = document.createElement("div");
actionsContainer.classList.add("actions-container");

const followBtn = document.createElement("button");
followBtn.classList.add("btn", "btn-follow");
followBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Follow';

let isFollowing = false;
followBtn.addEventListener("click", () => {
    const countElement = document.getElementById("followers-count");
    if (!isFollowing) {
        followBtn.classList.add("following");
        followBtn.innerHTML = '<i class="fa-solid fa-check"></i> Following';
        if (countElement) countElement.textContent = "521";
        isFollowing = true;
    } else {
        followBtn.classList.remove("following");
        followBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Follow';
        if (countElement) countElement.textContent = "520";
        isFollowing = false;
    }
});

const contactBtn = document.createElement("a");
contactBtn.classList.add("btn", "btn-contact");
contactBtn.href = "mailto:ah4482336@gmail.com";
contactBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Contact Me';

actionsContainer.appendChild(followBtn);
actionsContainer.appendChild(contactBtn);

const socialContainer = document.createElement("div");
socialContainer.classList.add("social-container");

const socials = [
    { icon: "fa-brands fa-github", url: "https://github.com/F3raon" },
    { icon: "fa-brands fa-linkedin-in", url: "#" },
    { icon: "fa-brands fa-twitter", url: "#" },
    { icon: "fa-solid fa-envelope", url: "mailto:ah4482336@gmail.com" }
];

socials.forEach(s => {
    const link = document.createElement("a");
    link.classList.add("social-link");
    link.href = s.url;
    link.target = "_blank";
    link.innerHTML = `<i class="${s.icon}"></i>`;
    socialContainer.appendChild(link);
});

cardBody.appendChild(nameHeading);
cardBody.appendChild(roleBadge);
cardBody.appendChild(bioParagraph);
cardBody.appendChild(statsContainer);
cardBody.appendChild(skillsContainer);
cardBody.appendChild(actionsContainer);
cardBody.appendChild(socialContainer);

card.appendChild(banner);
card.appendChild(avatarWrap);
card.appendChild(cardBody);

appContainer.appendChild(card);
