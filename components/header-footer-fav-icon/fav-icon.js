document.addEventListener("DOMContentLoaded", () => {
    // Function to update the page title
    function updateTitle(title) {
      document.title = title;
    }
  
    // Function to update the favicon
    function updateFavicon() {
      const newFaviconUrl = './assets/marble-logo/logo.svg';
      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/svg+xml';
      link.rel = 'icon';
      link.href = newFaviconUrl;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  
    // Check which page is being loaded and update the title accordingly
    const pathname = window.location.pathname;
  
    if (pathname === "/marble_properties" || pathname === "/index.html") {
      updateTitle("Marble Properties - Home");
    } else if (pathname.includes("special_offers_page.html")) {
      updateTitle("Marble Properties - Special Offers");
    } else if (pathname.includes("x_offer_1_page.html")) {
      // For product detail pages, you can dynamically change the title based on product
      const productTitle = document.querySelector('.product-title'); // Assuming your product title is in a container with class 'product-title'
      if (productTitle) {
        updateTitle(productTitle.textContent);
      } else {
        updateTitle("Luxury Beach House in Malibu with Stunning Ocean Views");
      }
    }
  
    // Call the function to update the favicon
    updateFavicon();
  });
  