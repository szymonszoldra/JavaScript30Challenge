const inputs = [...document.querySelectorAll('.controls input')];
const root = document.documentElement;

function changeStyle(e) {
  if (e.target.name === 'base') {
    return root.style.setProperty(`--${e.target.name}`, `${e.target.value}`);
  }
  root.style.setProperty(`--${e.target.name}`, `${e.target.value}px`);
}

inputs.forEach(input => input.addEventListener('input', (e) => changeStyle(e)));