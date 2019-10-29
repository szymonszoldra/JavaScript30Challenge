const keys = [...document.querySelectorAll('audio')];
const squares = [...document.querySelectorAll('div[data-key]')];

const removeClass = () => {
	squares.forEach(square => {
		square.classList.remove("playing");
	})

}
const addClass = (code) => {
	squares.forEach(square => {
		square.dataset.key == code ? square.classList.add("playing") : null;
	})
}
const keyPressed = (e) => {
	const code = e.keyCode;
	keys.forEach(key => {
		addClass(code);
		setTimeout(removeClass, 50);
		if (key.dataset.key == code) {
			key.currentTime = 0;
			key.play();
		}
	})
}

document.addEventListener('keydown', e => keyPressed(e));