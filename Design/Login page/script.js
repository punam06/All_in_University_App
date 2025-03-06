document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('strengthIndicator');
    let strength = 'Weak';

    if (password.length >= 8) {
        strength = 'Medium';
    }
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = 'Strong';
    }

    strengthIndicator.textContent = strength;
    strengthIndicator.style.color = strength === 'Weak' ? 'red' : strength === 'Medium' ? 'orange' : 'green';
});

document.getElementById('continueBtn').addEventListener('click', function() {
    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
        alert('Form submitted successfully!');
        // You can add further form submission logic here
    } else {
        alert('Please fill in all required fields.');
    }
});