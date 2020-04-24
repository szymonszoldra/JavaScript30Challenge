const bands = ['The Plot in You', 'The Devil Wears Prada',
  'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
  'The Midway State', 'We Came as Romans', 'Counterparts',
  'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const removeArticles = bands => bands.replace(/^(a |an |the)/i, '').trim();
const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);
const fragment = document.createDocumentFragment();

bands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  fragment.appendChild(li);
})

document.querySelector('#bands').appendChild(fragment);