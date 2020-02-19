function mostrar()
{
	var numero;

	numero = prompt("ingrese un número entre 0 y 9.");

	//var valorDeVerdad=isNaN(numero); como funciona
	while(isNaN(numero) || numero<0 || numero>9)
	{
		console.log("Numero erroneo");
		numero = prompt("ingrese un número entre 0 y 9.");
		

	}
	document.getElementById('Numero').value=numero;
	console.log("numero correcto");


}//FIN DE LA FUNCIÓN