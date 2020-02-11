function mostrar()
{
	var edad;
	var estado;
	document.getElementById("estadoCivil").value=estado;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<18 && estado!="Soltero")
	{
			
	}
			if (edad>17 && estado=="Soltero")
			{
				alert("Es mayor y esta soltero");
			}
		
//tomo la edad  

	


}//FIN DE LA FUNCIÓN