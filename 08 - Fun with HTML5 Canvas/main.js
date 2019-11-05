const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
[ctx.strokeStyle, ctx.lineJoin, ctx.lineCap, ctx.lineWidth] = ['#BADA55', 'round', 'round', 1];

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = e => {
	if (!isDrawing) return;

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue >= 360 ? hue = 0 : hue++;


	console.log(direction, ctx.lineWidth)

	ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ? direction = !direction : null;
	direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown', e => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', e => draw(e));
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);