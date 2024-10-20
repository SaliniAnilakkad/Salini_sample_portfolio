// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    // Add an event listener for form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you can add logic to send the form data to your server if needed

        // Display the thank-you message
        thankYouMessage.style.display = "block";

        // Optionally reset the form fields
        contactForm.reset();

        // Optionally hide the thank-you message after a few seconds
        setTimeout(function() {
            thankYouMessage.style.display = "none";
        }, 10000); // Adjust the time (in milliseconds) as needed
    });
});
