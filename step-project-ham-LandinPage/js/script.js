"use strict";
//tabs services
const serviceWrapper = document.querySelector(".services-wrapper"),
  content = document.querySelectorAll(".services-item-description");
serviceWrapper.addEventListener("click", (event) => {
  clearedStyleToElement(event);
  content.forEach((e) => {
    if (e.dataset.article === event.target.dataset.id) {
      e.classList.add("services-item-active");
      event.target.classList.add("services-block-active");
    }
  });
});
function clearedStyleToElement(event) {
  content.forEach((iterator) =>
    iterator.classList.remove("services-item-active")
  );
  const servicesBlocks = serviceWrapper.children;
  for (const el of servicesBlocks) {
    if (el !== event.target) {
      el.classList.remove("services-block-active");
    }
  }
}

//amazing block pictures

function filterTabImage(evt, elem, i) {
  if (elem.dataset.filter === evt.target.dataset.id && i <= 15) {
    elem.classList.add("amazing-db");
  }
  if (elem.dataset.filter !== evt.target.dataset.id) {
    elem.classList.add("amazing-dn");
    elem.classList.remove("amazing-db");
  }
  if (evt.target.dataset.id === "all" && i <= 15) {
    elem.classList.add("amazing-db");
    elem.classList.remove("amazing-dn");
  }
}

function loadingToShowNewPicture(arr, loader, withFun, className) {
  loader.style.cssText = "display: block;";
  setTimeout(() => {
    arr.forEach((item) => {
      if (item.classList.contains(className)) {
        item.classList.remove(className);
        if (withFun == true) {
          inisializationGallary();
        }
      }
    });
    loader.remove();
  }, 2000);
}

const amazingBlokWrapper = document.querySelectorAll(".amazing-blok-inner"),
  amazingMenu = document.querySelector(".amazing-work-menu"),
  buttonPlus = document.getElementById("button-plus");

amazingMenu.addEventListener("click", (event) => {
  amazingBlokWrapper.forEach((li, index) => {
    filterTabImage(event, li, index);
  });
});

buttonPlus.addEventListener("click", () => {
  buttonPlus.remove();
  const loaderAmazing = document.querySelector(".gooey-loader"),
    loadinPic = document.querySelectorAll(".amazing-dn");
  loadingToShowNewPicture(loadinPic, loaderAmazing, false, "amazing-dn");
  amazingMenu.addEventListener("click", (event) => {
    amazingBlokWrapper.forEach((li) => {
      filterTabImage(event, li, false);
    });
  });
});

// gallery
const buttonGallary = document.getElementById("button-plus-gallery");
buttonGallary.addEventListener("click", () => {
  const itemsGallery = document.querySelectorAll(".item-gallery"),
    galleryLoader = document.querySelector(".gooey-loader-gallery"),
    buttonPlusGallary = document.getElementById("button-plus-gallery");

  buttonPlusGallary.remove();
  loadingToShowNewPicture(itemsGallery, galleryLoader, true, "gallery-dn");
});

//slider

$(function () {
  $(".people-slider").slick({
    arrows: true,
    dots: true,
    speed: 1500,
    easing: "ease",
    centerMode: true,
  });
});

//masonry

$(function () {
  inisializationGallary();
});
function inisializationGallary() {
  $(".gallery-wrapper").masonry({
    itemSelector: ".item-gallery",
    gutter: 10,
    columnWidth: 380,
  });
}
