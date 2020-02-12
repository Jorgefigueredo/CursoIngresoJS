function mostrar()
{
	//tomo la edad	
	var mesDelAño = document.getElementById('mes').value;
	 
	switch(mesDelAño)
	{
	 	case "Enero":
	 	{
	 		console.log("Que comiences bien el año!!");
	 		break;
		}
		case "Marzo":
		{
			console.log("A clases");
			break;
		}
		case "Julio":
		{
			console.log("Se vienen las vacaciones");
			break;
		}
		case "Diciembre":
		{
			console.log("Felices Fiestas");
			break;
		}
	}
}//FIN DE LA FUNCIÓN