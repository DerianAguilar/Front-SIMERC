var tabla = document.getElementById('tablaAlumn');
var filas = tabla.getElementsByTagName('tr');
var campoInput = document.getElementById('email');

// Agregar evento de clic a cada fila (excepto la fila de encabezado)
for (var i = 1; i < filas.length; i++) {
  filas[i].addEventListener('click', function() {
    var datosFila = this.getElementsByTagName('td');
    var datoSeleccionado = datosFila[2].textContent; // Obtener el dato de la segunda celda

    // Actualizar el valor del campo de entrada
    campoInput.value = datoSeleccionado;
  });
}