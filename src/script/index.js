import { menuStatus, overlayHide, toggleAccordion } from "../module/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-btn");
  const sidebar = document.querySelector("#sidebar");
  const overlayElem = document.querySelector("#overlay");
  const accordion = document.querySelectorAll(".accordion");
  const close = document.querySelectorAll(".close");

  accordion.forEach((item) => {
    item.addEventListener("click", (event) => {
      toggleAccordion(event, item);
    });
  });

  close.forEach((item) => {
    item.addEventListener("click", overlayHide);
  });

  const menuFunc = () => {
    menuStatus();
  };

  const overlayHideFunc = () => {
    overlayHide();
  };

  menu.addEventListener("click", menuStatus);
  overlayElem.addEventListener("click", overlayHideFunc);
});
