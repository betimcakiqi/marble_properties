class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
        <link rel="stylesheet" href="../header/header.css">
        <header>
        <nav>
            <div class="logoandnavbar">
            <div class="logo">
            <a href="index.html"><img src="../svg/logo.svg" alt=""></a>
        </div>
                <ul class="navlinks-items">

                    <li><a href="index.html">Top offers</a></li>
                    <li><a href="special_offers_page.html">Search in offers</a></li>
                    <li><a href="#">References</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our team</a></li>
                </ul>
            </div>
            <li id="contactus"><button><a href="tel:+38345384290">Contact us</a></button></li>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)
