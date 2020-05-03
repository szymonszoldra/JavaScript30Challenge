const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = e => {
  const coords = e.target.getBoundingClientRect();
  const {
    width,
    height,
    left,
    top
  } = coords;
  const currentTop = top + window.scrollY;
  const currentLeft = left + window.scrollX;

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translate(${currentLeft}px,${currentTop}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));