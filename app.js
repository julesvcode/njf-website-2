
// NAVBAR BURGER MENU
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav__menu")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})


// FAQ DROPDOWNS
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

