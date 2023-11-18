var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 75,
    },
  },
});
