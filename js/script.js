import "./../css/style.css";

import SimpleAnime from "./modules/SimpleAnime.js";
import AnimaNumeros from "./modules/AnimaNumeros.js";
import "./modules/slider-control.js";
import Modal from "./modules/Modal.js";
import SmoothScroll from "./modules/SmoothScroll.js";

const nav = document.getElementById("navMobile");
window.openNav = () => {
  nav.style.display = "block";
  nav.style.height = "100%";
};

window.closeNav = () =>
  (document.getElementById("navMobile").style.height = "0%");

if (nav) {
  const navLinks = document.querySelectorAll(
    ".overlay .overlay-content .nav-link"
  );
  navLinks.forEach((links) => {
    links.addEventListener("click", () => window.closeNav());
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

document.querySelectorAll(".number").forEach((element) => {
  new AnimaNumeros(element);
});

const loginModal = new Modal("loginModal", ".openLoginModal");
loginModal.addEventListeners();

const registerModal = new Modal("registerModal", ".openRegisterModal");
registerModal.addEventListeners();

const loginModalMobile = new Modal("loginModal", ".openLoginModalMobile");
loginModalMobile.addEventListeners();

const registerModalMobile = new Modal(
  "registerModal",
  ".openRegisterModalMobile"
);
registerModalMobile.addEventListeners();

const smoothScroll = new SmoothScroll(".nav", 0, 2000);
smoothScroll.init();
