const containter = document.querySelector('.panels');
const panels = containter.querySelectorAll('.panel');

const handleRemove = () => panels.forEach(panel => panel.classList.remove('active'));

const handleClick = (e) => {
	const isContaining = e.target.classList.contains('active') || e.target.parentNode.classList.contains('active');
	if (isContaining) return handleRemove();
	handleRemove();
	e.target.nodeName === "DIV" ? e.target.classList.add('active') : e.target.parentNode.classList.add('active');
}

panels.forEach(panel => panel.addEventListener('click', e => handleClick(e)));