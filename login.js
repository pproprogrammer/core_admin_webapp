 3. JavaScript for Login Logic (login.js)
const googleSignInButton = document.getElementById('google-sign-in');

 Google Sign-In Logic
googleSignInButton.addEventListener('click', () = {
     Redirect to Google OAuth URL
    window.location.href = 'YOUR_GOOGLE_OAUTH_URL';
});

 Manual Login Logic
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
