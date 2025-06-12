import { SupportedLanguage } from "../types/SupportedLanguage";

export const messages = {
  fr: {
    greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir',
    farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Bonne journée' : 'Bonne soirée',
    palindrome: 'bien dit!',
    notPalindrome: 'pas palindrome',
  },
  en: {
    greeting: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Hello' : 'Good evening',
    farewell: () => new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'Have a nice day' : 'Have a good evening',
    palindrome: 'well said!',
    notPalindrome: 'not a palindrome',
  },
} satisfies Record<SupportedLanguage, any>;