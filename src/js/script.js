"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.querySelector(".burger-menu");
  const burgerMenuBody = document.querySelector(".menu");
  const submenuTriggers = document.querySelectorAll(".menu__item");

  submenuTriggers.forEach((submenuTrigger) => {
    submenuTrigger.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
    });
  });

  function openBurgerMenu() {
    burgerMenuBody.classList.add("active");
    burgerMenuBtn.classList.add("active");
  }

  function closeBurgerMenu() {
    burgerMenuBody.classList.remove("active");
    burgerMenuBtn.classList.remove("active");
  }

  burgerMenuBtn.addEventListener("click", () => {
    if (!burgerMenuBody.classList.contains("active")) {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });
});
