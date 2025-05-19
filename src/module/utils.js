const overlay = (status) => {
  const overlayElem = document.querySelector("#overlay");
  if (status == "visible") {
    overlayElem.classList.remove("overlay-hide");
  } else if (status == "invisible") {
    overlayElem.classList.add("overlay-hide");
  } else {
    console.error(
      `In the dependent param overlay the status value must be between the two values ​​"visible" and "invisible".`
    );
  }
};

const toggleAccordion = (event, item) => {
  const accordionItems = item.querySelector(".accordion-item");
  const accordionIcon = item.querySelector(".accordion-icon");
  let isOpen = accordionItems.offsetHeight > 0;
  console.log(accordionIcon);
  if (!isOpen) {
    accordionItems.style.maxHeight = accordionItems.scrollHeight + "px";
    accordionIcon.style.transform = "rotate(-180deg)";
    isOpen = false;
  } else {
    accordionItems.style.maxHeight = "0px";
    accordionIcon.style.transform = "rotate(0deg)";
    isOpen = true;
  }
};

const menuStatus = () => {
  const sidebar = document.querySelector("#sidebar");
  overlay("visible");
  sidebar.classList.remove("-translate-x-full");
  sidebar.classList.add("translate-x-0");
};

const overlayHide = () => {
  overlay("invisible");
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-x-full");
};

export { menuStatus, overlayHide, toggleAccordion };
