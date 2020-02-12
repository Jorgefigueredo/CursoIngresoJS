function mostrar()
{
	//tomo la edad  
	
	var invierno;
	var mesDelAño = document.getElementById('mes').value;

	if (mesDelAño=="Enero" || mesDelAño=="Febrero" || mesDelAño=="Marzo" || mesDelAño=="Abril" || mesDelAño=="Mayo" || mesDelAño=="Junio") 
	{
		
		invierno = "Falta";
	}
	if (mesDelAño=="Julio" || mesDelAño=="Agosto")
	{
		
		invierno = "Durante";
	} if (mesDelAño=="Septiembre" || mesDelAño=="Octubre" || mesDelAño=="Noviembre" || mesDelAño=="Diciembre") 
	{
		
		invierno = "Despues";
	}

	switch(invierno)
	{
		case 'Falta':
		{
			alert("falta para el invierno!");
			break;
		}
		case 'Durante':
		{
			alert("Abrigate hace frio!");
			break;
		}
		case 'Despues':
		{
			alert("Ya pasamos el frio, ahora calor!");
			break;
		}
	}
}//FIN DE LA FUNCIÓN