/**
 * Generates a form
 * @return {string} - html code for contact form
 */
function createForm() {
    const contactForm = document.createElement("form");
    const fNameLabel = document.createElement('label');
    const fNameInput = document.createElement('input');
    const lNameLabel = document.createElement('label');
    const lNameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const commentLabel = document.createElement('label');
    const commentInput = document.createElement('input');
    const submitBtn = document.createElement('input');

    fNameLabel.innerText = 'First Name:';
    lNameLabel.innerText = 'Last Name:';

    emailLabel.innerText = 'Email:'
    emailLabel.setAttribute('type', 'email')

    commentLabel.innerText = 'Comment:';
    commentInput.setAttribute('type', 'text');

    submitBtn.setAttribute('type', 'submit');

    contactForm.appendChild(fNameLabel);
    contactForm.appendChild(fNameInput);
    contactForm.appendChild(lNameLabel);
    contactForm.appendChild(lNameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(commentLabel);
    contactForm.appendChild(commentInput);
    contactForm.appendChild(submitBtn);
    
    return contactForm;
}

export {createForm};