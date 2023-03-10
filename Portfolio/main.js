document.addEventListener("DOMContentLoaded", function() {
  // Obtener los enlaces de la página
  var enlaceRojo = document.getElementById("color-rojo");
  var enlaceAzul = document.getElementById("color-azul");
  var enlaceOriginal = document.getElementById("color-original");

  // Obtener el cuerpo de la página
  var cuerpoPagina = document.getElementById("body");

  // Guardar el color de fondo original
  var fondoOriginal = cuerpoPagina.style.backgroundColor;

  // Agregar controladores de eventos a los enlaces
  enlaceRojo.addEventListener("click", function() {
    cuerpoPagina.style.backgroundColor = "red";
  });

  enlaceAzul.addEventListener("click", function() {
    cuerpoPagina.style.backgroundColor = "blue";
  });

  enlaceOriginal.addEventListener("click", function() {
    cuerpoPagina.style.backgroundColor = fondoOriginal;
  });
});

function filtrarCards() {
  const filtro = document.getElementById("filter-select").value;
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (filtro === "all" || card.getAttribute("data-filter") === filtro) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("filter-select").addEventListener("change", filtrarCards);

