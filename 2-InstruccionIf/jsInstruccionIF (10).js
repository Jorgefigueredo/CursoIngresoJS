function mostrar()
{
	var nota

	nota=Math.floor(Math.random() * 10) + 1;
	if (nota>8) 
	{
		alert("Excelente");
	}
	 else 
	 	if (nota>3) 
	{
		alert("Aprobo");
	} else 
	{
		alert("Vamos la proxima que se puede");
	}
	//Genero el número RANDOM entre 1 y 10 
	console.log(+nota);

}//FIN DE LA FUNCIÓN