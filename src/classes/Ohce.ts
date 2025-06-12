import { SupportedLanguage } from "../types/SupportedLanguage";
import { OhceMessageBuilder } from "./OhceMessageBuilder";

class Ohce {

  private language: SupportedLanguage;

  constructor(language: SupportedLanguage = 'fr') {
    this.language = language;
  }

  public Palindrome(input: string): string {
    const builder = new OhceMessageBuilder(this.language);

    return builder
      .withGreeting()
      .withReversedWord(input)
      .withPalindromeStatus(input)
      .withFarewell()
      .build();
  }
}

export default Ohce;

