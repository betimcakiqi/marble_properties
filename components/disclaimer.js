document.addEventListener("DOMContentLoaded", function () {
    // Check if the disclaimer has already been shown
    if (!localStorage.getItem('disclaimerShown')) {

        // Create the overlay and modal
        const disclaimerModal = document.createElement("div");
        disclaimerModal.innerHTML = `
        <div id="disclaimer-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(250, 250, 250, 0.5); backdrop-filter: blur(5px); display: flex; justify-content: center; align-items: center; z-index: 9999;">
            <div id="disclaimer-content" style="background: #162447; padding: 40px; max-width: 500px; border-radius: 15px; text-align: center; box-shadow: 0px 5px 15px rgba(0,0,0,0.5); opacity: 0; transform: translateY(-100%); transition: opacity 0.5s ease, transform 0.5s ease;">
                <h2 style="font-family: 'Merriweather', serif; font-size: 26px; color: #FFFFFF; margin-bottom: 15px;">Heads Up!</h2>
                <p style="font-family: 'Open Sans', sans-serif; font-size: 18px; color: #EAEAEA; line-height: 1.6; margin-bottom: 20px;">
                    This is a personal project by <strong style="color: #00A8E1;">Betim Cakiqi</strong> for <strong style="color: #00A8E1;">Marble Properties</strong>. All the information presented here is fictional and should not be considered factual or accurate.
                </p>
                <button id="close-disclaimer" style="padding: 12px 25px; background-color: #00A8E1; color: #ffffff; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; font-family: 'Open Sans', sans-serif; transition: background-color 0.3s;">
                    I Wish to Proceed
                </button>
            </div>
        </div>
        `;

        document.body.appendChild(disclaimerModal);

        // Disable vertical scrolling when modal is open
        document.body.style.overflowY = "hidden"; 
        document.documentElement.style.overflowY = "hidden";  // For some browsers

        // Show the modal immediately
        const overlay = document.getElementById("disclaimer-overlay");
        overlay.style.display = "flex"; // Show overlay initially

        const content = document.getElementById("disclaimer-content");

        // Add animation for modal appearance
        setTimeout(() => {
            content.style.opacity = "1"; // Fade in
            content.style.transform = "translateY(0)"; // Move to center
        }, 0); // No delay

        document.getElementById("close-disclaimer").addEventListener("click", function () {
            // Add animation for modal disappearance
            content.style.opacity = "0"; // Fade out
            content.style.transform = "translateY(-100%)"; // Move up

            setTimeout(() => {
                // Hide modal after animation
                overlay.style.display = "none"; // Remove the overlay completely

                // Re-enable vertical scrolling
                document.body.style.overflowY = "auto"; 
                document.documentElement.style.overflowY = "auto"; // Re-enable for browsers

                // Store the flag in localStorage to indicate the disclaimer has been shown
                localStorage.setItem('disclaimerShown', 'true');
            }, 500); // Match the timeout with the animation duration
        });
    }
});
