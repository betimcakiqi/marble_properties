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
    const endOfResultsText = document.getElementById('end-of-results'); // Reference to end of results text
    const productsPerClick = 12; // Number of products to add/remove per click
    let initialProductsToShow = 6; // Default number of products to show
    let currentIndex;

    // Hide the "End of results" text initially
    endOfResultsText.style.display = 'none';

    // Determine the number of products to show based on the page
    if (window.location.pathname.includes('special_offers_page.html')) {
        initialProductsToShow = 12;
    }
    currentIndex = initialProductsToShow;

    // Function to show next batch of products
    function showNextProducts() {
        // Calculate the remaining products to show
        const remainingProducts = productsData.slice(currentIndex, currentIndex + productsPerClick);

        // Render each remaining product
        remainingProducts.forEach((productData) => {
            const productElement = document.createElement('special-offer-product');
            productElement.setAttribute('data-href', productData.href);
            productElement.setAttribute('data-img-src', productData.imgSrc);
            productElement.setAttribute('data-title', productData.title);
            productElement.setAttribute('data-price', productData.price);
            productElement.setAttribute('data-city', productData.city);
            productsContainer.appendChild(productElement);
        });

        currentIndex += productsPerClick;

        // Update button text and behavior when reaching the end of products
        if (currentIndex >= productsData.length) {
            showNextBtn.style.display = 'none'; // Hide the button when no more products to show
            endOfResultsText.style.display = 'block'; // Show "End of results" text
        }
    }

    // Initial setup for Show More button
    if (showNextBtn) {
        showNextBtn.addEventListener('click', showNextProducts);
    }

    // Initially render the first set of products
    productsData.slice(0, initialProductsToShow).forEach((productData) => {
        const productElement = document.createElement('special-offer-product');
        productElement.setAttribute('data-href', productData.href);
        productElement.setAttribute('data-img-src', productData.imgSrc);
        productElement.setAttribute('data-title', productData.title);
        productElement.setAttribute('data-price', productData.price);
        productElement.setAttribute('data-city', productData.city);
        productsContainer.appendChild(productElement);
    });
});
