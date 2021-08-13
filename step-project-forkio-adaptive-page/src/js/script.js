"use strict";
const menuBtn = document.querySelector(".header__button"),
  menu = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("header__button--active")) {
    removeMenu();
    document.addEventListener("click", (evt) => {
      if (evt.target.tagName === "HEADER" || evt.target.tagName === "ARTICLE") {
        removeMenu();
      }
    });
  } else {
    menuBtn.classList.add("header__button--active");
    menu.classList.remove("header__nav--active");
  }
});

function removeMenu() {
  menuBtn.classList.remove("header__button--active");
  menu.classList.add("header__nav--active");
}
