// --- Countdown Logic ---
// Set the date we're counting down to (January 1, 2026, at midnight UTC)
const launchDate = new Date("Jan 1, 2026 00:00:00").getTime(); 

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now; 

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "🚀 WE ARE LIVE! 🚀";
        document.getElementById("countdown").style.fontSize = "2rem";
        document.querySelector(".coming-soon h2").innerHTML = "Visit Our Site Now!";
    }
}, 1000);


// --- Form and Modal Logic ---

// Ensures the script waits until the HTML structure is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.subscribe-form');
    const emailInput = document.querySelector('.subscribe-form input[type="email"]');
    const modal = document.getElementById('thankYouModal');
    const closeModalButton = document.getElementById('closeModal');

    // 1. Handle Form Submission
    if (form) { // Check if the form element was successfully found
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // STOP the default form submission (page refresh)

            // Simple Email Validation Check
            if (emailInput.checkValidity()) {
                
                // *** IMPORTANT: In a live app, this is where you would send the email data to your server/API ***

                // Clear the input field
                emailInput.value = '';

                // Show the Neon Modal
                if (modal) {
                   modal.classList.add('show');
                }
            } else {
                // Rely on browser default feedback for invalid email
                emailInput.reportValidity();
            }
        });
    }


    // 2. Handle Modal Closing
    if (closeModalButton && modal) {
        closeModalButton.addEventListener('click', function() {
            modal.classList.remove('show');
        });

        // Also close if the user clicks the overlay outside the box
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});