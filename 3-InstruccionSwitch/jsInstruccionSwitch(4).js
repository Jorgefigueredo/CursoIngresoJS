function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
	{
	 	case "Febrero":
	 		console.log("Tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		
			console.log("Tiene 30 dias");
			break;
		
		default:
		
			console.log("Tiene 31 dias");
			break;
		
	}


	
	



}//FIN DE LA FUNCIÓN