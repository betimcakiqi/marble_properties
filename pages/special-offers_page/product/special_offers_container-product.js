// PRODUCT CONTAINER
// PRODUCT CONTAINER
// PRODUCT CONTAINER
// PRODUCT CONTAINER
// PRODUCT CONTAINER

class OffersSecComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./pages/special-offers_page/product/special_offers_container-product.css">        
    <section id="top-offer" class="section">
    </section>
        `
    }
}
customElements.define('special-offers-sec', OffersSecComponent)





// PRODUCT START DOWN
// PRODUCT START DOWN
// PRODUCT START DOWN
// PRODUCT START DOWN
// PRODUCT START DOWN
// PRODUCT START DOWN



// Define Products Data
const productsData = [
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/malibu_beachhouse/cover.png",
        "title": "Luxury Beach House in Malibu with Stunning Ocean Views",
        "price": "10 500 000€",
        "city": "Malibu, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/beverly_hills_modern_villa/cover.png",
        "title": "Modern Villa in Beverly Hills with Infinity Pool",
        "price": "15 000 000€",
        "city": "Beverly Hills, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/manhattan_penthouse_central_park/cover.png",
        "title": "Penthouse in Manhattan Overlooking Central Park",
        "price": "22 000 000€",
        "city": "New York, New York"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/hamptons_estate/cover.png",
        "title": "Charming Estate in the Heart of the Hamptons",
        "price": "8 750 000€",
        "city": "The Hamptons, New York"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/san_francisco_contemporary_home/cover.png",
        "title": "Contemporary Home in San Francisco with Bay Views",
        "price": "12 300 000€",
        "city": "San Francisco, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/boston_beacon_hill_mansion/cover.png",
        "title": "Historic Mansion in Boston's Beacon Hill",
        "price": "9 600 000€",
        "city": "Boston, Massachusetts"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/aspen_mountain_retreat/cover.png",
        "title": "Secluded Retreat in Aspen with Mountain Views",
        "price": "18 200 000€",
        "city": "Aspen, Colorado"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/miami_beach_luxury_condo/cover.png",
        "title": "Luxury Condo in Miami Beach with Private Terrace",
        "price": "11 500 000€",
        "city": "Miami Beach, Florida"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/dallas_ranch/cover.png",
        "title": "Spacious Ranch in Dallas with Extensive Land",
        "price": "7 800 000€",
        "city": "Dallas, Texas"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/chicago_gold_coast_apartment/cover.png",
        "title": "Lavish Apartment in Chicago's Gold Coast",
        "price": "6 400 000€",
        "city": "Chicago, Illinois"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/santa_barbara_ocean_villa/cover.png",
        "title": "Stunning Villa in Santa Barbara with Ocean Views",
        "price": "13 250 000€",
        "city": "Santa Barbara, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/georgetown_townhouse/cover.png",
        "title": "Elegant Townhouse in Georgetown",
        "price": "8 300 000€",
        "city": "Washington, D.C."
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/seattle_waterfront_home/cover.png",
        "title": "Waterfront Home in Seattle with Private Dock",
        "price": "14 750 000€",
        "city": "Seattle, Washington"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/montana_sprawling_ranch/cover.png",
        "title": "Sprawling Ranch in Montana with Mountain Views",
        "price": "12 100 000€",
        "city": "Bozeman, Montana"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/los_angeles_downtown_loft/cover.png",
        "title": "Modern Loft in Downtown Los Angeles",
        "price": "6 900 000€",
        "city": "Los Angeles, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/brooklyn_heights_brownstone/cover.png",
        "title": "Classic Brownstone in Brooklyn Heights",
        "price": "8 700 000€",
        "city": "Brooklyn, New York"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/vail_luxury_chalet/cover.png",
        "title": "Luxury Chalet in Vail with Ski-In/Ski-Out Access",
        "price": "17 000 000€",
        "city": "Vail, Colorado"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/honolulu_beachfront_villa/cover.png",
        "title": "Beachfront Villa in Honolulu with Private Beach",
        "price": "25 000 000€",
        "city": "Honolulu, Hawaii"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/savannah_historic_estate/cover.png",
        "title": "Historic Estate in Savannah with Extensive Gardens",
        "price": "5 500 000€",
        "city": "Savannah, Georgia"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/san_diego_contemporary_penthouse/cover.png",
        "title": "Contemporary Penthouse in San Diego",
        "price": "9 900 000€",
        "city": "San Diego, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/lake_tahoe_luxury_cabin/cover.png",
        "title": "Luxury Cabin in Lake Tahoe with Lake Views",
        "price": "11 200 000€",
        "city": "Lake Tahoe, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/palm_beach_opulent_residence/cover.png",
        "title": "Opulent Residence in Palm Beach with Ocean Access",
        "price": "20 000 000€",
        "city": "Palm Beach, Florida"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/napa_valley_estate_vineyard/cover.png",
        "title": "Estate in Napa Valley with Vineyard",
        "price": "16 500 000€",
        "city": "Napa, California"
    },
    {
        "href": "./x_offer_1_page.html",
        "imgSrc": "./assets/properties/las_vegas_exclusive_mansion/cover.png",
        "title": "Exclusive Mansion in Las Vegas with Strip Views",
        "price": "14 800 000€",
        "city": "Las Vegas, Nevada"
    },
];

// Product Component Definition
class ProductComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const href = this.getAttribute('data-href');
        const imgSrc = this.getAttribute('data-img-src');
        const title = this.getAttribute('data-title');
        const price = this.getAttribute('data-price');
        const city = this.getAttribute('data-city');

        this.innerHTML = `
            <link rel="stylesheet" href="./pages/special-offers_page/product/special_offers_container-product.css">
            <div id="top-offer-grid-item">
                <a href="${href}">
                    <img src="${imgSrc}" alt="">
                    <span id="img-cont-title">${title}</span>
                    <span id="img-cont-price">${price}</span>
                    <span id="img-cont-city">${city}</span>
                </a>
            </div>
        `;
    }
}

// Custom Element Registration
customElements.define('special-offer-product', ProductComponent);



// DOMContentLoaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector('.image-grid-section2');
    const showNextBtn = document.getElementById('show-next-btn');
    const endOfResultsText = document.getElementById('end-of-results');
    const searchInput = document.getElementById("enter-a-keyword");
    const searchButton = document.getElementById("searchbuton");
    const minRange = document.querySelector(".min-range");
    const maxRange = document.querySelector(".max-range");

    const productsPerClick = 12; 
    let currentIndex = productsPerClick;
    let filteredProducts = [...productsData];

    // Function to render products
    const renderProducts = (products, limit) => {
        productsContainer.innerHTML = "";
        products.slice(0, limit).forEach(productData => {
            const productElement = document.createElement('special-offer-product');
            Object.entries({
                'data-href': productData.href,
                'data-img-src': productData.imgSrc,
                'data-title': productData.title,
                'data-price': productData.price,
                'data-city': productData.city
            }).forEach(([key, value]) => productElement.setAttribute(key, value));
            productsContainer.appendChild(productElement);
        });

        // Handle "Show More" and "End of Results" for the search page
        if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('/marble_properties/')) {
            const isMoreProducts = products.length > currentIndex;
            showNextBtn.style.display = isMoreProducts ? "block" : "none";
            endOfResultsText.style.display = isMoreProducts ? "none" : "block";
        }
    };

    // Function to filter products based on search and price range
    const filterProducts = () => {
        const searchValue = searchInput.value.trim().toLowerCase();
        const minPrice = parseInt(minRange.value) || 0;
        const maxPrice = parseInt(maxRange.value) || 50000000;

        filteredProducts = productsData.filter(product => {
            const title = product.title.toLowerCase();
            const city = product.city.toLowerCase();
            const price = parseInt(product.price.replace(/\D/g, "")) || 0;
            return (!searchValue || title.includes(searchValue) || city.includes(searchValue)) && (price >= minPrice && price <= maxPrice);
        });

        currentIndex = productsPerClick;
        renderProducts(filteredProducts, currentIndex);
    };

    // Show next products for the search page
    if (showNextBtn) {
        showNextBtn.addEventListener('click', () => {
            currentIndex += productsPerClick;
            renderProducts(filteredProducts, currentIndex);
        });
    }

    // Event listener for search button
    if (searchButton) {
        searchButton.addEventListener("click", e => {
            e.preventDefault();
            filterProducts();
        });
    }

    // Event listeners for price range filters
    if (minRange && maxRange) {
        [minRange, maxRange].forEach(input => input.addEventListener("input", filterProducts));
    }

    // Check if we are on the homepage (index.html or /)
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/marble_properties/') {
        const topProducts = [...productsData]
            .sort((a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")))
            .slice(0, 6);
        renderProducts(topProducts, 6);
    } else {
        // Regular page logic for search page
        renderProducts(filteredProducts, currentIndex);
    }
});
