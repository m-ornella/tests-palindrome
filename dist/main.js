"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ohce_1 = __importDefault(require("./classes/Ohce"));
const ohce = new Ohce_1.default();
const word = 'plastique';
const isPalindrome = ohce.Palindrome(word);
console.log(`"${word}" est${isPalindrome ? '' : ' n\'est pas'} un palindrome.`);
//# sourceMappingURL=main.js.map