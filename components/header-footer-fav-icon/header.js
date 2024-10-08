// Header start

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./components/header-footer-fav-icon/header.css">        
    <header>
        <nav class="navigation-bar">
            <div class="logoandnavbar">
                <div class="logo">
                    <a href="https://betimcakiqi.github.io/marble_properties/"><img src="./assets/marble-logo/logo.svg" alt=""></a>
                </div>
                <div class="navbar">
                    <ul id="menuList">
                        <li><a class="nav-link" href="https://betimcakiqi.github.io/marble_properties/#top-offer">Top offers</a></li>
                        <li><a class="nav-link" href="https://betimcakiqi.github.io/marble_properties/special_offers_page.html">Search in offers</a></li>
                        <li><a class="nav-link" href="https://betimcakiqi.github.io/marble_properties/#references">References</a></li>
                        <li><a class="nav-link" href="https://betimcakiqi.github.io/marble_properties/#aboutus">About us</a></li>
                        <li><a class="nav-link" href="https://betimcakiqi.github.io/marble_properties/#ourteam">Our team</a></li>
                        <li id="contactus"><button><a href="tel:+38345384290">Contact us</a></button></li>
                    </ul>
                </div>
            </div>
            <div id="burgerMenu" onclick="handleBurgerMenuAction()">
                <div id="menuIcon">
                    <img src="./assets/header-menu-icons/burger-menu-icon.svg" alt="">
                </div>
                <div id="closeIcon">
                    <img src="./assets/header-menu-icons/burger-menu-close-icon.svg" alt="">
                </div>
            </div>
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)

// Header end
// Header responsive menu start

// Header responsive menu start

const menuListElement = document.getElementById('menuList');
const menuIconElement = document.getElementById('menuIcon');
const closeIconElement = document.getElementById('closeIcon');

const handleBurgerMenuAction = () => {
    const prevState = menuListElement.style.maxHeight;
    menuListElement.style.opacity;
    const isBurgerMenuOpened = prevState === '290px';

    // Check if the menu icon is visible based on media screen size
    const isMenuIconVisible = window.matchMedia("(max-width: 1166px)").matches;

    if (isBurgerMenuOpened) {
        menuListElement.style.maxHeight = '0px';
        menuListElement.style.opacity = '0';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(100%) scale(1) rotateY(0deg)';
            menuIconElement.style.opacity = '1';
            closeIconElement.style.transform = 'translateX(100%) scale(0) rotateY(180deg)';
            closeIconElement.style.opacity = '0';
        }
    } else {
        menuListElement.style.maxHeight = '290px';
        menuListElement.style.opacity = '1';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(100%) scale(0) rotateY(180deg)';
            menuIconElement.style.opacity = '0';
            closeIconElement.style.transform = 'translateX(100%) scale(0.8) rotateY(0deg)';
            closeIconElement.style.opacity = '1';
        }
    }
};

// Add this function to handle the screen resize
window.addEventListener('resize', () => {
    const isDesktopView = window.matchMedia("(min-width: 1167px)").matches;

    if (isDesktopView) {
        // Reset the styles for desktop view
        menuListElement.style.maxHeight = '';
        menuListElement.style.opacity = '';
        menuIconElement.style.transform = '';
        closeIconElement.style.transform = '';
        menuIconElement.style.opacity = '';
        closeIconElement.style.opacity = '';
    }
});

// Header responsive menu end

