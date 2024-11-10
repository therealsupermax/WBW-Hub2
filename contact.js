document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    const formElement = document.getElementById('contact-form');
    const messageElement = document.getElementById('message');
    
    // Send to FormSubmit
    fetch("https://formsubmit.co/supermax333@proton.me", {
        method: "POST",
        body: new FormData(formElement)
    })
    .then(response => {
        // Show success message
        messageElement.style.padding = '10px';
        messageElement.style.marginTop = '10px';
        messageElement.style.backgroundColor = '#dff0d8';
        messageElement.style.color = '#3c763d';
        messageElement.style.borderRadius = '4px';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontWeight = 'bold';
        messageElement.innerText = "Thank you! Your contact information has been submitted. We will get back to you soon.";
        
        // Optional: Scroll the message into view
        messageElement.scrollIntoView({ behavior: 'smooth' });
        
        // Clear the form
        formElement.reset();
    })
    .catch(error => {
        // Show error message if something goes wrong
        messageElement.style.padding = '10px';
        messageElement.style.marginTop = '10px';
        messageElement.style.backgroundColor = '#f2dede';
        messageElement.style.color = '#a94442';
        messageElement.style.borderRadius = '4px';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontWeight = 'bold';
        messageElement.innerText = "Sorry, there was an error submitting your information. Please try again.";
        console.error('Error:', error);
    });
});
