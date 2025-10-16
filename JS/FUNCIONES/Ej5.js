const minMax = (numeros) => {
  const obxecto = {};
  obxecto.min = Math.min(...numeros);
  obxecto.max = Math.max(...numeros);
  return obxecto;
};

console.log(minMax([1, 2, 3, 4, 5]));
