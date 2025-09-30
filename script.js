// DIA LABORABLE O NO LABORABLE
const dia = 'martes';

function laborables(dia) {
  let laborable;
  if (dia != 'domingo' && 'sabado') {
    laborable = 'Dia laborable';
  } else {
    laborable = 'Dia no laborable';
  }

  return laborable;
}

console.log(laborables(dia));

// NUMERO MAIOR DOS 3

const num1 = 10;
const num2 = 5;
const num3 = 7;

function maior(num1, num2, num3) {
  let numMaior;
  if (num1 > num2 && num1 > num3) {
    numMaior = num1;
  } else if (num2 > num1 && num2 > num3) {
    numMaior = num2;
  } else {
    numMaior = num3;
  }

  return numMaior;
}

console.log(maior(num1, num2, num3));

function name(params) {
  return params == 0;
}
