
"use strict";

// Welcome message in the browser console
console.log("Welcome to Somasekhar's Portfolio!");

// Update the copyright year automatically
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after clicking a navigation link
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";
        });
    });
}

// Confirm that the website has loaded
window.addEventListener("load", function () {
    console.log("Portfolio loaded successfully!");
});
