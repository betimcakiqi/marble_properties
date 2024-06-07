


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
const newFaviconUrl = '../marble_svg/logo.svg';

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

// Favicon 
// Header Nav Bar

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
        <link rel="stylesheet" href="../marble_header/header.css">        
        <header>
        <nav class="navigation-bar">
            <div class="logoandnavbar">
                <div class="logo">
                    <a href="../marble_pages/index.html#home"><img src="../marble_svg/logo.svg" alt=""></a>
                </div>
                <div class="navbar">
                    <ul id="menuList">
                        <li><a class="nav-link" href="../marble_pages/index.html#top-offer">Top offers</a></li>
                        <li><a class="nav-link" href="../marble_pages/special_offers_page.html">Search in offers</a></li>
                        <li><a class="nav-link" href="../marble_pages/index.html#references">References</a></li>
                        <li><a class="nav-link" href="../marble_pages/index.html#aboutus">About us</a></li>
                        <li><a class="nav-link" href="../marble_pages/index.html#ourteam">Our team</a></li>
                        <li id="contactus"><button><a href="tel:+38345384290">Contact us</a></button></li>
                    </ul>
                </div>
            </div>
            <div id="burgerMenu" onclick="handleBurgerMenuAction()">
                <div id="menuIcon">
                    <img src="../marble_svg/burger-menu-icon.svg" alt="">
                </div>
                <div id="closeIcon">
                    <img src="../marble_svg/burger-menu-close-icon.svg" alt="">
                </div>
            </div>
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)


// HEADER END // FOOTER START



class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
        `
        <footer>
        <div class="sub-newsletter-footer">
            <div class="sub-newsletter-title-description">

                <img class="sub-newsletter-icon-svg" src="../marble_svg/news-letter-icon.svg" alt="">

                <div class="sub-news-letter-without-img">
                    <div class="sub-news-letter-title-text">
                        <h1 class="sub-newsletter-title">
                            Subscribe to newsletter
                        </h1>

                        <span class="sub-newsletter-description">
                            Get the latest news and interesting offers and real estate
                        </span>
                    </div>

                    <form action="" method="post" class="sub-news-letter-form-container">
                        <div class="sub-news-letter-email-address-container">
                            <input id="sub-news-letter-email-address-bar" type="email" name="email-addres"
                                placeholder="Your e-mail address">
                        </div>
                        <div class="sub-news-letter-subscribe-container">
                            <input id="sub-news-letter-subscribe-button" type="submit" value="Subscribe">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="copyright-marble-footer">
            <div class="copyright-marble-footer-full-container">
                <div class="copyright-marble-footer-container">
                        <img class="copyrigt-marble-footer-logo" src="../marble_svg/footer-logo.svg" alt="">

                        <p class="copyrigt-marble-footer-name">
                            ©2024 Marble Properties
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `
    }
}
customElements.define('custom-footer', FooterComponent)




const menuListElement = document.getElementById('menuList');
const menuIconElement = document.getElementById('menuIcon');
const closeIconElement = document.getElementById('closeIcon');

const handleBurgerMenuAction = () => {
    const prevState = menuListElement.style.maxHeight;
    const isBurgerMenuOpened = prevState === '290px';

    // Check if the menu icon is visible based on media screen size
    const isMenuIconVisible = window.matchMedia("(max-width: 1166px)").matches;

    if (isBurgerMenuOpened) {
        menuListElement.style.maxHeight = '0px';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(100%) scale(1) rotateY(0deg)';
            menuIconElement.style.opacity = '1';
            closeIconElement.style.transform = 'translateX(100%) scale(0) rotateY(180deg)';
            closeIconElement.style.opacity = '0';
        }
    } else {
        menuListElement.style.maxHeight = '290px';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(100%) scale(0) rotateY(180deg)';
            menuIconElement.style.opacity = '0';
            closeIconElement.style.transform = 'translateX(100%) scale(0.8) rotateY(0deg)';
            closeIconElement.style.opacity = '1';
        }
    }
};
