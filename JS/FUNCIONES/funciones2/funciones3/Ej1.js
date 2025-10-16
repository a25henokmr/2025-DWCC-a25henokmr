//Suma os valores da propiedade price do seguinte array de obxectos:

const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

const resultado = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  0
);

console.log(resultado);
