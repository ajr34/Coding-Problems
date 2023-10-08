import "./style.css";
import loadHomePage from "./home-page";
import loadMenuPage from "./menu-page";
import loadContactPage from "./contact-page";

const navBtn = document.querySelectorAll("#nav__btn");

// CREATE INIT FUNCTION
loadHomePage();

navBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.page == "home") {
      loadHomePage();
    } else if (btn.dataset.page == "menu") {
      loadMenuPage();
    } else if (btn.dataset.page == "contact") {
      loadContactPage();
    }
  });
});
