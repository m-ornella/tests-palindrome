"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
exports.messages = {
    fr: {
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Bonne journée' : 'Bonne soirée',
        palindrome: 'bien dit!',
        notPalindrome: 'pas palindrome',
    },
    en: {
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Hello' : 'Good evening',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Have a nice day' : 'Have a good evening',
        palindrome: 'well said!',
        notPalindrome: 'not a palindrome',
    },
    es: {
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Hola' : 'Buenas noches',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Buen dia' : 'Buenas noches',
        palindrome: 'bien dicho!',
        notPalindrome: 'no es palíndromo',
    },
    de: {
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Hallo' : 'Guten Abend',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Guten Tag' : 'Guten Abend',
        palindrome: 'gut gesagt!',
        notPalindrome: 'kein Palindrom',
    }
};
//# sourceMappingURL=messages.js.map