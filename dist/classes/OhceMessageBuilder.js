"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OhceMessageBuilder = void 0;
const messages_1 = require("../languages/messages");
class OhceMessageBuilder {
    constructor(lang = 'fr') {
        this.parts = [];
        this.lang = lang;
    }
    withGreeting() {
        this.parts.push(messages_1.messages[this.lang].greeting());
        return this;
    }
    withReversedWord(word) {
        this.parts.push(word.split('').reverse().join(''));
        return this;
    }
    withPalindromeStatus(word) {
        const sanitized = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversed = sanitized.split('').reverse().join('');
        const isPalindrome = sanitized === reversed;
        this.parts.push(isPalindrome ? messages_1.messages[this.lang].palindrome : messages_1.messages[this.lang].notPalindrome);
        return this;
    }
    withFarewell() {
        this.parts.push(messages_1.messages[this.lang].farewell());
        return this;
    }
    build() {
        return this.parts.join('\n');
    }
    Palindrome(input) {
        return this
            .withGreeting()
            .withReversedWord(input)
            .withPalindromeStatus(input)
            .withFarewell()
            .build();
    }
}
exports.OhceMessageBuilder = OhceMessageBuilder;
//# sourceMappingURL=OhceMessageBuilder.js.map