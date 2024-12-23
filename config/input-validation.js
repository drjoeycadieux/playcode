function validateFormData() {
    let fname = document.forms['myFormData']['fname'].value;
    let email = document.forms['myFormData']['email'].value;
    let errorMessage = document.getElementById('error-message');


    errorMessage.textContent = '';


    if (fname == '') {
        errorMessage.textContent = 'Name must be filled out';
        return false;
    }

    if (email == '') {
        errorMessage.textContent = 'Email must be filled out';
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email';
        return false;
    }

    return true;
}
