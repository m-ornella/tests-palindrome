"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ohce_1 = __importDefault(require("./classes/Ohce"));
const selectedLanguage = 'de';
const ohce = new Ohce_1.default(selectedLanguage);
const word = 'kayak';
console.log(ohce.Palindrome(word));
//# sourceMappingURL=main.js.map