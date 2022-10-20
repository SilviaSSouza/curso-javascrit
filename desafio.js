const precoCombustivel= 4.80;
const kmPorLitros = 11;
const distanciaEmKm = 60;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2))

