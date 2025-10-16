'use strict';

const television = {
  marca: 'televisores',
  unidades: 4,
  prezo: 354.99,
  importe: function () {
    const res = this.unidades * this.prezo;
    return res;
  },
};

console.log(television.importe());
