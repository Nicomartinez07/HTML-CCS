const numeros = [5, -10, -2, -25, -7, 1];

function sortAbsoluteNumbers(numbers) {
  const array = [];

  //cambia todos los numeros a absolutos
  numbers.forEach((number) => {
    const abs = Math.abs(number);
    array.push(abs);
  });

  //ordena los numeros de menor a mayor
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

console.log(sortAbsoluteNumbers(numeros));
