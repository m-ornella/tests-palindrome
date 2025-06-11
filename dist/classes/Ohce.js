"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ohce {
    Palindrome(input) {
        const greeting = this.helloGreeting();
        const reversed = this.reverseWord(input);
        const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedSanitized = sanitized.split('').reverse().join('');
        const palindromeMessage = sanitized === reversedSanitized ? 'bien dit!' : 'pas palindrome';
        const farewell = this.byeGreeting();
        return `${greeting}\n${reversed}\n${palindromeMessage}\n${farewell}`;
    }
    reverseWord(input) {
        return input.split('').reverse().join('');
    }
    helloGreeting() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            return "Bonjour";
        }
        else {
            return "Bonsoir";
        }
    }
    byeGreeting() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            return "Bonne journée";
        }
        else {
            return "Bonne soirée";
        }
    }
}
exports.default = Ohce;
//# sourceMappingURL=Ohce.js.map