import { describe, it, expect } from '@jest/globals';
import Ohce from '../classes/Ohce';

describe('Palindrome', () => {
  it('should return true for "kayak"', () => {
    const utils = new Ohce();
    expect(utils.Palindrome('kayak')).toBe(true);
  });
});

describe('nest pas un Palindrome', () => {
  it('should return false for "plastique"', () => {
    const utils = new Ohce();
    expect(utils.Palindrome('plastique')).toBe(false);
  });
});


describe('reversed word', () => {
  const ohce = new Ohce();

  test('reverseWord should return the reversed input string', () => {
    expect(ohce.reverseWord('hello')).toBe('olleh');
    expect(ohce.reverseWord('palindrome')).toBe('emordnilap');
    expect(ohce.reverseWord('12345')).toBe('54321');
  });
});


describe('bonjour', () => {
  let ohce: Ohce;

  beforeEach(() => {
    ohce = new Ohce();
  });

  it('should say Bonjour during the day', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    expect(ohce.greeting()).toBe('Bonjour');
  });

  it('should say Bonsoir during the night', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);
    expect(ohce.greeting()).toBe('Bonsoir');
  });
});