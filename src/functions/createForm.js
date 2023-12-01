/**
 * Generates a form
 * @return {string} - html code for contact form
 */
function createForm() {
    const contactForm = document.createElement("form");
    const formObj = {
        fNameDiv : document.createElement('div'),
        lNameDiv : document.createElement('div'),
        emailDiv : document.createElement('div'),
        commentDiv : document.createElement('div'),
        submitDiv : document.createElement('div'),
    }
    const fNameLabel = document.createElement('label');
    const fNameInput = document.createElement('input');
    const lNameLabel = document.createElement('label');
    const lNameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const commentLabel = document.createElement('label');
    const commentInput = document.createElement('textarea');

    const submitBtn = document.createElement('input');


    fNameLabel.innerText = 'First Name:';
    fNameLabel.setAttribute('for', 'first-name');

    fNameInput.setAttribute('type', 'text')
    fNameInput.setAttribute('name', 'first-name');
    fNameInput.setAttribute('id', 'first-name');

    lNameLabel.innerText = 'Last Name:';

    emailLabel.innerText = 'Email:'
    emailLabel.setAttribute('type', 'email')

    commentLabel.innerText = 'Comment:';
    commentLabel.id = "comment-label"
    commentLabel.setAttribute('for', 'comment-box');

    commentInput.setAttribute('name', 'comment-box');
    commentInput.setAttribute('id', 'comment-box');

    formObj.submitDiv.className = 'flex-center';

    submitBtn.className = 'submit-btn';
    submitBtn.setAttribute('type', 'submit');
    
    formObj.fNameDiv.appendChild(fNameLabel);
    formObj.fNameDiv.appendChild(fNameInput);

    formObj.submitDiv.appendChild(submitBtn);

    for (const key in formObj) {
        if (formObj[key] != '') {
            contactForm.appendChild(formObj[key]);
        }
    }
    
    return contactForm;
}

export {createForm};