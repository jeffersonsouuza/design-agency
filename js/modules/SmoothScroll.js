export default class SmoothScroll {
  constructor(navSelector, offset = 100, duration = 500) {
    this.navLinks = document.querySelectorAll(`${navSelector} a[href^="#"]`);
    this.offset = offset;
    this.duration = duration;
  }

  init() {
    this.navLinks.forEach((anchor) => {
      anchor.addEventListener("click", (e) => this.handleClick(e));
    });
  }

  handleClick(e) {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;

      this.scrollToPosition(targetPosition - this.offset);
    }
  }

  scrollToPosition(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
}
