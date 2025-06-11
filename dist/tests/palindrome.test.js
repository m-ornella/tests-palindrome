"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Ohce_1 = __importDefault(require("../classes/Ohce"));
(0, globals_1.describe)('Palindrome', () => {
    (0, globals_1.it)('should return "bien dit!" for "kayak"', () => {
        const utils = new Ohce_1.default();
        (0, globals_1.expect)(utils.Palindrome('kayak')).toBe('bien dit!');
    });
    (0, globals_1.it)('should return "pas palindrome" for "plastique"', () => {
        const utils = new Ohce_1.default();
        (0, globals_1.expect)(utils.Palindrome('plastique')).toBe('pas palindrome');
    });
});
(0, globals_1.describe)('reversed word', () => {
    const ohce = new Ohce_1.default();
    test('reverseWord should return the reversed input string', () => {
        (0, globals_1.expect)(ohce.reverseWord('hello')).toBe('olleh');
        (0, globals_1.expect)(ohce.reverseWord('palindrome')).toBe('emordnilap');
        (0, globals_1.expect)(ohce.reverseWord('12345')).toBe('54321');
    });
});
(0, globals_1.describe)('bonjour', () => {
    let ohce;
    beforeEach(() => {
        ohce = new Ohce_1.default();
    });
    (0, globals_1.it)('should say Bonjour during the day', () => {
        jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        (0, globals_1.expect)(ohce.greeting()).toBe('Bonjour');
    });
    (0, globals_1.it)('should say Bonsoir during the night', () => {
        jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        (0, globals_1.expect)(ohce.greeting()).toBe('Bonsoir');
    });
});
(0, globals_1.describe)('bien dit', () => {
    (0, globals_1.it)('should return true for "kayak"', () => {
        const utils = new Ohce_1.default();
        (0, globals_1.expect)(utils.Palindrome('kayak')).toBe('bien dit!');
    });
});
//# sourceMappingURL=palindrome.test.js.map