let idElement = document.getElementById("div_id");
console.log(idElement);

let tagElements = document.getElementsByTagName("p");
console.log(tagElements);

let classElements = document.getElementsByClassName("my_span");
console.log(classElements);

let firstParagraph = document.querySelector("p");
console.log(firstParagraph);

let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

let contentDiv = document.querySelector("#div_id");
console.log(contentDiv.innerHTML);
console.log(contentDiv.textContent);
contentDiv.innerHTML = "new text in my div";
console.log(contentDiv.textContent);

let firstImage = document.images[0];
firstImage.src = "https://via.placeholder.com/200";
firstImage.alt = "altenate text";
firstImage.title = "image title";
firstImage.id = "1050";

let targetParagraph = document.querySelector("p.my_span");
console.log(targetParagraph.getAttribute("class"));
targetParagraph.setAttribute("id", "1000");

console.log(targetParagraph.getAttribute("title"));
if (targetParagraph.hasAttribute("data-src")) {
    if (targetParagraph.getAttribute("data-src") === "") {
        targetParagraph.removeAttribute("data-src");
    }
} else {
    console.log("not found");
}

let productContainer = document.createElement("div");
productContainer.className = "product";
let titleAttribute = document.createAttribute("title");
productContainer.setAttributeNode(titleAttribute);
productContainer.title = "title of products";
productContainer.setAttribute("id", "1999");
let productText = document.createTextNode("product one");
productContainer.appendChild(productText);
document.body.appendChild(productContainer);

let detailsContainer = document.createElement("div");
let headingElement = document.createElement("h2");
let descriptionElement = document.createElement("p");

let headingText = document.createTextNode("product one");
let descriptionText = document.createTextNode("product one in details salary name color");

detailsContainer.className = "div1";
headingElement.appendChild(headingText);
descriptionElement.appendChild(descriptionText);

detailsContainer.appendChild(headingElement);
detailsContainer.appendChild(descriptionElement);

document.body.append(detailsContainer);

let parentContainer = document.querySelector("#div_id");
console.log(parentContainer.children[0]);
console.log(parentContainer.childNodes);
console.log(parentContainer.firstChild);
console.log(parentContainer.firstElementChild);
console.log(parentContainer.lastChild);
console.log(parentContainer.lastElementChild);

let mouseEventButton = document.querySelector("#eventBtn");
mouseEventButton.onclick = function() {
    console.log("clicked");
};
mouseEventButton.oncontextmenu = function(e) {
    e.preventDefault();
    console.log("prevent default");
};

mouseEventButton.onmouseenter = function() {
    console.log("enter mouse");
};
mouseEventButton.onmouseleave = function() {
    console.log("leave button");
};
window.onscroll = function() {
    console.log("scroll");
};
window.onresize = function() {
    console.log("resize");
};

let usernameInputField = document.querySelector("[name='username']");
let ageInputField = document.querySelector("[name='age']");

document.forms[0].onsubmit = function(e) {
    let isUserValid = false;
    let isAgeValid = false;

    console.log(usernameInputField.value);
    console.log(usernameInputField.value.length);
    if (usernameInputField.value !== "" && usernameInputField.value.length <= 15) {
        isUserValid = true;
    }
    if (ageInputField.value !== "") {
        isAgeValid = true;
    }
    if (isUserValid === false || isAgeValid === false) {
        e.preventDefault();
        console.log("Validation error: check username length and age");
    }
};

let classListTargetDiv = document.querySelector("#div_id");
console.log(typeof classListTargetDiv.classList);
console.log(classListTargetDiv.classList.contains("one"));
console.log(classListTargetDiv.classList.item(0));
classListTargetDiv.classList.remove("two");
console.log(classListTargetDiv.classList.toggle("one"));

let classListActionButton = document.querySelector("#classBtn");
classListActionButton.onclick = function() {
    classListActionButton.classList.add("new1", "new2");
    classListActionButton.classList.remove("two");
    console.log("ClassList updated on button");
};
