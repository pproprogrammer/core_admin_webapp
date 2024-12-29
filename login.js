
const googleSignInButton = document.getElementById('google-sign-in');

// Google Sign-In Logic
googleSignInButton.addEventListener('click', () => {
     //Redirect to Google OAuth URL
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=690842612634-g2n5l13j524pq1ct1ov1tnr7l369kjcp.apps.googleusercontent.com&redirect_uri=https://pproprogrammer.github.io/core_admin_webapp/&response_type=token&scope=email profile';
});

// Manual Login Logic
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (event) = {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

     Authenticate the user (example send credentials to backend for validation)
    const response = await fetch('YOUR_BACKEND_LOGIN_API_URL', {
        method 'POST',
        headers {
            'Content-Type' 'applicationjson',
        },
        body JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (result.success) {
         Redirect to the dashboard or show a success message
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
