document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Retrieve existing user data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(data);

    // Save updated user data back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to user details page
    window.location.href = 'user-details.html';
});
