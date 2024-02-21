import './form.css';

const heading = document.createElement("h1");
heading.classList.add('form-title');
heading.textContent = 'SIGN UP';

const form = document.createElement("form");
form.setAttribute("novalidate", true);

const formElements = document.createElement("ul");

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.setAttribute("type","submit");

const lists = ["email","country","zipCode","password","passwordConfirmation"];

for (let i = 0; i < lists.length; i++) {
    makeElements(lists[i], i);
}

form.appendChild(formElements);
form.appendChild(submitBtn);
document.body.appendChild(heading);
document.body.appendChild(form);

function makeElements(name,i) {
    let type = '';
    const item = document.createElement("li");
    item.classList.add(`item${i+1}`);
    
    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    const input = document.createElement("input");
    if (name === "email") {
        type = 'email';
    } else if (name === "password" || name === "passwordConfirmation") {
        type = 'password';
        input.minLength = '8';
    } else {
        type = 'text';
    }
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("id", name);
    input.setAttribute("required", true);

    const errorMsg = document.createElement("span");
    errorMsg.classList.add("error");
    errorMsg.textContent = "";

    item.appendChild(label);
    item.appendChild(input);
    item.appendChild(errorMsg);
    formElements.appendChild(item);
}

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Email element and error message
const email = document.getElementById("email");
const emailError = document.querySelector("#email+.error");

// Add event listener for email input
email.addEventListener("input", () => {
    if (email.value.length > 0 && !emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        email.classList.add('invalid');
        email.classList.remove('valid');
    } else {
        emailError.textContent = '';
        email.classList.remove('invalid');
        email.classList.add("valid");
    }
});

// Password element, error message, and regex
const passwordField = document.getElementById('password');
const passwordError = document.querySelector('#password+.error');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Password confirmation element and error message
const passwordConfirmationField = document.getElementById('passwordConfirmation');
const passwordConfirmError = document.querySelector('#passwordConfirmation+.error');

// Add event listener for password input
passwordField.addEventListener('input', () => {
    if (passwordField.value.length < 8) {
        passwordError.textContent = `Password is too short, only ${passwordField.value.length} characters long`;
        passwordField.classList.add('invalid');
        passwordField.classList.remove('valid');
    } else if (!passwordRegex.test(passwordField.value)) {
        passwordError.textContent = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
        passwordField.classList.add('invalid');
        passwordField.classList.remove('valid');
    } else {
        passwordError.textContent = '';
        passwordField.classList.remove('invalid');
        passwordField.classList.add('valid');
    }
});

// Add event listener for password confirmation input
passwordConfirmationField.addEventListener('input', () => {
    if (passwordField.value !== passwordConfirmationField.value) {
        passwordConfirmError.textContent = "Passwords do not match";
        passwordConfirmationField.classList.add('invalid');
        passwordConfirmationField.classList.remove('valid');
    } else {
        passwordConfirmError.textContent = '';
        passwordConfirmationField.classList.remove('invalid');
        passwordConfirmationField.classList.add('valid');
    }
});

// Add event listener for form submission
form.addEventListener("submit", (event) => {
    if (!emailRegex.test(email.value) || !passwordRegex.test(passwordField.value) || passwordField.value !== passwordConfirmationField.value || passwordField.value.length === 0) {
        event.preventDefault();
        errorMsg();
        console.log("same page");
    } else {
        console.log("next page");
        event.preventDefault();
        window.location.href = '../src/main.html';
    }
});

// Function to display error messages
function errorMsg() {
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        email.classList.add('invalid');
    } else {
        emailError.textContent = '';
    }

    if (passwordField.value.length === 0) {
        passwordError.textContent = 'You must enter a password';
    } else {
        passwordError.textContent = '';
    }

    if (passwordField.value !== passwordConfirmationField.value) {
        passwordConfirmError.textContent = 'Passwords do not match';
    } else {
        passwordConfirmError.textContent = '';
    }
}