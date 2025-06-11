import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import Ohce from '../classes/Ohce';

describe('Palindrome()', () => {
  let ohce: Ohce;

  beforeEach(() => {
    ohce = new Ohce();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return full response with "bien dit!" for a palindrome during the day', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    const result = ohce.Palindrome('kayak');
    expect(result).toContain('Bonjour');
    expect(result).toContain('kayak');
    expect(result).toContain('bien dit!');
    expect(result).toContain('Bonne journée');
  });

  it('should return full response with "pas palindrome" during the night', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22); 
    const result = ohce.Palindrome('plastique');
    expect(result).toContain('Bonsoir');
    expect(result).toContain('euqitsalp'); 
    expect(result).toContain('pas palindrome');
    expect(result).toContain('Bonne soirée');
  });

  it('should return correct reversed string and greetings for numeric palindrome', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14); 
    const result = ohce.Palindrome('12321');
    expect(result).toContain('Bonjour');
    expect(result).toContain('12321');
    expect(result).toContain('bien dit!');
    expect(result).toContain('Bonne journée');
  });

  it('should start with "Bonjour" during the day', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    const result = ohce.Palindrome('kayak');
    expect(result.startsWith('Bonjour')).toBe(true);
  });

  it('should start with "Bonsoir" during the night', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
    const result = ohce.Palindrome('kayak');
    expect(result.startsWith('Bonsoir')).toBe(true);
  });


  it('should end with "Bonne journée" during the day', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    const result = ohce.Palindrome('kayak');
    expect(result.endsWith('Bonne journée')).toBe(true);
  });

  it('should end with "Bonne soirée" during the night', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
    const result = ohce.Palindrome('kayak');
    expect(result.endsWith('Bonne soirée')).toBe(true);
  });
});
