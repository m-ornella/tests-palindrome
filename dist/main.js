"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ohce_1 = __importDefault(require("./classes/Ohce"));
const ohce = new Ohce_1.default();
const word = 'kayak';
const isPalindrome = ohce.Palindrome(word);
const greeting = ohce.greeting();
console.log(greeting);
if (isPalindrome === 'bien dit!') {
    console.log(isPalindrome);
}
else {
    console.log(`"${word}" n'est pas un palindrome.`);
}
console.log(ohce.reverseWord('palindrome'));
//# sourceMappingURL=main.js.map