document.addEventListener("DOMContentLoaded", () => {
  // Contenedor de la galería
  const gallery = document.querySelector(".gallery");

  // Imágenes
  const images = [
    {
      filename: "1",
      description: "Salchichinha relajado",
      size: "extra-large",
    },
    {
      filename: "2",
      description: "Salchichinha spooky",
      size: "between-large-and-xl",
    },
    {
      filename: "3",
      description: "Salchichinha bien fresco",
      size: "between-large-and-xl",
    },
    { filename: "4", description: "Salchichinha con palo", size: "large" },
    { filename: "5", description: "Salchichinha coco", size: "large" },
    {
      filename: "6",
      description: "Salchichinha curioso",
      size: "extra-large",
    },
    { filename: "7", description: "Salchichina falso", size: "large" },
    { filename: "8", description: "Salchichinha tomando sol", size: "medium" },
    { filename: "9", description: "Salchichina tumbado", size: "large" },
  ];

  //Generar dinámicamente
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
      loading="lazy"
      class="gallery-image">
  `;

    // Contenedor imagen
    const figure = document.createElement("figure");

    // Agregar la clase para el tamaño
    figure.classList.add(img.size);

    const caption = document.createElement("figcaption");
    caption.textContent = img.description;

    figure.appendChild(picture);
    figure.appendChild(caption);

    // Añadir a la galería
    gallery.appendChild(figure);
  });

  //MODAL
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Función para cerrar el modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Añadir evento a cada imagen de la galería
  document.querySelectorAll(".gallery-image").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
