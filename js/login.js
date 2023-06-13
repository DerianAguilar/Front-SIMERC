function iniciosesion() {
  var user = document.getElementById("usuario").value;
  var con = document.getElementById("contraseña").value;
  var rol = document.getElementById("rol").value;

  var data = {
    email: user,
    password: con,
    rol: rol,
  };

  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((respuesta) => {
      // Hacer algo con la respuesta recibida
      localStorage.setItem("token", respuesta.token);

      // Mostrar el objeto JSON en el DOM
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/actual-usuario", {
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

      localStorage.setItem("email", respuesta.email);
      localStorage.setItem("rol", respuesta.rol.rolNombre);
      console.log(respuesta);
      if(respuesta.rol.rolNombre == 'ADMIN'){
        window.location.href = "panelAdmin.html";
      }else{
        window.location.href = "panelUser.html";
      }
      // Mostrar el objeto JSON en el DOM
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
