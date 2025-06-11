class Ohce {
  public Palindrome(input: string): boolean {
    const sanitized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = sanitized.split('').reverse().join('');
    return sanitized === reversed;
  }
}

export default Ohce;
