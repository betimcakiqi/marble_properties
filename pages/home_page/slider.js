document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.sec-and-component');

  function revealSections() {
      const triggerBottom = window.innerHeight / 5 * 4;

      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop < triggerBottom) {
              section.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', revealSections);
  revealSections(); // Initial call to show the home section
});



// OUR-TEAM DIV SLIDER
var ourTeamSwiper = null; // Rename variable to avoid conflicts

// Function to initialize or reinitialize Swiper with appropriate settings based on screen width
function initOurTeamSwiper() {
  // Destroy existing Swiper instance if it exists
  if (ourTeamSwiper !== null) {
    ourTeamSwiper.destroy();
  }

  // Check the screen width
  if (window.innerWidth < 900) {
    // If screen width is less than 900px, initialize Swiper with 2 slides per view
    ourTeamSwiper = new Swiper(".section-grid", {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    // If screen width is 900px or more, initialize Swiper with 3 slides per view
    ourTeamSwiper = new Swiper(".section-grid", {
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
  }
}

// Initialize or reinitialize Swiper when the page loads or when the window is resized
function initOurTeamSwiperOnLoadAndResize() {
  initOurTeamSwiper();

  // Re-initialize Swiper when the window is resized
  window.addEventListener('resize', function () {
    initOurTeamSwiper();
  });
}

// Initialize or reinitialize Swiper when the page loads
window.addEventListener('load', function () {
  initOurTeamSwiperOnLoadAndResize();
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
      spaceBetween: 50,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      }
    });
  } else {
    // If screen width is 900px or more, initialize Swiper with 2 slides per view
    swiper = new Swiper(".references-swiper-section", {
      slidesPerView: 2,
      spaceBetween: 50,
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
  window.addEventListener('resize', function () {
    initSwiper();
  });
}

// Initialize or reinitialize Swiper when the page loads
window.addEventListener('load', function () {
  initSwiperOnLoadAndResize();
});
