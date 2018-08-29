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
