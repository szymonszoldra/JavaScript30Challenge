const hands = {
  second: document.querySelector('.second-hand'),
  minute: document.querySelector('.min-hand'),
  hour: document.querySelector('.hour-hand'),
}

setInterval(() => {
  const time = new Date()
  const currentTime = {
    second: time.getSeconds(),
    minute: time.getMinutes(),
    hour: time.getHours(),
  }

  hands.second.style.transform = `rotate(${90 + currentTime.second*6}deg)`;
  hands.minute.style.transform = `rotate(${90 + currentTime.minute*6}deg)`;
  hands.hour.style.transform = `rotate(${90 + currentTime.hour*30}deg)`;
}, 1)