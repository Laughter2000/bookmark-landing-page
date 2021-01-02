const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const closure = document.querySelector(".icon-close");
const body = document.querySelector("body");

const form = document.querySelector("form");
const input = document.querySelector("input");
const inputDiv = document.querySelector(".input-div");
const small = document.querySelector("small");
const errorImg = document.querySelector(".error-img");

var tabs = document.getElementsByClassName("tabs");
var tabActive = document.getElementsByClassName("tab-active");
const tabIllustration = document.getElementsByClassName("tab-illustration");
const tabH2 = document.getElementsByClassName("tab-h2");
const tabP = document.getElementsByClassName("tab-p");

var arrow = document.getElementsByClassName("arrow");
var answer = document.getElementsByClassName("answer");

const tabOne = {
  illustration: "./images/illustration-features-tab-1.svg",
  h2: "Bookmark in one click",
  content:
    "  Organize your bookmarks however you like. Our simple drag-and-drop interface \
  gives you complete control over how you manage your favourite sites.",
};

const tabTwo = {
  illustration: "./images/illustration-features-tab-2.svg",
  h2: "Intelligent search",
  content:
    "Our powerful search feature will help you find saved sites in no time at all. \
  No need to trawl through all of your bookmarks.",
};

const tabThree = {
  illustration: "./images/illustration-features-tab-3.svg",
  h2: "Share your bookmarks",
  content:
    " Easily share your bookmarks and collections with others. Create a shareable \
  link that you can send at the click of a button.",
};

const menuToggle = () => {
  var navList = nav.classList;
  if (window.matchMedia("(max-width: 759px)").matches) {
    if (!navList.contains("nav-toggle")) {
      nav.classList.add("nav-toggle");
      body.style.overflow = "hidden";
      menu.style.display = "none";
      logo.style.display = "none";
    } else {
      nav.classList.remove("nav-toggle");
      body.style.overflow = "initial";
      menu.style.display = "initial";
      logo.style.display = "initial";
    }
  } else {
    if (navList.contains("nav-toggle")) {
      nav.classList.remove("nav-toggle");
    }
  }
};

var i;
for (i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    var content = this.firstElementChild.textContent;
    var p = this.firstElementChild;

    if (content === "Simple Bookmarking") {
      var currentTab = document.getElementsByClassName("tab-active");
      for (var j = 0; j <= currentTab.length; j++) {
        currentTab[j].classList.remove("tab-active");
      }
      p.classList.add("no-hover");
      p.classList.add("tab-active");
      tabIllustration[0].src = tabOne.illustration;
      tabH2[0].textContent = tabOne.h2;
      tabP[0].textContent = tabOne.content;
    } else if (content === "Speedy Searching") {
      var currentTab = document.getElementsByClassName("tab-active");
      for (var j = 0; j <= currentTab.length; j++) {
        currentTab[j].classList.remove("tab-active");
      }
      p.classList.add("tab-active");
      tabIllustration[0].src = tabTwo.illustration;
      tabH2[0].textContent = tabTwo.h2;
      tabP[0].textContent = tabTwo.content;
    } else if (content === "Easy Sharing") {
      var currentTab = document.getElementsByClassName("tab-active");
      for (var j = 0; j <= currentTab.length; j++) {
        currentTab[j].classList.remove("tab-active");
      }
      p.classList.add("tab-active");
      tabIllustration[0].src = tabThree.illustration;
      tabH2[0].textContent = tabThree.h2;
      tabP[0].textContent = tabThree.content;
    }
  });
}

var i;
for (i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", function () {
    this.classList.toggle("arrow-icon");
    var answerDiv = this.parentNode.parentNode.nextElementSibling;
    if (answerDiv.style.maxHeight) {
      answerDiv.style.maxHeight = null;
    } else {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
    }
  });
}

const submitEmail = (e) => {
  e.preventDefault();
  var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  if (!email.test(input.value)) {
    inputDiv.classList.add("error-toggle");
    small.classList.add("toggle-visibility");
    errorImg.classList.add("toggle-visibility");
  } else {
    inputDiv.classList.remove("error-toggle");
    small.classList.remove("toggle-visibility");
    errorImg.classList.remove("toggle-visibility");
  }
};

closure.addEventListener("click", menuToggle);
menu.addEventListener("click", menuToggle);
form.addEventListener("submit", submitEmail);
