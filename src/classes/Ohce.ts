class Ohce {
 public Palindrome(input: string): string {
  const greeting = this.helloGreeting();
    const reversed = this.reverseWord(input);
    
    const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedSanitized = sanitized.split('').reverse().join('');
    const palindromeMessage = sanitized === reversedSanitized ? 'bien dit!' : 'pas palindrome';

    const farewell = this.byeGreeting();

    return `${greeting}\n${reversed}\n${palindromeMessage}\n${farewell}`;
}

  private reverseWord(input: string): string {
    return input.split('').reverse().join('');
  }

  private helloGreeting(): string {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return "Bonjour";
    } else {
      return "Bonsoir";
    }
  }

  private byeGreeting(): string {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return "Bonne journée";
    } else {
      return "Bonne soirée";
    }
  }
}

export default Ohce;
