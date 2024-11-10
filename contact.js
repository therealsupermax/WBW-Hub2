document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const insurance = document.getElementById('insurance').value;

    // Here you would typically send the data to your server or API
    // For demonstration, we'll just show a success message
    document.getElementById('message').innerText = `Contact information submitted for ${firstName} ${lastName}!`;
    
    // Reset the form
    document.getElementById('contact-form').reset();
});
