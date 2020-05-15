const ENDPOINT = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('.search');
const ul = document.querySelector('ul');
const citiesData = [];

(async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    citiesData.push(...data);
  } catch (err) {
    console.error(err);
  }
})()

const handleChange = (exp, cities) => {
  const value = exp.toLowerCase();
  if (cities.length) {
    const matchingCities = cities.filter(city => city.city.toLowerCase().includes(value) || city.state.toLowerCase().includes(value));
    ul.innerHTML = '';
    matchingCities.forEach(city => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="name">${city.city}, ${city.state}</span> <span class="population">${city.population}</span>`;
      ul.appendChild(li);
    })
  } else {
    alert('Wait for cities to load');
    return setTimeout(handleChange(input.value, cities), 3000)
  }
}
input.addEventListener('input', e => handleChange(e.target.value, citiesData));