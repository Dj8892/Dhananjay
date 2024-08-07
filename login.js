function login() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user exists with the provided email and password
    const user = users.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
        messageElement.textContent = 'Login Successful!';
        messageElement.style.color = '#28a745';
       
            // You can add logic here to check the credentials if needed
            // For demonstration purposes, we'll redirect directly
            
            // Redirect to the 'usersdetails' page
            window.location.href = 'user-details.html';
        
         // Green color
        // Optionally, redirect to another page or perform further actions
        // window.location.href = 'user-details.html'; // Example: Redirect to user details page
    } else {
        messageElement.textContent = 'Invalid email or password. Please try again.';
        messageElement.style.color = '#dc3545'; // Red color for error
    }
}
