const menu = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");

export const menuFunc = () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
};

menu.addEventListener("click", menuStatus);
