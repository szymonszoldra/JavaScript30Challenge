const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function putVoicesToDropdown() {
  voices = this.getVoices();

  const options = voices
    .map(voice => {
      const {
        name,
        lang
      } = voice;
      return `<option value="${name}">${name} (${lang})</option>`;
    })
    .join('');

  voicesDropdown.innerHTML = options;
}

function setVoice() {
  console.log(this.value);
  console.log(voices);
  msg.voice = voices.find(voice => voice.name === this.value);
  toogleSpeak();
  console.log(msg.voice);
}

function toogleSpeak(startOver = true) {
  speechSynthesis.cancel();

  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toogleSpeak();
}

speechSynthesis.addEventListener('voiceschanged', putVoicesToDropdown);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toogleSpeak);
stopButton.addEventListener('click', () => toogleSpeak(false));
options.forEach(option => option.addEventListener('change', setOption));