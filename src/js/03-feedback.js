import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";


form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onInputValue, 500));

function onFormSubmit (e) {
e.preventDefault();
const {email, message} = e.currentTarget.elements;
console.log({email: email.value, message: message.value});
localStorage.removeItem(LOCALSTORAGE_KEY);
e.currentTarget.reset();
}

function onInputValue (e) {
let value = localStorage.getItem(LOCALSTORAGE_KEY);
value = value ? JSON.parse(value) : {};
let {email, message} = form.elements;
value = {
    email: email.value,
    message: message.value
}
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value));
}

const localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (localStorageData) {
    form.email.value = localStorageData.email;
    form.message.value = localStorageData.message;
}