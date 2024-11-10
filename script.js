document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvc = document.getElementById('cvc').value;

    // Here you would typically send the data to your payment processor
    // For demonstration, we'll just show a success message
    document.getElementById('message').innerText = `Payment successful for ${name}!`;
    
    // Reset the form
    document.getElementById('payment-form').reset();
});
