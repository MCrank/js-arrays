const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat:', cats[0]);

const favAnimal = 'cow';

const favAnimalArray = favAnimal.split(''); //['c', 'o', 'w']
console.log('Fav Animal', favAnimalArray);

// Split
const favAnimal1 = 'cow, goose, bird';
const favAnimalArray1 = favAnimal1.split(','); //['cow', 'goose', 'bird']
console.log('Fav Animal', favAnimalArray1);

// Join
const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('cow');
console.log('New Num', newNum);

// Function that takes in a word and test for a Palindrome
const myWord = 'racecar';

let one = myWord.split('');
console.log(one);
let two = one.reverse();
console.log(two);
let three = two.join('');
console.log(three);
const palinChecker = wordToTest => {
  // Console log "yes" if it is a Palindrom
  if (
    wordToTest
      .split('')
      .reverse()
      .join('') == wordToTest
  ) {
    console.log('This is a palindrome');
  } else {
    console.log('This is NOT a palindrome');
  }
};

palinChecker('mom');
palinChecker('monkeybutt');
palinChecker('racecar');
palinChecker('chromedome');

let animals = ['dog', 'bird', 'moles', 'spiders'];

const lastItem = animals.pop(); // spiders
const firstItem = animals.shift(); // dog
animals.push('bat'); // Adds to the end of Array
animals.unshift('baby hippo'); // Adds to the beginning of the Array
console.log(animals); // baby hippo, bird, moles, bat

// FOR LOOPS
// 1. WHat is your starting value - 0 (90% of time)
// 2. What is your stopping value - something.length
// 3. How are you incrementing - +1

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
