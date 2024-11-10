document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        insurance: document.getElementById('insurance').value
    };

    // Send email using EmailJS service
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: `${formData.firstName} ${formData.lastName}`,
        phone_number: formData.phone,
        email_address: formData.email,
        mailing_address: formData.address,
        insurance_company: formData.insurance,
        to_email: "supermax333@proton.me" // Replace with your email address / your-email@example.com
    })
    .then(function(response) {
        document.getElementById('message').innerText = "Thank you! Your contact information has been submitted.";
        document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
        document.getElementById('message').innerText = "Sorry, there was an error submitting your information. Please try again.";
        console.error("Error:", error);
    });
});
