class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <h1>NICK'S BLOG</h1>
            </div>

            <nav>
                <a href="#" class="left">HOME</a>
                <a href="#" class="left">PROJECTS</a>
                <a href="#" class="left">TINKATON</a>
                <a href="#" class="right">ABOUT ME</a>
            </nav>
        `;
    }
}

customElements.define('blog-header', Header);