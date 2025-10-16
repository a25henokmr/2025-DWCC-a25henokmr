function axendarReunion(horaInicioReunionString, duracionEnMinutos) {
  let [horaInicioReunion, minutoInicioReunion] =
    horaInicioReunionString.split(':');
  let [horaInicioXornada, minutoInicioXornada] = inicioXornada.split(':');
  let [horaFinXornada, minutoFinXornada] = finalXornada.split(':');

  let inicioXornadaEnMinutos =
    Number(horaInicioXornada) * 60 + Number(minutoInicioXornada);

  let finXornadaEnMinutos =
    Number(horaFinXornada) * 60 + Number(minutoFinXornada);
  let inicioReunionEnMinutos =
    Number(horaInicioReunion) * 60 + Number(minutoInicioReunion);
  let finReunionEnMinutos = inicioReunionEnMinutos + duracionEnMinutos;

  if (inicioReunionEnMinutos < inicioXornadaEnMinutos) return false;
  else if (finXornadaEnMinutos < finReunionEnMinutos) return false;
  else return true;
}

console.log(
  axendarReunion('7:00', 15) == true,
  'Fallo comprobando axendarReunión("7:00",15) == false'
);
