function buscarAlumn() {
  var txtBuscar = document.getElementById("txtBuscar").value;

  let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/usuario/buscar-alumno/" + txtBuscar, {
    headers: {
      Authorization: token,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (Array.isArray(data) && data.length === 0) {
        var tbody = document.querySelector("#tablaAlumn tbody");

        tbody.innerHTML = "<h5> No se encontro el usuario </h5>";
      } else {
        console.log(data);
        var tbody = document.querySelector("#tablaAlumn tbody");

        tbody.innerHTML = "";

        data.forEach(function (dato) {
          var fila = document.createElement("tr");
          fila.innerHTML = `<td>${dato.documento}</td>
                        <td>${dato.nombre}</td>
                        <td>${dato.correo}</td>
                        <td>${dato.carrera}</td>`;

          tbody.appendChild(fila);
        });
        clic();
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

function clic() {
  var tabla = document.getElementById("tablaAlumn");
  var filas = tabla.getElementsByTagName("tr");
  var campoInput = document.getElementById("emailCorreo");

  // Agregar evento de clic a cada fila (excepto la fila de encabezado)
  for (var i = 1; i < filas.length; i++) {
    filas[i].addEventListener("click", function () {
      var datosFila = this.getElementsByTagName("td");
      var datoSeleccionado = datosFila[2].textContent;

      // Actualizar el valor del campo de entrada
      campoInput.value = datoSeleccionado;
    });
  }
}

function enviarCorreo() {

    var email = document.getElementById('emailCorreo').value;
    var asunto = document.getElementById('asunto').value;
    var desc = document.getElementById('desc').value;

    var data = {
        "email": email,
        "asunto": asunto,
        "descripcion": desc,
        "correo" : localStorage.getItem('email')
    }


  let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/correo/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respuesta) => {
        console.log(respuesta);
      alert("Correo Enviado");

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
