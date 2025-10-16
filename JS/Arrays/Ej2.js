const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];

let borrado = froitas.splice(1, 1);
console.log(froitas);

borrado = froitas.splice(3, 0, 'laranxa', 'sandía');

borrado = froitas.splice(1, 1, 'cereixas', 'nésperos');

console.log('As froitas son');
