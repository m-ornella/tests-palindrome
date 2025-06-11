"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ohce {
    Palindrome(input) {
        const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversed = sanitized.split('').reverse().join('');
        return sanitized === reversed;
    }
    reverseWord(input) {
        return input.split('').reverse().join('');
    }
}
exports.default = Ohce;
//# sourceMappingURL=Ohce.js.map