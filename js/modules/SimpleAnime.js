export default window.SimpleAnime = class {
  constructor() {
    this.items = document.querySelectorAll("[data-anime]");
    this.init();
  }

  animateItems() {
    this.items.forEach((item) => {
      const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
      if (item.getBoundingClientRect().top + window.pageYOffset < windowTop) {
        const delay = Number(item.getAttribute("data-anime"));
        if (!isNaN(delay)) {
          setTimeout(() => {
            item.classList.add("anime");
          }, delay);
        }
      }
    });
  }

  handleScroll() {
    this.animateItems();
  }

  init() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }
};
