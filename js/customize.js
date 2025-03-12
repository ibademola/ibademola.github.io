document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("see-more-btn").addEventListener("click", function() {
        let moreHighlights = document.getElementById("more-highlights");
        moreHighlights.style.display = "block"; // Show the hidden section
        this.style.display = "none"; // Hide the button
    });
});
