// bonjour ou bonsoir

// reverse.ts

// Récupère l'heure actuelle
const now = new Date();
const hour = now.getHours();

if (hour >= 6 && hour < 18) {
  console.log("Bonjour !");
} else {
  console.log("Bonsoir !");
}

