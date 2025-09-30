const min = 120;

function horasSeg(min) {
  let segundos = Math.ceil(min * 60);
  let horas = Math.floor(min / 60);
  return `${min}m son ${horas}h y ${segundos}s`;
}

console.log(horasSeg(min));
