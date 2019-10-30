const audios = [...document.querySelectorAll('audio')];
const tiles = [...document.querySelectorAll('div[data-key]')];

const removeClass = () => {
	tiles.forEach(tile => {
		tile.classList.remove("playing");
	})

}
const addClass = (code) => {
	tiles.forEach(tile => {
		tile.dataset.key == code ? tile.classList.add("playing") : null;
	})
}
const playDrumKitSound = (e) => {
	const code = e.keyCode;
	audios.forEach(audio => {
		addClass(code);
		setTimeout(removeClass, 50);
		if (audio.dataset.key == code) {
			audio.currentTime = 0;
			audio.play();
		}
	})
}

document.addEventListener('keydown', e => playDrumKitSound(e));