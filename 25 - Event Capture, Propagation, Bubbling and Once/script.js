/*
 * `Once` is removing eventListener after perform
 * `capture` by default is false, it changes order capturing elements
 * `stopPropagation()` stops capturing elements after first event is executed
 */

const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));

button.addEventListener('click', () => console.log('Click!!!'), {
  once: true
});