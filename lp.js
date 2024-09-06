document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (username === '' || password === '') {
        displayError('Please fill in all fields.');
        return;
    }

    // Here you would typically handle the login logic, such as sending the data to a server
    // For demonstration purposes, let's assume login is successful if username and password are not empty
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform other actions on successful login
    } else {
        displayError('Invalid username or password.');
    }
});

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
