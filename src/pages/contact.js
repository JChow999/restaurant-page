import {createForm} from "../functions/createForm"

/**
 * Create contact page.
 */
function displayContact() {
    const content = document.querySelector('#content');
    const pageTitle = document.createElement('h2');
    const googleMap = document.createElement("iframe");
    const mapTitle = document.createElement('h3');


    pageTitle.innerText = "Contact Us";
    mapTitle.innerText = "Come visit us!"

    Object.assign(googleMap, {
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477988419487!2d139.7428579759297!3d35.6585848312175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2sTokyo%20Tower!5e0!3m2!1sen!2sca!4v1701290769011!5m2!1sen!2sca",
        allowfullscreen:"", 
        loading:"lazy", 
        referrerpolicy:"no-referrer-when-downgrade"
    });

    content.innerHTML = '';
    content.appendChild(pageTitle);
    content.appendChild(createForm());
    content.appendChild(mapTitle);
    content.appendChild(googleMap);
}

export {displayContact};