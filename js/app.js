const menuRowLg = document.querySelector(".menu__row--lg"),
    menuRowSm = document.querySelector(".menu__row--sm"),
    menuToggle = document.querySelector(".menu__toggle"),
    menuIcon = document.querySelector("#menu-icon");

let toggleClose = false;
menuToggle.addEventListener("click", () => {
    menuRowLg.classList.toggle("active");
    menuRowSm.classList.toggle("active");

    menuIcon.className = toggleClose ? "ri-layout-grid-fill" : "ri-close-large-line";
    toggleClose = !toggleClose;
});