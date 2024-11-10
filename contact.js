document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formElement = document.getElementById('contact-form');
    
    fetch("https://formsubmit.co/supermax333@proton.me", {
        method: "POST",
        body: new FormData(formElement)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = "Thank you! Your contact information has been submitted.";
        formElement.reset();
    })
    .catch(error => {
        document.getElementById('message').innerText = "Sorry, there was an error submitting your information. Please try again.";
        console.error('Error:', error);
    });
});
