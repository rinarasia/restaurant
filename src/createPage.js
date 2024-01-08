import { nav } from "./nav"
import { home } from "./home"
import { footer } from "./footer"

function createPage(page) {
    const content = document.getElementById('content');
    content.appendChild(nav);

    content.appendChild(page);

    content.appendChild(footer);
}

export { createPage }
