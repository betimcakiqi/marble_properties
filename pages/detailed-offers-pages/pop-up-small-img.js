// Get the modal and modal image
var modal = document.getElementById("imageModal");
var modalContent = document.querySelector(".modal-content");
var modalImg = document.getElementById("modalImg");

// Variables to track image count and current index
var imageSources = [];
var currentImageIndex = 0;

// Function to show modal
function showImageModal() {
    modal.style.opacity = "1"; // Show modal by setting opacity to 1
    modalContent.style.opacity = "1"; // Show modal content by setting opacity to 1
    modal.style.pointerEvents = "auto"; // Allow interaction with modal

    // Disable scrolling
    document.body.style.overflow = "hidden"; 
    document.documentElement.style.overflowY = "hidden"; // Also prevent scrolling on html

    // Show the tooltip for 5 seconds
    showNavigationTooltip();
}

// Function to hide modal
function hideImageModal() {
    modal.style.opacity = "0"; // Hide modal by setting opacity to 0
    modalContent.style.opacity = "0"; // Hide modal content by setting opacity to 0
    modal.style.pointerEvents = "none"; // Disable interaction with modal

    // Enable scrolling
    document.body.style.overflow = "auto"; 
    document.documentElement.style.overflowY = "auto"; // Re-enable scrolling on html
}

// Function to show navigation tooltip for 5 seconds
function showNavigationTooltip() {
    var tooltip = document.getElementById("navigationTooltip");
    if (tooltip) {
        tooltip.style.opacity = "1";

        setTimeout(function() {
            tooltip.style.opacity = "0";
        }, 3000);
    }
}

// Function to change modal image source with transition
function updateImageInModal(src) {
    // Fade out modal content
    modalContent.style.opacity = "0";

    // Delay before changing image source
    setTimeout(function () {
        modalImg.src = src; // Change image source
        modalContent.style.opacity = "1"; // Fade in new image
        updateImageCounter(); // Update the image counter display
    }, 200); // Adjust delay time as needed
}

// Function to update the image counter display
function updateImageCounter() {
    var counter = document.getElementById("imageCounter");
    if (counter) {
        counter.textContent = `${currentImageIndex + 1} / ${imageSources.length}`;
    }
}

// Get all small and big images and add click event listener to each
var imgs = document.querySelectorAll(".small-img, .big-img");

imgs.forEach(function (img, index) {
    img.addEventListener("click", function () {
        showImageModal();
        modalImg.src = this.src;
        currentImageIndex = index;
        imageSources = Array.from(imgs).map(img => img.src); // Store all image sources
        updateImageCounter(); // Update the counter when opening modal
    });
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    hideImageModal();
});

// Close the modal when user clicks outside the modal content (image)
modal.addEventListener("click", function (event) {
    if (event.target !== modalImg) {
        hideImageModal();
    }
});

// Close modal when Esc key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideImageModal();
    }

    // Change image on arrow key press
    if (event.key === "ArrowLeft") {
        if (currentImageIndex > 0) {
            currentImageIndex--; // Only decrement if not the first image
            updateImageInModal(imageSources[currentImageIndex]);
        }
    } else if (event.key === "ArrowRight") {
        if (currentImageIndex < imageSources.length - 1) {
            currentImageIndex++; // Only increment if not the last image
            updateImageInModal(imageSources[currentImageIndex]);
        }
    }
});

// Variables to track touch start position for mobile swipe
var touchStartX = 0;
var touchEndX = 0;
var touchStartDist = 0; // For tracking pinch-to-zoom gesture
var isZooming = false; // To check if pinch zoom is happening

// Function to calculate distance between two touch points
function getTouchDistance(event) {
    if (event.touches.length === 2) {
        var touch1 = event.touches[0];
        var touch2 = event.touches[1];
        var distance = Math.sqrt(Math.pow(touch2.screenX - touch1.screenX, 2) + Math.pow(touch2.screenY - touch1.screenY, 2));
        return distance;
    }
    return 0;
}

// Function to handle touch start
function handleTouchStart(event) {
    if (event.touches.length === 2) {
        // If two fingers, we are likely zooming
        isZooming = true;
        touchStartDist = getTouchDistance(event);
    } else {
        // Single finger swipe
        isZooming = false;
        touchStartX = event.changedTouches[0].screenX;
    }
}

// Function to handle touch end and detect swipe direction
function handleTouchEnd(event) {
    if (!isZooming) {
        // Only handle swipe gesture if not zooming
        touchEndX = event.changedTouches[0].screenX;
        handleSwipeGesture();
    }
}

// Function to handle touch move for zoom detection
function handleTouchMove(event) {
    if (isZooming && event.touches.length === 2) {
        var touchMoveDist = getTouchDistance(event);
        var scaleChange = touchMoveDist / touchStartDist;

        // If the scale change is significant, we don't want to treat this as a swipe
        if (Math.abs(scaleChange - 1) > 0.1) {
            // We are zooming, don't slide images
            return;
        }
    }
}

// Function to detect the swipe direction
function handleSwipeGesture() {
    var swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        // Swipe right, show the previous image
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateImageInModal(imageSources[currentImageIndex]);
        }
    } else if (swipeDistance < -50) {
        // Swipe left, show the next image
        if (currentImageIndex < imageSources.length - 1) {
            currentImageIndex++;
            updateImageInModal(imageSources[currentImageIndex]);
        }
    }
}

// Add touch event listeners to the modal content
modalContent.addEventListener("touchstart", handleTouchStart, false);
modalContent.addEventListener("touchmove", handleTouchMove, false); // Track touch movements
modalContent.addEventListener("touchend", handleTouchEnd, false);
