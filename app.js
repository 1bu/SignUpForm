const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirmPassword');
const btn = document.getElementById('btn');
const check = document.querySelector('check')

function validate_password() {

    if (password.value != passwordConfirm.value) {
        console.log('Wrong Password');
    } else {
        console.log('Right Password');
    }
}

btn.addEventListener('click', validate_password);