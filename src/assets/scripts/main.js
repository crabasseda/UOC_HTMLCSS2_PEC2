document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      // Si el formulario es válido, mostramos el SweetAlert
      Swal.fire({
        title: "¡Inscripción enviada!",
        text: "Gracias por inscribirte. Nos vemos en las jornadas.",
        icon: "success",
        confirmButtonText: "¡Genial!",
      });

      form.reset(); // Limpiamos el formulario
      form.classList.remove("was-validated");
    } else {
      // Si el formulario no es válido, activamos validaciones de Bootstrap
      form.classList.add("was-validated");
    }
  });
});
