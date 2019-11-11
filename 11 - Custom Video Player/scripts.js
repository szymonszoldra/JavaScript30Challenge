const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => video.paused ? video.play() : video.pause();
const updateButton = () => toggle.textContent = !video.paused ? '▌▌' : '►';
const skip = e => {
	const skippingTime = parseInt(e.target.dataset.skip);
	video.currentTime += skippingTime;
	changeProgressBar();
}

const range = e => video[e.target.name] = e.target.value;

const changeProgressBar = () => {
	const {
		currentTime,
		duration
	} = video;
	const percent = currentTime / duration * 100;
	progressBar.style.flexBasis = `${percent}%`;

}

const handleTimeChange = e => {
	const percent = e.offsetX / progress.offsetWidth;
	video.currentTime = video.videoWidth * percent;
	changeProgressBar();
}



video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
document.addEventListener('keypress', (e) => e.keyCode === 32 ? togglePlay() : null);
skipButtons.forEach(button => button.addEventListener('click', e => skip(e)));
ranges.forEach(button => button.addEventListener('input', e => range(e)));
setInterval(changeProgressBar, 1000);
progress.addEventListener('click', e => handleTimeChange(e));