window.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem('users'));

    if (!users || users.length === 0) {
        document.querySelector('#userDetails').innerHTML = '<p>No user data found. Please <a href="index.html">signup</a> first.</p>';
        return;
    }

    const userDetailsDiv = document.getElementById('userDetails');

    users.forEach((user, index) => {
        const userSection = document.createElement('div');
        userSection.classList.add('user-details-section');

        // Add user heading
        const userHeading = document.createElement('h2');
        userHeading.textContent = `User ${index + 1}`;
        userSection.appendChild(userHeading);

        for (const [key, value] of Object.entries(user)) {
            const fieldDiv = document.createElement('div');
            fieldDiv.classList.add('user-detail');

            const label = document.createElement('div');
            label.classList.add('label');
            label.textContent = capitalizeFirstLetter(key) + ':';

            const valueDiv = document.createElement('div');
            valueDiv.classList.add('value');
            valueDiv.textContent = value;

            fieldDiv.appendChild(label);
            fieldDiv.appendChild(valueDiv);
            userSection.appendChild(fieldDiv);
        }

        userDetailsDiv.appendChild(userSection);
    });
});

// Helper function to capitalize the first letter of the field name
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ');
}
