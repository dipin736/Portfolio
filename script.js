function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("desktop-nav"); // Change to your actual navbar ID
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
});
