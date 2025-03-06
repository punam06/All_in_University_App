// script.js
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('strength-text');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        let strength = 'Weak';

        if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = 'Strong';
        } else if (password.length >= 6) {
            strength = 'Medium';
        }

        strengthText.textContent = strength;
    });
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordGroup = document.querySelector('.password-group');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordGroup.classList.add('show');
    } else {
        passwordInput.type = 'password';
        passwordGroup.classList.remove('show');
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});