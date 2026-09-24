const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <header class="navbar">

        <div class="nav-container">

            <a href="index.html" class="logo">
                <span>D</span>egafeneh
            </a>


            <nav class="nav-menu">

                <a href="index.html" class="nav-link">
                    HOME
                </a>

                <a href="about.html" class="nav-link">
                    ABOUT
                </a>

                <a href="services.html" class="nav-link">
                    SERVICES
                </a>

                <a href="skills.html" class="nav-link">
                    SKILLS
                </a>

                <a href="projects.html" class="nav-link">
                    PROJECTS
                </a>

                <a href="certificates.html" class="nav-link">
                    CERTIFICATES
                </a>

                <a href="contact.html" class="nav-link">
                    CONTACT
                </a>

            </nav>


            <button
                class="menu-toggle"
                aria-label="Open navigation menu"
            >
                ☰
            </button>

        </div>

    </header>
`;


// ========================================
// ACTIVE NAVIGATION
// ========================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


// ========================================
// MOBILE MENU
// ========================================

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});