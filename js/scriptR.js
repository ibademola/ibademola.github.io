let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("banner-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function changeBanner(n) {
    showSlides(slideIndex += n);
}

function openResearch(researchName) {
    let i;
    let sections = document.getElementsByClassName("research-section");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(researchName).style.display = "block";
}