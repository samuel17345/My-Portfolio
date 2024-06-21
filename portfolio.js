document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById("datetime").textContent = dateTimeString;
    }

    function updateYear() {
        const year = new Date().getFullYear();
        document.getElementById("year").textContent = year;
    }

    updateDateTime();
    updateYear();

    // Update the date and time every second
    setInterval(updateDateTime, 1000);
});