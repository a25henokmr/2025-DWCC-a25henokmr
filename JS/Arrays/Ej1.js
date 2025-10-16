const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

function indices(elemento, arrayElementos) {
  const indexes = [];
  let idx = arrayElementos.indexOf(elemento);
  while (idx !== -1) {
    indexes.push(idx);
    idx = arrayElementos.indexOf(elemento, idx + 1);
  }
  return indexes;
}
