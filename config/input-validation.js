function validateFormData() {
    let email = document.forms['myFormData']['email'].value;
    let fname = document.forms['myFormData']['fname'].value;
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (email === '') {
        errorMessage.textContent = 'Email must be filled out';
        return false;
    }

    if (fname === '') {
        errorMessage.textContent = 'Fname must be filled out';
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email';
        return false;
    }

    return true;
}