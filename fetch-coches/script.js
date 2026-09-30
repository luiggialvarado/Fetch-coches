fetch("http://localhost:8080/coches")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    var texto = "";

    for (var i = 0; i < datos.length; i++) {
      var nombreMarca = "Sin marca";

      if (datos[i].marca !== null) {
        nombreMarca = datos[i].marca.nombre;
      }

      texto = texto + "<div class='tarjeta'>";
      texto = texto + "<h3>" + nombreMarca + " " + datos[i].modelo + "</h3>";
      texto = texto + "<p>Año: " + datos[i].anio + "</p>";
      texto = texto + "<p>Precio: " + datos[i].precio.toFixed(2) + " €</p>";
      texto = texto + "</div>";
    }

    document.getElementById("listado").innerHTML = texto;
  })

  .catch(function (error) {
    document.getElementById("listado").textContent =
      "no se han podido cargar los datos";
    console.log(error);
  });
