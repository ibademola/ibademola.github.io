document.addEventListener("DOMContentLoaded", function() {
    const moreHighlights = document.getElementById("more-highlights");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const seeLessBtn = document.getElementById("see-less-btn");

    seeMoreBtn.addEventListener("click", function() {
        moreHighlights.style.display = "block"; // Show the hidden section
        seeMoreBtn.style.display = "none"; // Hide "Show More" button
        seeLessBtn.style.display = "inline-block"; // Show "Show Less" button
    });

    seeLessBtn.addEventListener("click", function() {
        moreHighlights.style.display = "none"; // Hide the additional highlights
        seeLessBtn.style.display = "none"; // Hide "Show Less" button
        seeMoreBtn.style.display = "inline-block"; // Show "Show More" button
    });
});