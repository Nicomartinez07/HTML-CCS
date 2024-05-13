let los5grandes = ["boca", "river", "independiente", "racing", "estudiantes"];

let terminanConA = ["rama", "cama", "fama", "rana", "lana"];

function verificar(array) {
  // verifica si las palabras del array terminan con "A" (si una sale false, todas se vuelven false)
  let resultado = array.every((array) => array.endsWith("a"));
  return resultado;
}

console.log("Los5grandes");
console.log(verificar(los5grandes));
console.log("terminanCon");
console.log(verificar(terminanConA));
