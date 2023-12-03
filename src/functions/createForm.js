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
    fNameInput.setAttribute('type', 'text');
    fNameInput.setAttribute('name', 'first-name');
    fNameInput.setAttribute('id', 'first-name');
    formObj.fNameDiv.appendChild(fNameLabel);
    formObj.fNameDiv.appendChild(fNameInput);
    formObj.fNameDiv.className = "form-div"

    lNameLabel.innerText = 'Last Name:';
    lNameLabel.setAttribute('for', 'last-name');
    lNameInput.setAttribute('type', 'text');
    lNameInput.setAttribute('name', 'last-name');
    lNameInput.setAttribute('id', 'last-name');
    formObj.lNameDiv.appendChild(lNameLabel);
    formObj.lNameDiv.appendChild(lNameInput);
    formObj.lNameDiv.className = 'form-div'

    emailLabel.innerText = 'Email:'
    emailLabel.setAttribute('type', 'email')
    formObj.emailDiv.appendChild(emailLabel);
    formObj.emailDiv.appendChild(emailInput);
    formObj.emailDiv.className = 'form-div'

    commentLabel.innerText = 'Comment:';
    commentLabel.id = "comment-label"
    commentLabel.setAttribute('for', 'comment-box');
    commentInput.setAttribute('name', 'comment-box');
    commentInput.setAttribute('id', 'comment-box');
    formObj.commentDiv.appendChild(commentLabel);
    formObj.commentDiv.appendChild(commentInput);
    formObj.commentDiv.className = 'form-div';
    
    submitBtn.className = 'submit-btn';
    submitBtn.innerText = 'Submit';
    submitBtn.setAttribute('type', 'submit');
    formObj.submitDiv.className = 'flex-center';
    formObj.submitDiv.appendChild(submitBtn);

    for (const key in formObj) {
        if (formObj[key] != '') {
            contactForm.appendChild(formObj[key]);
        }
    }
    
    return contactForm;
}

export {createForm};