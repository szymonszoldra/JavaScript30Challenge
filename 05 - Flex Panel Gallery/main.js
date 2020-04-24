const containter = document.querySelector('.panels');
const panels = containter.querySelectorAll('.panel');

const handleRemove = () => panels.forEach(panel => panel.classList.remove('active', 'fullyActive'));

const handleClick = (e) => {
  const isContaining = e.target.classList.contains('active') || e.target.parentNode.classList.contains('active');
  if (isContaining) return handleRemove();
  handleRemove();
  e.target.nodeName === 'DIV' ? e.target.classList.add('active') : e.target.parentNode.classList.add('active');
}
const handleParagraphsVisibility = (e) => {
  const name = e.propertyName === 'flex' || e.propertyName === 'flex-grow';
  const doesItHaveActiveClass = e.target.classList.contains('active') || e.target.parentNode.classList.contains('active');
  if (name && doesItHaveActiveClass) {
    const className = 'fullyActive';
    e.target.nodeName === 'DIV' ? e.target.classList.add(className) : e.target.parentNode.classList.add(className);
  }
}

panels.forEach(panel => panel.addEventListener('click', e => handleClick(e)));
panels.forEach(panel => panel.addEventListener('transitionend', e => handleParagraphsVisibility(e)));