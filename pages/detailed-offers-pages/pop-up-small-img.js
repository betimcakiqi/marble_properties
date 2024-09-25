// Get the modal and modal image
var modal = document.getElementById("imageModal");
var modalContent = document.querySelector(".modal-content");
var modalImg = document.getElementById("modalImg");

// Array to store image sources
var imageSources = [];
var currentImageIndex = 0;

// Store original overflow and overflow-x values for html and body
var originalOverflow = document.body.style.overflow;
var originalOverflowX = document.body.style.overflowX;
var originalHtmlOverflowX = document.documentElement.style.overflowX;

// Function to show modal
function showModal() {
    modal.style.opacity = "1"; // Show modal by setting opacity to 1
    modalContent.style.opacity = "1"; // Show modal content by setting opacity to 1
    modal.style.pointerEvents = "auto"; // Allow interaction with modal

    // Disable vertical scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Temporarily allow horizontal scrolling by removing overflow-x: hidden
    document.body.style.overflowX = "auto";
    document.documentElement.style.overflowX = "auto";
}

// Function to hide modal
function hideModal() {
    modal.style.opacity = "0"; // Hide modal by setting opacity to 0
    modalContent.style.opacity = "0"; // Hide modal content by setting opacity to 0
    modal.style.pointerEvents = "none"; // Disable interaction with modal

    // Restore original overflow-x and overflow settings
    document.body.style.overflow = originalOverflow;
    document.documentElement.style.overflow = originalOverflow;

    document.body.style.overflowX = originalOverflowX || "hidden";
    document.documentElement.style.overflowX = originalHtmlOverflowX || "hidden";
}

// Function to change modal image source with transition
function changeModalImage(src) {
    // Fade out modal content
    modalContent.style.opacity = "0";

    // Delay before changing image source
    setTimeout(function () {
        modalImg.src = src; // Change image source
        modalContent.style.opacity = "1"; // Fade in new image
    }, 300); // Adjust delay time as needed (300 milliseconds in this case)
}

// Get all small and big images and add click event listener to each
var imgs = document.querySelectorAll(".small-img, .big-img");

imgs.forEach(function (img, index) {
    img.addEventListener("click", function () {
        showModal();
        modalImg.src = this.src;
        currentImageIndex = index;
        imageSources = Array.from(imgs).map(img => img.src); // Store all image sources
    });
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    hideModal();
});

// Close the modal when user clicks outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        hideModal();
    }
});

// Close modal when Esc key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideModal();
    }

    // Change image on arrow key press
    if (event.key === "ArrowLeft") {
        currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
        changeModalImage(imageSources[currentImageIndex]);
    } else if (event.key === "ArrowRight") {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        changeModalImage(imageSources[currentImageIndex]);
    }
});

// Variables to track touch start position for mobile swipe
var touchStartX = 0;
var touchEndX = 0;

// Function to handle touch start
function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

// Function to handle touch end and detect swipe direction
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipeGesture();
}

// Function to detect the swipe direction
function handleSwipeGesture() {
    var swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        // Swipe right, show the previous image
        currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
        changeModalImage(imageSources[currentImageIndex]);
    } else if (swipeDistance < -50) {
        // Swipe left, show the next image
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        changeModalImage(imageSources[currentImageIndex]);
    }
}

// Add touch event listeners to the modal content
modalContent.addEventListener("touchstart", handleTouchStart, false);
modalContent.addEventListener("touchend", handleTouchEnd, false);
