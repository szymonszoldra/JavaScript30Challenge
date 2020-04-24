const inventors = [{
		first: 'Albert',
		last: 'Einstein',
		year: 1879,
		passed: 1955
	},
	{
		first: 'Isaac',
		last: 'Newton',
		year: 1643,
		passed: 1727
	},
	{
		first: 'Galileo',
		last: 'Galilei',
		year: 1564,
		passed: 1642
	},
	{
		first: 'Marie',
		last: 'Curie',
		year: 1867,
		passed: 1934
	},
	{
		first: 'Johannes',
		last: 'Kepler',
		year: 1571,
		passed: 1630
	},
	{
		first: 'Nicolaus',
		last: 'Copernicus',
		year: 1473,
		passed: 1543
	},
	{
		first: 'Max',
		last: 'Planck',
		year: 1858,
		passed: 1947
	},
	{
		first: 'Katherine',
		last: 'Blodgett',
		year: 1898,
		passed: 1979
	},
	{
		first: 'Ada',
		last: 'Lovelace',
		year: 1815,
		passed: 1852
	},
	{
		first: 'Sarah E.',
		last: 'Goode',
		year: 1855,
		passed: 1905
	},
	{
		first: 'Lise',
		last: 'Meitner',
		year: 1878,
		passed: 1968
	},
	{
		first: 'Hanna',
		last: 'Hammarström',
		year: 1829,
		passed: 1909
	}
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
	'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
	'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
	'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
	'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
	'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
	'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
	'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const firstAnswer = inventors.filter(inventor => Math.floor(inventor.year / 100) === 15);
console.table(firstAnswer);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const secondAnswer = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(secondAnswer);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const thirdAnswer = inventors.sort((a, b) => a.year > b.year ? 1 : -1);


console.table(thirdAnswer);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const fourthAnswer = inventors.reduce((acc, inventor) => acc += (inventor.passed - inventor.year), 0);
console.log(`All inventors lived ${fourthAnswer} years`);

// 5. Sort the inventors by years lived

const fifthAnswer = inventors.sort((a, b) => {
	const aYearsLived = a.passed - a.year;
	const bYearsLived = b.passed - b.year;
	return aYearsLived > bYearsLived ? -1 : 1;
})
console.table(fifthAnswer);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = [...document.querySelectorAll('.mw-category a')];

//READY CODE BELOW, COPY THAT
// const sixthAnswer = boulevards
// 	.filter(boulevard => boulevard.textContent.includes('de'))
// 	.map(boulevard => boulevard.textContent);
// console.table(sixthAnswer);


// 7. sort Exercise
// Sort the people alphabetically by last name
const seventhAnswer = people.sort((a, b) => {
	const [aFirstName, aLastName] = a.split(', ');
	const [bFirstName, bLastName] = b.split(', ');
	return aLastName > bLastName ? 1 : -1;
});
console.table(seventhAnswer);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck',
	'bike', 'walk', 'car', 'van', 'bike',
	'walk', 'car', 'van', 'car', 'truck'
];

const eighthAnswer = data.reduce((acc, instance) => {
	if (!acc[instance]) acc[instance] = 0;
	acc[instance]++;
	return acc;
}, {})

console.table(eighthAnswer);