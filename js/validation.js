function validateEmailandFname() {
    let email = document.forms['postDataForm']['email'].value;
    let fname = document.forms['postDataForm']['fname'].value;
    let errorMessage = document.getElementById('error');


    errorMessage.textContent = '';

    if (email == '') {
        errorMessage.textContent = 'Email must be filled out';
        return false;
    }

    if (fname == '') {
        errorMessage.textContent = 'First Name must be filled out';
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email';
        return false;
    }

    return true;
}