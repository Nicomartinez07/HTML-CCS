// metodo push
/*
const frutas = ["banana", "frutilla"];
const nuevaFruta = ["pera"];

console.log(frutas);
frutas.push(nuevaFruta);
console.log(frutas);
frutas.pop();
console.log(frutas);

// metodo shift

const frutaEliminada = frutas.shift();
console.log(frutaEliminada);
console.log(frutas);

const frutaAgregada = frutas.unshift()
console.log
*/

const array = ["Nicolas Martinez", "papas", "Hamburguesa"];

function procesarPedido(pedidos) {
  // codigo
  const nombre = pedidos.shift();
  pedidos.unshift("fanta");
  pedidos.push(nombre);
  return pedidos;
}

console.log(procesarPedido(array));
