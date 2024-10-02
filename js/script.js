import AnimaNumeros from "./modules/anima-numeros.js";

if (window.SimpleAnime) {
  new SimpleAnime();
}

document.querySelectorAll(".number").forEach((element) => {
  new AnimaNumeros(element, 3000);
});
