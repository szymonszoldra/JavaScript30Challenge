const keysPressed = [];
const code = 'szymonszoldra'

const handleSecretCode = e => {
  keysPressed.push(e.key);
  keysPressed.length > code.length ? keysPressed.shift() : null;

  const keys = keysPressed.join('');
  const isCodeHere = keys.indexOf(code);

  isCodeHere !== -1 ? cornify_add() : null;
  return;
}

window.addEventListener('keypress', e => handleSecretCode(e));