const array1 = ['Henok', 'Javi', 'Pedr', 10];

function reducer(total, x) {
  const res = total + x;
  return res;
}

const resl = array1.reduce(reducer);

console.log(resl);
