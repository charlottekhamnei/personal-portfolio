function toggleMenu() {
    var modal = document.getElementById("modalMenu");
    var menuIcon = document.getElementById("hamburgerMenu");

    if (modal.style.display === "flex") {
        modal.style.display = "none";
        menuIcon.innerHTML = "☰"; // Switch back to hamburger menu
    } else {
        modal.style.display = "flex";
        menuIcon.innerHTML = "✖"; // Change to close button
    }
}
