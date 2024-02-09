document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Send login request to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Redirect to dashboard or home page upon successful login
                    window.location.href = "dashboard.html";
                } else {
                    // Display server-side error message
                    errorMessage.textContent = response.message;
                }
            } else {
                // Display generic error message
                errorMessage.textContent = "An error occurred while processing your request. Please try again later.";
            }
        }
    };

    // Send login credentials to the server
    xhr.send(JSON.stringify({ username: username, password: password }));
});
