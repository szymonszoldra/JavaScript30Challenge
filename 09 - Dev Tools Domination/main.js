const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];

// Regular
console.log('Hello world!')

// Interpolated
console.log('Hello %s', 'world!');

// Styled
console.log('%cHello world!', 'color:royalblue;');

// warning!
console.warn('Hello world!')

// Error :|
console.error('Hello world!')

// Info
console.info('Hello world!')

// Testing
const dog = 'cat';
console.assert(dog === 'dog', 'Hello world!')

// clearing
console.clear();

// Viewing DOM Elements
console.log(document.querySelector('p'));

// Grouping together
console.groupCollapsed('Hello world');
console.log('Hello');
console.log('world!');
console.groupEnd('Hello world!');

// counting
console.count('Hello');
console.count('Hello');
console.count('Hello');
console.count('world!');
console.count('world!');
console.count('world!');

// timing
const ENDPOINT = 'https://api.github.com/users/szymonszoldra';

console.time('Fetching data');
(async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.timeEnd('Fetching data');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})()


// table

console.table(dogs);