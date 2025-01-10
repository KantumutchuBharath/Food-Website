// Script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    // Login Form Validation
    if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!validateEmail(email)) {
    alert('Please enter a valid email');
    return;
    }
    if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
    }
alert('Login Completed Successfully!');
window.location.href = 'index.html'; // Redirect to the main page
    alert(`Welcome back , ${email}!`);  
    // Clear the input fields
    loginForm.reset(); 
     });
    }

    // Registration Form Validation
    if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
    // alert('Registration form submitted'); // Debugging alert
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // Simple validation
    if (username.trim() === '') {
    alert('Username is required');
    return;
    }
    if (!validateEmail(email)) {
    alert('Please enter a valid email');
    return;
    }
    if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
    }
    if (password !== confirmPassword) {
    
    alert('Passwords do not match');
    return;
    }
    alert('Registration Completed Successfully!');
    alert('Redirecting to login page...'); // Debugging alert
    window.location.href = 'login.html'; // Redirect to the login page
    // Clear the input fields
    registerForm.reset();
    });
    }

    // Email validation function
    function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
    }
    });