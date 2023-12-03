import {createForm} from "../functions/createForm"

/**
 * Create contact page.
 * @return {string} - Returns contact page
 */
function displayContact() {
    const content = document.createElement('div');
    const pageTitle = document.createElement('h2');

    pageTitle.innerText = "Contact Us";

    content.appendChild(pageTitle);
    content.appendChild(createForm());

    return content.innerHTML;
}

export {displayContact};