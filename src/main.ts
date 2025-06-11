import Ohce from "./classes/Ohce";


const ohce = new Ohce();
const word = 'plastique';
const isPalindrome = ohce.Palindrome(word);

console.log(`"${word}" est${isPalindrome ? '' : ' n\'est pas'} un palindrome.`);