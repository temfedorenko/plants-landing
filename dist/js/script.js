"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const burgerMenuBtn = document.querySelector(".burger-menu");
  const burgerMenuBody = document.querySelector(".menu");
  const submenuTriggers = document.querySelectorAll(".menu__item");
  const body = document.querySelector("body");

  submenuTriggers.forEach((submenuTrigger) => {
    submenuTrigger.addEventListener("click", (e) => {
      const target = e.currentTarget;
      if (!target.classList.contains("active")) {
        openSubmenu(target);
      } else {
        closeSubmenu(target);
      }
    });
  });

  function openSubmenu(target) {
    submenuTriggers.forEach((submenuTrigger) => {
      submenuTrigger.classList.remove("active");
    });

    target.classList.add("active");
  }

  function closeSubmenu(target) {
    target.classList.remove("active");
  }

  function lockBody() {
    body.style.overflow = "hidden";
  }

  function unlockBody() {
    setTimeout(() => {
      body.style.overflow = "";
    }, 500);
  }

  function openBurgerMenu() {
    burgerMenuBody.classList.add("active");
    burgerMenuBtn.classList.add("active");
    lockBody();
  }

  function closeBurgerMenu() {
    burgerMenuBody.classList.remove("active");
    burgerMenuBtn.classList.remove("active");
    unlockBody();
  }

  burgerMenuBtn.addEventListener("click", () => {
    if (!burgerMenuBody.classList.contains("active")) {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });
});
