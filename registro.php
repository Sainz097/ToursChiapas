<?php
	//conexion con la base de datos y el servidor
	$link = mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");
	$db = mysql_select_db("nuevo",$link) or die("<h2>Error de Conexion</h2>");

	//obtenemos los valores del formulario
	$nombres = $_POST['nombre'];
	$apellidos = $_POST['apellidoP'];
	$email = $_POST['edad'];
	$pass = $_POST['email'];
	

	//Obtiene la longitus de un string
	$req = (strlen($nombres)*strlen($apellidos)*strlen($email)*strlen($pass)) or die("No se han llenado todos los campos");

	//se confirma la contraseña
	if ($pass != $rpass) {
		die('Las contraseñas no coinciden, Verifique <br /> <a href="index.html">Volver</a>');
	}

	//se encripta la contraseña
	$contraseñaUser = md5($pass);

	//ingresamos la informacion a la base de datos
	mysql_query("INSERT INTO fotografo VALUES('','$nombres','$apellidos','$email','$contraseñaUser')",$link) or die("<h2>Error Guardando los datos</h2>");
	echo'
		<script>
			alert("Registro Exitoso");
			location.href="index.html";
		</script>
	'


?>