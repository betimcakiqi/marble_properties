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

// Initialize Swiper
var swiper = null;

// Function to initialize or reinitialize Swiper with appropriate settings based on screen width
function initSwiper() {
  // Destroy existing Swiper instance if it exists
  if (swiper !== null) {
    swiper.destroy();
  }

  // Check the screen width
  if (window.innerWidth < 900) {
    // If screen width is less than 900px, initialize Swiper with 1 slide per view
    swiper = new Swiper(".references-swiper-section", {
      slidesPerView: 1,
      spaceBetween: 100,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      }
    });
  } else {
    // If screen width is 900px or more, initialize Swiper with 2 slides per view
    swiper = new Swiper(".references-swiper-section", {
      slidesPerView: 2,
      spaceBetween: 100,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      }
    });
  }
}

// Initialize or reinitialize Swiper when the page loads or when the window is resized
function initSwiperOnLoadAndResize() {
  initSwiper();

  // Re-initialize Swiper when the window is resized
  window.addEventListener('resize', function() {
    initSwiper();
  });
}

// Initialize or reinitialize Swiper when the page loads
window.addEventListener('load', function() {
  initSwiperOnLoadAndResize();
});
