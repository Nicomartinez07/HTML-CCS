let contador = 0;

//Siempre los nombres de las funciones siguen la nomenclatura camelCase (usar Mayus al cambiar de palabra)
function incrementar() {
  //let number = document.getElementById("number").textContent;
  contador = contador + 1;
  document.getElementById("number").textContent = contador;
}
