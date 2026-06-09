const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

/* Toggle Mobile Menu */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");
});