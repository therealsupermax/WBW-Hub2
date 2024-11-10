document.getElementById('status-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the claim number
    const claimNumber = document.getElementById('claim-number').value;

    // Here you would typically send the claim number to your server or API
    // For demonstration, we'll just show a mock status message
    const mockStatus = "Your vehicle is currently being repaired and is expected to be finished by tomorrow.";
    document.getElementById('status-message').innerText = `Status for Claim Number ${claimNumber}: ${mockStatus}`;
    
    // Reset the form
    document.getElementById('status-form').reset();
});
