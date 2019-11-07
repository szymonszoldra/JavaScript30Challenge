const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];
let isShiftHold = false;

const checked = () => {
	const inputsChecked = checkboxes.filter(checkbox => checkbox.checked);
	if (isShiftHold && inputsChecked.length >= 2) {
		checkboxes.forEach(checkbox => {
			const isAbove = checkbox.dataset.key >= inputsChecked[0].dataset.key;
			const isBelow = checkbox.dataset.key <= inputsChecked[inputsChecked.length - 1].dataset.key;
			isAbove && isBelow ? checkbox.checked = 'true' : null;
		})
	}
}

checkboxes.forEach((checkbox, index) => {
	checkbox.dataset.key = index;
	checkbox.addEventListener('input', checked)
})
document.addEventListener('keydown', (e) => e.keyCode === 16 ? isShiftHold = true : null);
document.addEventListener('keyup', () => isShiftHold = false);