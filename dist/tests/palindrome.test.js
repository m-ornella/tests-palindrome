"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Ohce_1 = __importDefault(require("../classes/Ohce"));
(0, globals_1.describe)('Palindrome', () => {
    (0, globals_1.it)('should return true for "kayak"', () => {
        const utils = new Ohce_1.default();
        (0, globals_1.expect)(utils.Palindrome('kayak')).toBe(true);
    });
});
(0, globals_1.describe)('nest pas un Palindrome', () => {
    (0, globals_1.it)('should return false for "plastique"', () => {
        const utils = new Ohce_1.default();
        (0, globals_1.expect)(utils.Palindrome('plastique')).toBe(false);
    });
});
(0, globals_1.describe)('Ohce', () => {
    const ohce = new Ohce_1.default();
    test('reverseWord should return the reversed input string', () => {
        (0, globals_1.expect)(ohce.reverseWord('hello')).toBe('olleh');
        (0, globals_1.expect)(ohce.reverseWord('palindrome')).toBe('emordnilap');
        (0, globals_1.expect)(ohce.reverseWord('12345')).toBe('54321');
    });
});
//# sourceMappingURL=palindrome.test.js.map