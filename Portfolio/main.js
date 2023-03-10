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
  const filterSelect = document.querySelector('#filter-select');
  const cardsContainer = document.querySelector('.cards-container');
  
  filterSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    
    for (let card of cardsContainer.children) {
      if (selectedValue === 'all' || card.querySelector(`.${selectedValue}`)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
  
