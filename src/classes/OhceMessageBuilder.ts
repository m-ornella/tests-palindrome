import { messages } from "../languages/messages";
import { SupportedLanguage } from "../types/SupportedLanguage";

export class OhceMessageBuilder {
    
  private lang: SupportedLanguage;
  private parts: string[] = [];

  constructor(lang: SupportedLanguage = 'fr') {
    this.lang = lang;
  }

  withGreeting(): this {
    this.parts.push(messages[this.lang].greeting());
    return this;
  }

  withReversedWord(word: string): this {
    this.parts.push(word.split('').reverse().join(''));
    return this;
  }

  withPalindromeStatus(word: string): this {
    const sanitized = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = sanitized.split('').reverse().join('');
    const isPalindrome = sanitized === reversed;
    this.parts.push(isPalindrome ? messages[this.lang].palindrome : messages[this.lang].notPalindrome);
    return this;
  }

  withFarewell(): this {
    this.parts.push(messages[this.lang].farewell());
    return this;
  }

  build(): string {
    return this.parts.join('\n');
  }

    Palindrome(input: string): string {
    return this
      .withGreeting()
      .withReversedWord(input)
      .withPalindromeStatus(input)
      .withFarewell()
      .build();
  }
}