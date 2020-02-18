function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseInt(laHora);

switch(laHora)
{	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		console.log("es de noche");
		break;
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		console.log("es de mañana");
		break;
	case 12:
	case 13: 
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		console.log("es de tarde");
		break;
	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
		console.log("es de noche");
		break;
	default:
		console.log("la hora no existe");
		break;

}


}//FIN DE LA FUNCIÓN