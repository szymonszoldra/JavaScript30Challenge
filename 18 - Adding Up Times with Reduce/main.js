const videos = [...document.querySelectorAll('li')];

const totalTime = videos.reduce((acc, video) => {
  const time = video.dataset.time.split(':');
  return acc += (60 * parseInt(time[0]) + parseInt(time[1]))
}, 0)

const hours = parseInt(totalTime / 3600);
const minutes = parseInt((totalTime % 3600) / 60);
const seconds = parseInt(totalTime % 60);

const isGreaterThanNine = number => number > 9 ? number : '0' + number;

console.log(`Total time is ${isGreaterThanNine(hours)}:${isGreaterThanNine(minutes)}:${isGreaterThanNine(seconds)}`);