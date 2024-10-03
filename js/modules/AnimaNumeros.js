export default class AnimaNumeros {
  constructor(numbersElement, duration = 2000) {
    this.numbersElement = numbersElement;
    this.finalValue = parseInt(this.numbersElement.innerText);
    this.duration = duration;

    this.handleScroll = this.handleScroll.bind(this);
    this.hasAnimated = false; // Para garantir que a animação ocorra apenas uma vez
    this.init();
  }

  animate() {
    const startTime = performance.now();
    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / this.duration, 1);
      const currentNumber = Math.floor(progress * this.finalValue);
      this.numbersElement.innerText = currentNumber;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.numbersElement.innerText = this.finalValue;
      }
    };
    requestAnimationFrame(step);
  }

  checkVisibility() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75; // Ajuste para quando 75% do elemento estiver visível
    const elementTop =
      this.numbersElement.getBoundingClientRect().top + window.pageYOffset;
    return windowTop > elementTop; // Verifica se o topo do elemento está visível
  }

  handleScroll() {
    if (!this.hasAnimated && this.checkVisibility()) {
      this.startAnimation();
      this.hasAnimated = true; // Garante que a animação não será repetida
      window.removeEventListener("scroll", this.handleScroll); // Remove o listener após a animação
    }
  }

  startAnimation() {
    this.animate();
  }

  init() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Verifica imediatamente ao carregar a página
  }
}
