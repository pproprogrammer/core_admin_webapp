
// Select the Google Sign-In button from the HTML
const googleSignInButton = document.getElementById('google-sign-in');

// Event listener for Google Sign-In
googleSignInButton.addEventListener('click', function () {
    // Google OAuth URL - Replace placeholders with actual values
    const googleOAuthURL = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=690842612634-g2n5l13j524pq1ct1ov1tnr7l369kjcp.apps.googleusercontent.com&redirect_uri=https://pproprogrammer.github.io/core_admin_webapp/&response_type=token&scope=email profile';

    // Redirect to Google OAuth URL
    window.location.href = googleOAuthURL;
});

// Select the login form
const loginForm = document.getElementById('login-form');

// Event listener for manual login
loginForm.addEventListener('submit', async function (event) {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send login credentials to the backend (replace with your API URL)
        const response = await fetch('https://script.google.com/macros/s/AKfycbzSB2QutK1lInO-rrC8zb5rqBrkgu2yE0kAROYCOE36ZUmAXQFXWT9tcehenZ_A8IWm/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // Parse the response
        const result = await response.json();

        if (result.success) {
            // Redirect to the dashboard if login is successful
            window.location.href = 'dashboard.html';
        } else {
            // Show an error message if login fails
            alert('Invalid username or password.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred. Please try again.');
    }
});
