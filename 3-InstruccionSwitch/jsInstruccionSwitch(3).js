function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		console.log("Este mes no tiene mas de 29 dias");
		break;
	default:
		console.log("Este mes tiene mas de 29 dias");
		
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN