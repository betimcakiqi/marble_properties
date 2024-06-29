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
            <link rel="stylesheet" href="./pages/special-offers_page/product/special_offers_product.css">
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

customElements.define('special-offer-product', ProductComponent);

document.addEventListener("DOMContentLoaded", () => {
    const showNextBtn = document.getElementById('show-next-btn');
    const productsContainer = document.querySelector('.image-grid-section2');
    const products = productsContainer.querySelectorAll('special-offer-product');
    const productsPerClick = 6; // Number of products to add/remove per click
    const initialProductsToShow = 12; // Initial number of products to show
    let currentIndex = initialProductsToShow;

    // Function to show next batch of products
    function showNextProducts() {
        // Calculate the remaining products to show
        const remainingProducts = Array.from(products).slice(currentIndex, currentIndex + productsPerClick);

        // Show each remaining product with transition
        remainingProducts.forEach((product, index) => {
            product.style.display = 'block';
            setTimeout(() => {
                product.style.opacity = '1';
            }, index * 100); // Stagger the opacity transition for a smoother effect
        });

        currentIndex += productsPerClick;

        // Update button text and behavior when reaching the end of products
        if (currentIndex >= products.length) {
            showNextBtn.value = 'Show Less';
            showNextBtn.removeEventListener('click', showNextProducts);
            showNextBtn.addEventListener('click', showLessProducts);
        }
    }

    // Function to show less products
    function showLessProducts() {
        // Calculate the index of products to hide
        const endHideIndex = Math.max(currentIndex - productsPerClick, initialProductsToShow);

        // Hide products with transition
        for (let i = currentIndex - 1; i >= endHideIndex; i--) {
            products[i].style.opacity = '0';
            setTimeout(() => {
                products[i].style.display = 'none';
            }, 500); // Adjust the timeout as needed to match your transition duration
        }

        currentIndex = endHideIndex;
        
        // Update button text and behavior when returning to initial state
        if (currentIndex <= initialProductsToShow) {
            showNextBtn.value = 'Show Next';
            showNextBtn.removeEventListener('click', showLessProducts);
            showNextBtn.addEventListener('click', showNextProducts);
        }
    }

    // Hide products initially beyond the initial batch
    products.forEach((product, index) => {
        if (index >= initialProductsToShow) {
            product.style.display = 'none';
            product.style.opacity = '0';
            product.style.transition = 'opacity 0.5s ease-in-out'; // Transition effect
        }
    });

    // Initial setup for Show Next button
    showNextBtn.addEventListener('click', showNextProducts);
});
