const testimonialContainer = document.querySelector(".testimonial");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cardWidth = 320;
let scrollAmount = 0;

prevButton.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  testimonialContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  scrollAmount += cardWidth;
  if (
    scrollAmount >
    testimonialContainer.scrollWidth - testimonialContainer.clientWidth
  ) {
    scrollAmount =
      testimonialContainer.scrollWidth - testimonialContainer.clientWidth;
  }
  testimonialContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});
