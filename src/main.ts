// bonjour ou bonsoir

// Récupère l'heure actuelle
const now = new Date();
const hour = now.getHours();

if (hour >= 6 && hour < 18) {
  console.log("Bonjour !");
} else {
  console.log("Bonsoir !");
}

// inverse le mot
const word = process.argv[2];

if (!word) {
  console.log("Usage: ts-node main.ts <mot>");
  process.exit(1);
}

const reversed = word.split('').reverse().join('');
console.log(reversed);

// palindrome

if (word.toLowerCase() === reversed.toLowerCase()) {
  console.log("Bien dit !");
}

// Aurevoir en fonction du moment de la journée

function farewellMessage() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Bonne journée !";
  } else if (hour < 18) {
    return "Bon après-midi !";
  } else {
    return "Bonne soirée !";
  }
}

console.log(farewellMessage());
