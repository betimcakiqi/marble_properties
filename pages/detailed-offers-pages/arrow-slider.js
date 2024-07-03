var swiper;

function initSwiper() {
  var screenWidth = window.innerWidth;
  var slidesPerView;

  if (screenWidth >= 900) {
    slidesPerView = 3;
  } else {
    slidesPerView = 2;
  }

  swiper = new Swiper(".detailed-offer-small-img-slider", {
    slidesPerView: slidesPerView,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Initialize Swiper on page load
initSwiper();

// Update Swiper on window resize
window.addEventListener('resize', function() {
  if (swiper) {
    swiper.destroy(); // Destroy Swiper instance
  }
  initSwiper(); // Reinitialize Swiper with updated configuration
});


// CONTACT FORM TELEPHONE

document.getElementById('phone-number-input').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9+]/g, '');
});