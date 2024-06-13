class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
        `
        <link rel="stylesheet" href="./components/footer/footer.css">
    <footer>
        <div class="sub-newsletter-footer">
            <div class="sub-newsletter-title-description">

                <img class="sub-newsletter-icon-svg" src="./assets/footer-icons/news-letter-icon.svg" alt="">

                <div class="sub-news-letter-without-img">
                    <div class="sub-news-letter-title-text">
                        <h1 class="sub-newsletter-title">
                            Subscribe to newsletter
                        </h1>

                        <span class="sub-newsletter-description">
                            Get the latest news and interesting offers and real estate
                        </span>
                    </div>

                    <form action="./index.html" method="post" class="sub-news-letter-form-container"></form>
                        <div class="sub-news-letter-email-address-container">
                            <input id="sub-news-letter-email-address-bar" type="email" name="email-addres"
                                placeholder="Your e-mail address" required>
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
                        <img class="copyrigt-marble-footer-logo" src="./assets/marble-logo/footer-logo.svg" alt="">

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