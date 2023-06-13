function recordatorio(){
    var titulo = document.getElementById('titulo').value;
    var desc = document.getElementById('desc').value;
    var fecha = document.getElementById('fecha').value;

    

    var data = {
        titulo: titulo,
        desc: desc,
        fecha: fecha,
        email: localStorage.getItem('email')
    }

    let token = "Bearer " + localStorage.getItem("token");

  fetch("http://localhost:8080/usuario/recordatorio-save", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      alert(data.mensaje);
    })
    .catch(function (error) {
        alert("Error al guardar");
      console.log("Error:", error);
    });

}