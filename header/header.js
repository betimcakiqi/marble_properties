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
                <div class="navbar">
                    <ul id="menuList">
                        <li><a class="nav-link" href="../pages/index.html#top-offer">Top offers</a></li>
                        <li><a class="nav-link" href="../pages/special_offers_page.html">Search in offers</a></li>
                        <li><a class="nav-link" href="#references">References</a></li>
                        <li><a class="nav-link" href="#aboutus">About us</a></li>
                        <li><a class="nav-link" href="#ourteam">Our team</a></li>
                    </ul>
                </div>
            </div>
            <li id="contactus"><button><a href="tel:+38345384290">Contact us</a></button></li>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)

