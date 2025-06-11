"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ohce {
    Palindrome(input) {
        const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversed = sanitized.split('').reverse().join('');
        if (sanitized === reversed) {
            return 'bien dit!';
        }
        else {
            return 'pas palindrome';
        }
    }
    reverseWord(input) {
        return input.split('').reverse().join('');
    }
    greeting() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            return "Bonjour";
        }
        else {
            return "Bonsoir";
        }
    }
}
exports.default = Ohce;
//# sourceMappingURL=Ohce.js.map