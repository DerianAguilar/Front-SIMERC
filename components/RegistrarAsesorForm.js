const RegistrarAsesor = () =>{

    const vista = `
    
    <div class="contenedor">
	<div class="left2">
		
	</div>
	
	
		<div class="right">
		<h5>Registrarse</h5>
		<p>Ingresa los siguientes datos para confirmar el registro:</p>
		<div class="inputs">
            <input type="text" placeholder="Tipo Documento" id="tipo">
            <br>
            <input type="text" placeholder="Documento" id="docu">
			<br>
			<input type="text" placeholder="Nombre" id="nombre">
			<br>
            <input type="text" placeholder="Apellido" id="apellido">
			<br>
            <input type="text" placeholder="Email" id="email">
			<br>
            <input type="text" placeholder="Direccion" id="direccion">
			<br>
            <input type="text" placeholder="telefono" id="telefono">
			<br>
            <input type="text" placeholder="Password" id="pass">
			<br>
            <input type="text" placeholder="Contraseña Correo" id="passCorreo">
			<br>
            <input type="text" placeholder="Rol" id="rol">
		</div>
			
			<br><br>
			
		<div class="recordar">
			
	
			<p>Ya estas registrado?, <a href="login.html">ingresa aqui</a></p>
		</div>
			
			<br>
			<button class="buttom" onclick="
            
                var tDocument = document.querySelector('#tipo').value;
                var document = document.querySelector('#docu').value;
                var nombre = document.querySelector('#nombre').value; 
                var apellido = document.querySelector('#apellido').value;
                var email = document.querySelector('#email');
                var direccion = document.querySelector('#direccion').value;
                var telefono = document.querySelector('#telefono').value;
                var pass = document.querySelector('#pass').value;
                var passCorreo = document.querySelector('#passCorreo').value;
                var rol = document.querySelector('#rol').value;

                var data = {
                    'tipoDocumento': tDocument,
                    'documento': document,
                    'nombre': nombre,
                    'apellido': apellido,
                    'email': email,
                    'direccion': direccion,
                    'telefono': telefono,
                    'pass': pass,
                    'passwordEmail': passCorreo,
                    'rols': rol,
                    'correo': localStorage.getItem('email')
                }

                let token = 'Bearer '+localStorage.getItem('token');

			  fetch('http://localhost:8080/usuario/asesor-registrar', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				  'Authorization': token
				},
				body: JSON.stringify(data)
			  }).then(response => response.json())
				.then(respuesta => {
			  // Hacer algo con la respuesta recibida
			  	console.log(respuesta);
  
			  // Mostrar el objeto JSON en el DOM
				})
				.catch(error => {
			  console.error('Error:', error);
				});

            ">Registrarse</button>
	</div>
	
</div>

    `

    return vista
}

export {RegistrarAsesor}