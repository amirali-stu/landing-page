import { toggleAccordion, menuStatus, overlayHide } from "../../module/utils";

const menu = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const overlayElem = document.querySelector("#overlay");
const accordion = document.querySelectorAll(".accordion");
const close = document.querySelectorAll(".close");

close.forEach((item) => {
  item.addEventListener("click", overlayHide);
});

const overlayHideFunc = () => {
  overlayHide();
};

const menuFunc = () => {
  menuStatus();
};

menu.addEventListener("click", menuStatus);
overlayElem.addEventListener("click", overlayHideFunc);
export default aside;
