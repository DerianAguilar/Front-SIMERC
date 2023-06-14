function registrar() {
  var tDocu = document.getElementById("tDocu").value;
  var documento = document.getElementById("documento").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var colegio = document.getElementById("colegio").value;
  var direccion = document.getElementById("direccion").value;
  var carrera = document.getElementById("carrera").value;
  var telefono = document.getElementById("telefono").value;
  var nacionalidad = document.getElementById("nacionalidad").value;
  var modalidad = document.getElementById("modalidad").value;
  var observaciones = document.getElementById("observaciones").value;

  var data = {
    tipoDocumento: tDocu,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    email: email,
    colegio: colegio,
    direccion: direccion,
    carrera: carrera,
    telefono: telefono,
    nacionalidad: nacionalidad,
    modalidad: modalidad,
    observaciones: observaciones,
    correo: localStorage.getItem("email"),
  };

  let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/usuario/alumno-registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respuesta) => {
      // Hacer algo con la respuesta recibida
      alert("registro exitoso");

      
      // Mostrar el objeto JSON en el DOM
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function registrarAs(){
  var tDocu = document.getElementById("tDocu").value;
  var documento = document.getElementById("documento").value;
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var pass = document.getElementById('contraseña').value;
  var passEmail = document.getElementById('conEmail').value;
  var rol = document.getElementById('rol').value;

  var data = {
    tipoDocumento: tDocu,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    email: email,
    direccion: direccion,
    telefono: telefono,
    pass: pass,
    passwordEmail: passEmail,
    rols: rol,
    correo: localStorage.getItem('email')
  };

  //let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/usuario/asesor-registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Authorization: token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respuesta) => {
      // Hacer algo con la respuesta recibida
      alert("registro exitoso");
      window.location.href="panelAdmin.html";

      
      // Mostrar el objeto JSON en el DOM
    })
    .catch((error) => {
      alert("Error registro");
      console.error("Error:", error);
    });
}
