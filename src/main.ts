import Ohce from "./classes/Ohce";

const selectedLanguage = 'en';

const ohce = new Ohce(selectedLanguage);

const word = 'kayak';

console.log(ohce.Palindrome(word));