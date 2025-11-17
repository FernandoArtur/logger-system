const nameInput = document.querySelector('#name-input');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const checkboxInput = document.querySelector('#checkbox-input');
const buttonInput = document.querySelector('#register-button');

checkboxInput.addEventListener('change', () => {

    if(passwordInput.type === 'password') {
        passwordInput.type = 'text';
        return;
    }

    passwordInput.type = 'password';
});

buttonInput.addEventListener('click', (event) => {
    event.preventDefault();

    const nameRegister = nameInput.value;
    const usernameRegister = usernameInput.value;
    const passwordRegister = passwordInput.value;

    if (nameRegister === '' || usernameRegister === '' || passwordRegister === '') {
        alert('All fields need to be filled');
        return;
    }

    sessionStorage.setItem('name', nameRegister);
    sessionStorage.setItem('username', usernameRegister);
    sessionStorage.setItem('password', passwordRegister);

    window.location.href = './login.html';
    
});

