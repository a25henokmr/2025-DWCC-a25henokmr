//Utilizando a función reduce, obtén o valor mínimo dun array de números.

const array = [2, 4, 3, 4, 5, 8, 8, 9, 2, 3];

function reducer(min, currentValue) {
  if (currentValue < min) {
    min = currentValue;
  }
  return min;
}

const res = array.reduce(reducer);

console.log(res);
