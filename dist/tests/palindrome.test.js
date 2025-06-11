"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Ohce_1 = __importDefault(require("../classes/Ohce"));
(0, globals_1.describe)('Palindrome()', () => {
    let ohce;
    (0, globals_1.beforeEach)(() => {
        ohce = new Ohce_1.default();
    });
    (0, globals_1.afterEach)(() => {
        globals_1.jest.restoreAllMocks();
    });
    (0, globals_1.it)('should return full response with "bien dit!" for a palindrome during the day', () => {
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        const result = ohce.Palindrome('kayak');
        (0, globals_1.expect)(result).toContain('Bonjour');
        (0, globals_1.expect)(result).toContain('kayak');
        (0, globals_1.expect)(result).toContain('bien dit!');
        (0, globals_1.expect)(result).toContain('Bonne journée');
    });
    (0, globals_1.it)('should return full response with "pas palindrome" during the night', () => {
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        const result = ohce.Palindrome('plastique');
        (0, globals_1.expect)(result).toContain('Bonsoir');
        (0, globals_1.expect)(result).toContain('euqitsalp');
        (0, globals_1.expect)(result).toContain('pas palindrome');
        (0, globals_1.expect)(result).toContain('Bonne soirée');
    });
    (0, globals_1.it)('should return correct reversed string and greetings for numeric palindrome', () => {
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14);
        const result = ohce.Palindrome('12321');
        (0, globals_1.expect)(result).toContain('Bonjour');
        (0, globals_1.expect)(result).toContain('12321');
        (0, globals_1.expect)(result).toContain('bien dit!');
        (0, globals_1.expect)(result).toContain('Bonne journée');
    });
    (0, globals_1.it)('should start with "Bonjour" during the day', () => {
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        const result = ohce.Palindrome('kayak');
        (0, globals_1.expect)(result.startsWith('Bonjour')).toBe(true);
    });
    (0, globals_1.it)('should start with "Bonsoir" during the night', () => {
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        const result = ohce.Palindrome('kayak');
        (0, globals_1.expect)(result.startsWith('Bonsoir')).toBe(true);
    });
});
//# sourceMappingURL=palindrome.test.js.map