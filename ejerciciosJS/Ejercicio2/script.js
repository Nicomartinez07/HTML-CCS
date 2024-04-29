//SIEMPRE las funciones deben poseer un valor de retorno

function numero1() {
  const number1 = document.getElementById("number1").value;
  return parseInt(number1);
}

function numero2() {
  const number2 = document.getElementById("number2").value;
  return parseInt(number2);
}

function sumarNumeros() {
  let resultado = numero1() + numero2(); //Para ejecutar una funcion al final hay q poner los ()
  document.getElementById("number").textContent = resultado;
}
