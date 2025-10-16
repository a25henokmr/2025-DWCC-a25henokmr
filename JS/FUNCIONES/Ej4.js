function media(...numeros) {
  let total = 0;
  let numNumeros = 0;
  for (const num of numeros) {
    total += num;
    numNumeros++;
  }
  return total / numNumeros;
}

console.log(media(2, 3, 4));
