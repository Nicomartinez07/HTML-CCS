function agregarElemento() {
  let lista = document.getElementById("lista");
  let Inp = document.getElementById("textarea");
  const button = document.createElement("button");

  const elementoLista = document.createElement("li");
  elementoLista.textContent = Inp.value;
  button.textContent = "Delete";

  lista.appendChild(elementoLista);
  elementoLista.append(button);

  elementoLista.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
