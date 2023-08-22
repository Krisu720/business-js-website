export const setupSlider = ({ slider, nextButton, prevButton }) => {
  let currentSlide = 0;
  const slidesCount = parseInt(slider.children.length - 1);

  const nextSlide = () => {
    currentSlide = currentSlide + 1 > slidesCount ? 0 : currentSlide + 1;
    slider.style.transform = `translateX(calc(${-currentSlide}*100%))`;
  };

  const prevSlide = () => {
    currentSlide = currentSlide - 1 < 0 ? slidesCount : currentSlide - 1;
    slider.style.transform = `translateX(calc(${-currentSlide}*100%))`;
  };

  nextButton.addEventListener("click", () => nextSlide());
  prevButton.addEventListener("click", () => prevSlide());
};
