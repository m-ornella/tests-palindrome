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
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18
            ? 'Guten Tag'
            : 'Guten Abend',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18
            ? 'Schönen Tag noch'
            : 'Schönen Abend noch',
        palindrome: 'gut gesagt!',
        notPalindrome: 'kein Palindrom',
    },
    vn: {
        greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Xin chao' : 'Chao buoi to',
        farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Chuc mung ngay moi' : 'Chao buoi to',
        palindrome: 'khong phai palindrom',
        notPalindrome: 'khong phai palindrom',
    }
};
//# sourceMappingURL=messages.js.map