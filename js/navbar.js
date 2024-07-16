// navbar.js

// Function to add 'active' class to the current page link
function setActiveLink() {
    const pagePath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === pagePath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', setActiveLink);
