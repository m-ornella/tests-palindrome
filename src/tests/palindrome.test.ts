import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { OhceMessageBuilder } from '../classes/OhceMessageBuilder';

describe('Palindrome()', () => {
  let builder: OhceMessageBuilder;

  beforeEach(() => {
    builder = new OhceMessageBuilder();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return full response with "bien dit!" for a palindrome during the day', () => {
    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result).toContain('Bonjour');
    expect(result).toContain('kayak');
    expect(result).toContain('bien dit!');
    expect(result).toContain('Bonne journée');
  });

  it('should return full response with "pas palindrome" during the night', () => {
    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22); 

    // Act
    const result = builder.Palindrome('plastique');

    // Assert
    expect(result).toContain('Bonsoir');
    expect(result).toContain('euqitsalp'); 
    expect(result).toContain('pas palindrome');
    expect(result).toContain('Bonne soirée');
  });

  it('should return correct reversed string and greetings for numeric palindrome', () => {

    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14);
    
    // Act
    const result = builder.Palindrome('12321');

    // Assert
    expect(result).toContain('Bonjour');
    expect(result).toContain('12321');
    expect(result).toContain('bien dit!');
    expect(result).toContain('Bonne journée');
  });

  it('should start with "Bonjour" during the day', () => {

    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    
    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result.startsWith('Bonjour')).toBe(true);
  });

  it('should start with "Bonsoir" during the night', () => {

    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result.startsWith('Bonsoir')).toBe(true);
  });


  it('should end with "Bonne journée" during the day', () => {

    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result.endsWith('Bonne journée')).toBe(true);
  });

  it('should end with "Bonne soirée" during the night', () => {

    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result.endsWith('Bonne soirée')).toBe(true);
  });
});

describe('OhceMessageBuilder language support', () => {
  let builder: OhceMessageBuilder;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return greetings and messages in English when language is set to "en"', () => {
    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    builder = new OhceMessageBuilder('en');

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result).toContain('Hello');          
    expect(result).toContain('well said!');    
    expect(result).toContain('Have a nice day'); 
  });

  it('should return greetings and messages in French when language is set to "fr"', () => {
    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    builder = new OhceMessageBuilder('fr'); 

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result).toContain('Bonjour');
    expect(result).toContain('bien dit!');
    expect(result).toContain('Bonne journée');
  });

  it('should return greetings and messages in German when language is set to "de" at night', () => {
    // Arrange
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(21);
    builder = new OhceMessageBuilder('de');

    // Act
    const result = builder.Palindrome('kayak');

    // Assert
    expect(result).toContain('Schönen Abend noch');
  });
});