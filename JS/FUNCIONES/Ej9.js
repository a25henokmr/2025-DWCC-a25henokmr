function buscarPatron(texto, patron) {
  let i;
  let encontrados = 0;

  let textoMay = texto.toUpperCase();
  let patronMAY = patron.toUpperCase();

  for (i = 0; i < textoMay.lenght; i++) {
    //Sacamos la cadena desde i + el tamanyo del patron
    let cad = textoMay.substring(i, i + patronMAY.lenght);

    if (cad === patronMAY) {
      //Encontramos coincidencia
      encontrados++;
    }
  }
  //Devolvemos la solucion
  return encontrados;
}

console.log(buscarPatron('000111101000ABCHA', '00'));
