import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

function buildHeader() {
    const header = document.createElement('header');
    const headerNav = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    const logo = document.createElement('h1');

    logo.innerText = "Caturday";

    homeBtn.innerHTML = "Home";
    homeBtn.className = "home-btn";
    homeBtn.addEventListener('click', () => {
        displayHome();
    })

    menuBtn.innerHTML = "Menu";
    menuBtn.className = "menu-btn";
    menuBtn.addEventListener("click", () => {
        displayMenu();
    })

    contactBtn.innerHTML = "Contact";
    contactBtn.className = "contact-btn";
    contactBtn.addEventListener('click', () => {
        displayContact();
    })

    header.id = "header"
    header.appendChild(logo);
    headerNav.appendChild(homeBtn);
    headerNav.appendChild(menuBtn);
    headerNav.appendChild(contactBtn);
    header.appendChild(headerNav);

    return header;
}

function buildFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    const currDate = new Date();

    footer.id = "footer";

    copyright.textContent = `Copyright © ${currDate.getFullYear()} JChow`

    footer.appendChild(copyright);

    return footer;
}

export { buildHeader, buildFooter };