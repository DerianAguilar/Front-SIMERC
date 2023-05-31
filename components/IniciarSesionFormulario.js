const IniciarSesionForm = () => {

    const vista = `
    
    <div class="contenedor">
	<div class="left">
		
	</div>
	
	
		<div class="right">
		<h5>Login </h5>
		<p>No te has registrado aun? <a href="registrarse.html">crea tu cuenta</a> lo realizaras en pocos minutos!</p>
		<div class="inputs">
			<input type="text" placeholder="Usuario" id="usuario">
			<br>
			<input type="password" placeholder="Contraseña" id="contraseña">
			<br>
			<input type="text" placeholder="Rol" id="rol">
		</div>
		
			
			<br><br>
			
		<div class="recordar">
			
	<label>
		<input type="checkbox" name="item" checked/>
		<span class="text-checkbox">Recordar</span>
	</label>
			<p><a href="#">¿Olvidaste la contraseña?</a></p>
		</div>
			
			<br>
			<button class="buttom" onclick="

				var user = document.getElementById('usuario').value;
				var con = document.getElementById('contraseña').value;
				var rol = document.getElementById('rol').value;

				var data = {
					'email': user,
					'password': con,
					'rol': rol
				}

				fetch('http://localhost:8080/login', {
          	method: 'POST',
          	headers: {
            	'Content-Type': 'application/json'
          	},
          	body: JSON.stringify(data)
        	}).then(response => response.json())
          	.then(respuesta => {
            // Hacer algo con la respuesta recibida
            localStorage.setItem('token', respuesta.token)

            if(localStorage.getItem('token') != null){
              window.alert('Inicio de sesion exitoso')
            }
            // Mostrar el objeto JSON en el DOM
          	})
          	.catch(error => {
            console.error('Error:', error);
          	});

			let token = 'Bearer '+localStorage.getItem('token');

			  fetch('http://localhost:8080/actual-usuario', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				  'Authorization': token
				},
				body: JSON.stringify(data)
			  }).then(response => response.json())
				.then(respuesta => {
			  // Hacer algo con la respuesta recibida

				localStorage.setItem('email', respuesta.email);
			  	console.log(respuesta);

				
  
			  // Mostrar el objeto JSON en el DOM
				})
				.catch(error => {
			  console.error('Error:', error);
				});
			
			">Ingresar</button>
	</div>
	
</div>

    `

    return vista
}

export {IniciarSesionForm}