import { describe, it, expect } from '@jest/globals';
import Ohce from '../classes/Ohce';

describe('Palindrome', () => {
  it('should return true for "kayak"', () => {
    const utils = new Ohce();
    expect(utils.Palindrome('kayak')).toBe(true);
  });
});