// script.js
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById('email').value;
  
    // Basic email validation (you should enhance this)
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Simulate sending reset link (replace with actual backend logic)
    console.log('Sending reset link to:', email);
    alert('A reset link has been sent to your email address.');
  
    // Optionally, you can redirect the user to a login page or confirmation page
    // window.location.href = 'login.html'; 
  });