// Dummy credentials (kept out of HTML)
const dummyUser = {
    email: "user@example.com",
    password: "password123"
};

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");
const message = document.getElementById("message");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Email format check
function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";

    let valid = true;

    if (!email.value.trim()) {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!isValidEmail(email.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    if (!password.value.trim()) {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Minimum 6 characters required";
        valid = false;
    }

    if (!valid) return;

    // Button loading animation
    loginBtn.disabled = true;
    btnText.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
        if (
            email.value === dummyUser.email &&
            password.value === dummyUser.password
        ) {
            message.style.color = "green";
            message.textContent = "Login successful!";
        } else {
            message.style.color = "red";
            message.textContent = "Invalid email or password";
        }

        loginBtn.disabled = false;
        btnText.style.display = "block";
        loader.style.display = "none";
    }, 1500);
});