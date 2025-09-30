const actual = new Date('September 30, 2025 23:00:00');
const dia = actual.getDay();
let letraDia = '';
switch (dia) {
  case 1:
    letraDia = 'Lunes';
    break;
  case 2:
    letraDia = 'Martes';
    break;
  case 3:
    letraDia = 'Miercoles';
    break;
  case 4:
    letraDia = 'Jueves';
    break;
  case 5:
    letraDia = 'Viernes';
    break;
  case 6:
    letraDia = 'Sabado';
    break;
  case 7:
    letraDia = 'Domingo';
    break;
}

console.log(letraDia);
