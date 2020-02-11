function mostrar()
{  
	var edad;
	var estado;
	document.getElementById("estadoCivil").value=estado;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<18 && estado!="Soltero"
		)
		{
			alert("es muy pequeño para No ser soltero");
		}

//tomo la edad  

	


}//FIN DE LA FUNCIÓN