function validateLoginInfo() {
    let email = document.forms['loginFormContainer']['signInEmail'].value;
    let password = document.forms['loginFormContainer']['signInPassword'].value;
    let errorMessage = document.getElementById('error-message');


    errorMessage.textContent = '';


    if (email == '') {
        errorMessage.textContent = 'Please enter a email address';
        return false;
    }

    if (password == '') {
        errorMessage.textContent = 'Please enter a password';
        return false;
    }


    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter valid email address with @';
        return false;
    }

    return true;

}