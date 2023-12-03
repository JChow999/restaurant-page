/**
 * Displays the menu
 * @return {string} - returns innerHTML of the menu page
 */
function displayMenu() {
    const content = document.createElement('div');
    const pageTitle = document.createElement('h2');

    pageTitle.innerText = "Menu";

    content.appendChild(pageTitle);

    return content.innerHTML;
}

export {displayMenu}