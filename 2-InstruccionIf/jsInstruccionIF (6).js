function mostrar()
{
var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
   	
   	if (edad>17) 
    {
    	alert("es mayor de edad");
	}
		
		 if (edad<13) 
		{
			alert("Es un niño");
		} 


			else
			{
				alert("Es un adolescente");
			}



}//FIN DE LA FUNCIÓN