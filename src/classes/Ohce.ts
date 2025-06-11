class Ohce {
 public Palindrome(input: string): string {
    const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = sanitized.split('').reverse().join('');
    if (sanitized === reversed) {
     return 'bien dit!';
    } else {
     return 'pas palindrome';
    }
}

  public reverseWord(input: string): string {
    return input.split('').reverse().join('');
  }

  public greeting(): string {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return "Bonjour";
    } else {
      return "Bonsoir";
    }
  }

}

export default Ohce;
