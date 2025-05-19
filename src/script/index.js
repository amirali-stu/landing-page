import { menuStatus, overlayHide, toggleAccordion } from "../module/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu-btn");
  const sidebar = document.querySelector("#sidebar");
  const overlayElem = document.querySelector("#overlay");
  const accordion = document.querySelectorAll(".accordion");

  accordion.forEach((item) => {
    item.addEventListener("click", (event) => {
      toggleAccordion(event, item);
    });
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
