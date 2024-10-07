import _ from "lodash";
import "./../css/style.css";

import SimpleAnime from "./modules/SimpleAnime.js";
import AnimaNumeros from "./modules/AnimaNumeros.js";
import "./modules/slider-control.js";
import Modal from "./modules/Modal.js";

window.openNav = () => {
  const nav = document.getElementById("navMobile");
  nav.style.display = "block";
  nav.style.height = "100%";
};

window.closeNav = () =>
  (document.getElementById("navMobile").style.height = "0%");

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
