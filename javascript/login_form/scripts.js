document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else if (username !== 'admin' || password !== 'admin') {
        errorMessage.textContent = 'Invalid username or password.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful!');
    }
});
