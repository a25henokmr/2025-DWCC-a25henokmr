// Ejercicio a

let numAleatorio = Math.ceil(Math.random() * 3);

console.log(numAleatorio);

// Ejercicio b

let numAleatorio2 = Math.ceil(Math.random() * 3);

console.log(numAleatorio2);

// Ejercicio c

const min = 5;
const max = 10;

function valorRandomEntre(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

console.log(valorRandomEntre(min, max));
