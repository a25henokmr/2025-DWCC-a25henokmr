const sum = (...numeros) => {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
};

console.log(sum(2, 4, 5));
