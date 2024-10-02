export default class AnimaNumeros {
  constructor(numbersElement, duration = 2000) {
    this.numbersElement = numbersElement;
    this.finalValue = parseInt(this.numbersElement.innerText);
    this.duration = duration;
    this.startAnimation();
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

  startAnimation() {
    this.animate();
  }
}
