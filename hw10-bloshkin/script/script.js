const USERS = [
    { login: 'admin', password: 'admin' },
    { login: 'user', password: '12345' },
];

const loginInputEl = document.getElementById('login-input');
const passwordInputEl = document.getElementById('password-input');
const signInBtnEl = document.getElementById('sign-in-btn');
const errorMessageEl = document.getElementById('error-message');

const validateInputs = () => {
    if (!!loginInputEl.value && !!passwordInputEl.value) {
        signInBtnEl.classList.remove('is-disabled');
        signInBtnEl.removeAttribute('disabled');
    } else {
        signInBtnEl.classList.add('is-disabled');
        signInBtnEl.setAttribute('disabled', 'disabled');
    }
};

const validateInput = evtObject => {
    const inputEl = evtObject.target;
    errorMessageEl.classList.add('hidden');
    if (!inputEl.value) {
        inputEl.classList.add('is-error');
    } else {
        inputEl.classList.remove('is-error');
    }
    validateInputs();
}


loginInputEl.addEventListener('blur', validateInput);
loginInputEl.addEventListener('input', validateInput);

passwordInputEl.addEventListener('blur', validateInput);
passwordInputEl.addEventListener('input', validateInput);

const checkUserCredentials = (login, password) => {
    return !!USERS.find(e => e.login === login && e.password === password);
};

signInBtnEl.addEventListener('click', () => {
    const login = loginInputEl.value;
    const password = passwordInputEl.value;

    if (checkUserCredentials(login, password)) {
        document.getElementById('login-form').remove();
        document.getElementById('main-block').classList.remove('hidden');
    } else {
        errorMessageEl.classList.remove('hidden');
    }
});