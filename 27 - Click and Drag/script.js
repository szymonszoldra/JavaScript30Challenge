const slider = document.querySelector('.items');

let isMouseDown = false;
let startX;
let scrollX;

const setScrollState = (e, bool = false) => {
  isMouseDown = bool;
  if (!bool) {
    slider.classList.remove('active');
    return;
  }

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const startScrolling = (e) => {
  if (!isMouseDown) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousemove', (e) => startScrolling(e));

slider.addEventListener('mouseleave', setScrollState);
slider.addEventListener('mouseup', setScrollState);
slider.addEventListener('mousedown', (e) => setScrollState(e, true));