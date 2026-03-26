const buttons = document.querySelectorAll(".details-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const details = this.nextElementSibling;

        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            this.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            this.textContent = "Show Details";
        }

    });
});

document.querySelector("form").addEventListener("submit", function(event) {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;

    }



    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;

    }


    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Please enter a message.";
        isValid = false;

    }

    if (!isValid) {
        event.preventDefault();

    }

});