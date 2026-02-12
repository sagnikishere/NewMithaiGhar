function sendToWhatsapp(e) {
    e.preventDefault(); // Prevent standard form submission

    // 1. Get Values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // 2. Validate (Optional - basic validation is handled by 'required' in HTML)
    if(name === "" || phone === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    // 3. Construct the WhatsApp Message
    // %0a is the code for a new line in URL
    const whatsappMessage = `*New Order/Inquiry from Website* %0a%0a` +
                            `*Name:* ${name} %0a` +
                            `*Phone:* ${phone} %0a` +
                            `*Message:* ${message}`;

    // 4. Your Business Number (Replace this with the actual number)
    // Format: Country Code + Number (No symbols). Example: 919876543210
    const phoneNumber = "919876543210"; 

    // 5. Create URL
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // 6. Open in new tab
    window.open(url, '_blank').focus();
}