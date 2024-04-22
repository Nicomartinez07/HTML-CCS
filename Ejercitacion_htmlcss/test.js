document.addEventListener("DOMContentLoaded", function () {
  var images = [
    {
      link: "pokemones-fotos/pikachu.webp", 
      classColor: "pikachu",
      alt: ""
    },
    {
      link: "pokemones-fotos/Charmander.webp", 
      classColor: "charmander",
      alt: ""
    },
    {
      link: "pokemones-fotos/Eevee.webp", 
      classColor: "eevee",
      alt: ""
    },
    {
      link: "pokemones-fotos/Sylveon.webp", 
      classColor: "sylveon",
      alt: ""
    },
    {
      link: "pokemones-fotos/Cresselia.webp", 
      classColor: "cresselia",
      alt: ""
    },
    {
      link: "pokemones-fotos/Butterfree.webp", 
      classColor: "butterfree",
      alt: ""
    },
    {
      link: "pokemones-fotos/Snorlax.webp", 
      classColor: "snorlax",
      alt: ""
    },
    {
      link: "pokemones-fotos/Lapras.webp", 
      classColor: "lapras",
      alt: ""
    },
    {
      link: "pokemones-fotos/Oshawott.webp", 
      classColor: "oshawott",
      alt: ""
    },
  ];

  var gridContainer = document.getElementById("grid-container");

  for (var i = 0; i < 9; i++) {
    var gridItem = document.createElement("div");
    gridItem.classList.add(`alineamientoFoto ${images[i].classColor}`);
    var h1 = document.createElement("h1")
    gridItem.classList.add('centrado');
    var image = document.createElement("img");
    image.src = images[i];
    image.classList.add("fotoDinamica")
    image.alt.add("fotoGrilla")
    var h3 = document.createElement("h3")
    gridItem.classList.add('centrado');
    gridItem.appendChild(image);
    gridContainer.appendChild(gridItem);
  }
});
