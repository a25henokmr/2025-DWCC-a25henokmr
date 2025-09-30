const radio = 5;

function area(radio) {
  let area = 2 * Math.PI * Math.pow(radio, 2);
  return area.toFixed(2);
}

function perimetro(radio) {}
console.log(area(radio));
