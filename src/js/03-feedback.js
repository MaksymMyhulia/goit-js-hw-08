import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onInputValue, 500));

function onFormSubmit (e) {
e.preventDefault();
const {email, message} = e.currentTarget.elements;
console.log({email: email.value, message: message.value});
localStorage.removeItem('feedback-form-state');
e.currentTarget.reset();
}

function onInputValue (e) {
let value = localStorage.getItem('feedback-form-state');
value = value ? JSON.parse(value) : {};
let {email, message} = form.elements;
value = {
    email: email.value,
    message: message.value
}
localStorage.setItem('feedback-form-state', JSON.stringify(value));
}