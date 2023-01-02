const toggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-items");
toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("active");
})