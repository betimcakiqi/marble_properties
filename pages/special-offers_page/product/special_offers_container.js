// Header start

class OffersSecComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./pages/special-offers_page/product/special_offers_container.css">        
    <section id="top-offer" class="section">
    </section>
        `
    }
}
customElements.define('special-offers-sec', OffersSecComponent)
