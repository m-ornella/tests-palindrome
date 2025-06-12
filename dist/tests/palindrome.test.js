"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const OhceMessageBuilder_1 = require("../classes/OhceMessageBuilder");
(0, globals_1.describe)('Palindrome()', () => {
    let builder;
    (0, globals_1.beforeEach)(() => {
        builder = new OhceMessageBuilder_1.OhceMessageBuilder();
    });
    (0, globals_1.afterEach)(() => {
        globals_1.jest.restoreAllMocks();
    });
    (0, globals_1.it)('should return full response with "bien dit!" for a palindrome during the day', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        // Act
        const result = builder.Palindrome('kayak');
        // Assert
        (0, globals_1.expect)(result).toContain('Bonjour');
        (0, globals_1.expect)(result).toContain('kayak');
        (0, globals_1.expect)(result).toContain('bien dit!');
        (0, globals_1.expect)(result).toContain('Bonne journée');
    });
    (0, globals_1.it)('should return full response with "pas palindrome" during the night', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        // Act
        const result = builder.Palindrome('plastique');
        // Assert
        (0, globals_1.expect)(result).toContain('Bonsoir');
        (0, globals_1.expect)(result).toContain('euqitsalp');
        (0, globals_1.expect)(result).toContain('pas palindrome');
        (0, globals_1.expect)(result).toContain('Bonne soirée');
    });
    (0, globals_1.it)('should return correct reversed string and greetings for numeric palindrome', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14);
        // Act
        const result = builder.Palindrome('12321');
        // Assert
        (0, globals_1.expect)(result).toContain('Bonjour');
        (0, globals_1.expect)(result).toContain('12321');
        (0, globals_1.expect)(result).toContain('bien dit!');
        (0, globals_1.expect)(result).toContain('Bonne journée');
    });
    (0, globals_1.it)('should start with "Bonjour" during the day', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        // Act
        const result = builder.Palindrome('kayak');
        // Assert
        (0, globals_1.expect)(result.startsWith('Bonjour')).toBe(true);
    });
    (0, globals_1.it)('should start with "Bonsoir" during the night', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        // Act
        const result = builder.Palindrome('kayak');
        // Assert
        (0, globals_1.expect)(result.startsWith('Bonsoir')).toBe(true);
    });
    (0, globals_1.it)('should end with "Bonne journée" during the day', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
        // Act
        const result = builder.Palindrome('kayak');
        // Assert
        (0, globals_1.expect)(result.endsWith('Bonne journée')).toBe(true);
    });
    (0, globals_1.it)('should end with "Bonne soirée" during the night', () => {
        // Arrange
        globals_1.jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
        // Act
        const result = builder.Palindrome('kayak');
        // Assert
        (0, globals_1.expect)(result.endsWith('Bonne soirée')).toBe(true);
    });
});
//# sourceMappingURL=palindrome.test.js.map