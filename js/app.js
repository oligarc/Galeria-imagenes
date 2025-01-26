// Seleccionar el contenedor de la galería
const gallery = document.querySelector(".gallery");

// Lista de imágenes con sus descripciones y tamaños personalizados
const images = [
  { filename: "1", description: "Salchichinha curioso", size: "extra-large" },
  {
    filename: "2",
    description: "Salchichinha asustado",
    size: "between-large-and-xl",
  },
  {
    filename: "3",
    description: "Salchichinha cabreado",
    size: "between-large-and-xl",
  },
  { filename: "4", description: "Salchichinha elegante", size: "large" },
  { filename: "5", description: "Salchichinha saltando", size: "large" },
  {
    filename: "6",
    description: "Salchichinha tomando sol",
    size: "extra-large",
  },
  { filename: "7", description: "Salchichina falso", size: "large" },
  { filename: "8", description: "Doble salchichinha", size: "medium" },
  { filename: "9", description: "Salchichina tumbado", size: "large" },
];

// Generar dinámicamente las imágenes con srcset
images.forEach((img) => {
  const picture = document.createElement("picture");

  // Agregar las versiones optimizadas
  picture.innerHTML = `
    <source srcset="../output-adv/${img.filename}-small-1x..jpg 1x, ../output-adv/${img.filename}-small-2x..jpg 2x" media="(max-width: 480px)">
    <source srcset="../output-adv/${img.filename}-medium-1x..jpg 1x, ../output-adv/${img.filename}-medium-2x..jpg 2x" media="(max-width: 768px)">
    <source srcset="../output-adv/${img.filename}-large-1x..jpg 1x, ../output-adv/${img.filename}-large-2x..jpg 2x" media="(max-width: 1200px)">
    <img 
      src="../output-adv/${img.filename}-large-1x..jpg" 
      alt="${img.description}" 
      loading="lazy">
  `;

  // Crear el contenedor de la imagen
  const figure = document.createElement("figure");

  // Agregar la clase de tamaño correspondiente
  figure.classList.add(img.size);

  const caption = document.createElement("figcaption");
  caption.textContent = img.description;

  figure.appendChild(picture);
  figure.appendChild(caption);

  // Añadir a la galería
  gallery.appendChild(figure);
});
