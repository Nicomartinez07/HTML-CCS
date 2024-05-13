const palabras = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

const palabra = "pepito";

// buscar longitud de word (numero ) que seria el indice indexof

function buscaPalabras(words, word) {
  //codigo
  const indice = words.indexOf(word);
  const masLargos = words.filter(function (word) {
    return word.length > indice;
  });
  return masLargos;
}

console.log(buscaPalabras(palabras, palabra));
