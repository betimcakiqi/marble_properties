// OUR-TEAM DIV SLIDER
var swiper = new Swiper(".section-grid", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// REFERENCES SCROLL BAR

var swiper = new Swiper(".references-swiper-section", {
  slidesPerView: '2',
  spaceBetween: 100,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});