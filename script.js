document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("theme-toggle");

    themeToggleButton.addEventListener("click", () => {
        const body = document.body;
        
        // Toggle light and dark theme
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        // Change the icon inside the button
        const toggleIcon = document.getElementById("toggle-icon");
        if (body.classList.contains("dark-theme")) {
            toggleIcon.textContent = "🌙";
        } else {
            toggleIcon.textContent = "🌞";
        }

        // Optional: Save preference in localStorage
        const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("preferredTheme", currentTheme);
    });

    // On load, apply stored theme
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }
    // Section navigation functionality
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
        });

        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            showSection(targetId);
        });
    });

    // Show home section by default
    showSection("home");
    });


