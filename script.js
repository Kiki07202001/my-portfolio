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