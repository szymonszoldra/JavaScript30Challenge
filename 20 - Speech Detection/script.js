// IT WORKS WITH ENGLISH SPEECH, I DID NOT TEST IT WITH POLISH SPEECH

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector('.words');
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';


let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = poopScript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();