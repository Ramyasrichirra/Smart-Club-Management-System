// Function to handle Login button click
function loginButtonClicked() {
    alert("Login Button Clicked");
    // You can add additional logic here, such as navigating to the Login page, opening a modal, etc.
}

// Attach event listeners to buttons after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons by class name
    const loginButton = document.querySelector('.btn:last-child');
    
    // Add click event listeners to each button
    loginButton.addEventListener('click', loginButtonClicked);
});
