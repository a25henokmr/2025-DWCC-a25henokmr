let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';

function validarDni(dni) {
  if (dni.lenght < 9) {
    return false;
  }
  let letra = dni.slice(-1);
  let numeroDNI = dni.slice(0, -1);
  let resto = numeroDNI % 23;

  if (letra === letrasDNI[resto]) return true;
  else return false;
}

console.log(validarDni('12345678w'));
