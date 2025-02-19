document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop the page from refreshing

        // Get user input
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send data to Flask backend
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        });

        // Handle the response
        const result = await response.json();
        alert(result.message); // Show success or failure message
    });
});