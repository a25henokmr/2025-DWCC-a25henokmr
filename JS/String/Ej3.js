const numeros = String(1234123412347777);

function enmascarar(numeros) {
  let primeros = numeros.slice(0, -4);
  let ultimos = numeros.slice(-4);
  let nAst = primeros.length;
  let nueva = '*'.repeat(nAst);
  nueva = nueva + ultimos;
  return nueva;
}

console.log(enmascarar(numeros));
