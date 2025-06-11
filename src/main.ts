import Ohce from "./classes/Ohce";


const ohce = new Ohce();
const word = 'plastique';
const isPalindrome = ohce.Palindrome(word);
const greeting = ohce.greeting();

console.log(`"${word}" est${isPalindrome ? '' : ' n\'est pas'} un palindrome.`);
console.log(ohce.reverseWord('palindrome'));
console.log(greeting);
