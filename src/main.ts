import Ohce from "./classes/Ohce";


const ohce = new Ohce();
const word = 'kayak';
const isPalindrome = ohce.Palindrome(word);
const greeting = ohce.helloGreeting();
const byeGreeting = ohce.byeGreeting();

console.log(greeting);
if (isPalindrome === 'bien dit!') {
  console.log(isPalindrome);
} else {
  console.log(`"${word}" n'est pas un palindrome.`);
}
console.log(ohce.reverseWord('palindrome'));
console.log(byeGreeting);

