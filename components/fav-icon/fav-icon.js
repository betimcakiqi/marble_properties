// Title

// Define the title you want to set
const newTitle = 'Marble Properties';

// Function to update the page title
function updateTitle(title) {
    document.title = title;
}

// Call the function to set the new title
updateTitle(newTitle);


// Title
// Favicon 

// Define the path to the new favicon SVG file
const newFaviconUrl = '../../assets/marble-logo/footer-logo.svg';

// Function to update the favicon
function updateFavicon() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = newFaviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// Call the function to update the favicon
updateFavicon();