class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <h1>NICK'S BLOG</h1>
            </div>

            <nav>
                <a href="index.html" class="left">HOME</a>
                <a href="#" class="left">PROJECTS</a>
                <a href="#" class="left">TINKATON</a>
                <a href="about.html" class="right">ABOUT</a>
            </nav>
        `;
    }
}

customElements.define('blog-header', Header);