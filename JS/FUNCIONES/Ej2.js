const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = (arrayEntrada) => {
  const arraySalida = [];
  for (const val of arrayEntrada) {
    if (val % 2 !== 0) {
      arraySalida.push(val);
    }
  }

  return arraySalida;
};

console.log(numerosImpares(arrayEntrada));
