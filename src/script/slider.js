const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000, // هر ۱ ثانیه
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: "auto",

  slidesPerView: 2,
//   spaceBetween: 10,
  breakpoints: {
    // >= 640px
    640: {
      slidesPerView: 3,
    },
    // >= 768px
    768: {
      slidesPerView: 4,
    },
    // >= 1024px
    1024: {
      slidesPerView: 7,
    },
  },
});
