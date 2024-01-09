const activeLink = window.location.pathname;

// Add underline on active link in navigation bar

const navbarLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activeLink}`)) {
    link.classList.add("active_link");
  }
});

// Open dropdown menu in mobile version

const dropdown_btn = document.querySelector(".nav_dropdown");

const dropdown_menu = document.querySelector("ul");

dropdown_btn.addEventListener("click", handleDropdownOpen);

// Handle open dropdown

function handleDropdownOpen() {
  dropdown_menu.classList.toggle("open");
}
