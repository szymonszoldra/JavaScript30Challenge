const area = document.querySelector('.hero');
const text = area.querySelector('h1');

const handleMouseMove = e => {
	const positionX = e.clientX;
	const positionY = e.clientY;
	const textXCenter = text.offsetLeft + text.clientWidth / 2;
	const textYCenter = text.offsetTop + text.clientHeight / 2;

	const xValue = (positionX - textXCenter) / 50;
	const yValue = (positionY - textYCenter) / 50;

	text.style.textShadow = `${xValue}px ${yValue}px 0 rgba(0, 0, 0, 0.5)`;
}

area.addEventListener('mousemove', handleMouseMove)