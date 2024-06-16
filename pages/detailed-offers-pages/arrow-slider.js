var swiper = new Swiper(".detailed-offer-small-img-slider", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});


// CONTACT FORM TELEPHONE

document.getElementById('phone-number-input').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9+]/g, '');
});