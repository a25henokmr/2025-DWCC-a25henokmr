const diasSemana = [
  'luns',
  'martes',
  'mercores',
  'xoves',
  'venres',
  'sabado',
  'domingo',
];

//a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.

const diasM = diasSemana.filter((diasSemana) => diasSemana.at(0) === 'm');

console.log(diasM);

//b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.

const even = (dias) => dias.at(0) == 's';

console.log(
  diasSemana.some(even)
    ? 'Si que hay algun dia que comeza por s'
    : 'Ningun dia comeza por s'
);

//c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.

const even1 = (dias) => dias.at(-1) === 's';

console.log(
  diasSemana.every(even1)
    ? 'Todos os dias acaban en s'
    : 'Non todos os dias comezan por s'
);

//d. Mostra por consola o primeiro día que empece por “m”.

const diaFirstM = diasSemana.find((dia) => dia.at(0) === 'm');

console.log(diaFirstM);

//e. Mostra por consola a posición no array do primeiro día que empeza por “m”.

const diaIndexM = diasSemana.findIndex((dia) => dia.at(0) === 'm');

console.log(diaIndexM);

//f. Crea un novo array cos días da semana en maiúsculas

const dias = diasSemana.map((dia) => dia.toUpperCase());

console.log(dias);
