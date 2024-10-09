export default class Modal {
  constructor(modalId, triggerClass) {
    this.modal = document.getElementById(modalId);
    this.trigger = document.querySelector(triggerClass);
    this.closeBtn = this.modal.querySelector(".close");
  }

  addEventListeners() {
    this.trigger.addEventListener("click", () => this.openModal());

    this.closeBtn.addEventListener("click", () => this.closeModal());

    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.style.display = "flex";
    this.modal.classList.add("show");
  }

  closeModal() {
    this.modal.style.display = "none";
    this.modal.classList.remove("show");
  }
}
