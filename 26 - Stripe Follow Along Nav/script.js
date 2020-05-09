const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const onEnter = (e) => {
  e.target.classList.add('trigger-enter');

  setTimeout(() => {
    if (e.target.classList.contains('trigger-enter')) {
      e.target.classList.add('trigger-enter-active');
    }
  }, 150);
  background.classList.add('open');

  const dropdown = e.target.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const top = dropdownCoords.top - navCoords.top;
  const left = dropdownCoords.left - navCoords.left;

  background.style.width = `${dropdownCoords.width}px`;
  background.style.height = `${dropdownCoords.height}px`;

  background.style.transform = `translate(${left}px, ${top}px)`;
}

const onLeave = (e) => {
  e.target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', onEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', onLeave));