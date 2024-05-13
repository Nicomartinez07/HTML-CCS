/*
// while

const array = ["Nicolas Martinez", "papas", "Hamburguesa"];

let contador = 0;

while (contador < array.length) {
  console.log(array[contador]);
  console.log(contador);
  contador++;
}

// for

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//foreach

array.forEach((element) => {
  console.log(element);
});

*/

//ejercicio con For
const lista = [1, 2, 4, 5, 5, 6, 6, 7];

function sumarParesFor(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma = suma + numeros[i];
    }
  }
  return suma;
}

//ejercicio con while
let i = 0;

function sumarParesWhile(numeros) {
  let suma = 0;
  while (i < numeros.length) {
    console.log[i];
    if (numeros[i] % 2 === 0) {
      suma = suma + numeros[i];
    }
    i++;
  }
  return suma;
}

console.log("For");
console.log(sumarParesFor(lista));
console.log("While");
console.log(sumarParesWhile(lista));
