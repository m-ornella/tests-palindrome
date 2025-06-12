"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OhceMessageBuilder_1 = require("./OhceMessageBuilder");
class Ohce {
    constructor(language = 'fr') {
        this.language = language;
    }
    Palindrome(input) {
        const builder = new OhceMessageBuilder_1.OhceMessageBuilder(this.language);
        return builder
            .withGreeting()
            .withReversedWord(input)
            .withPalindromeStatus(input)
            .withFarewell()
            .build();
    }
}
exports.default = Ohce;
//# sourceMappingURL=Ohce.js.map