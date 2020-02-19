function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero = prompt("ingrese un número ");
		numero=parseInt(numero);

		if (numero>0)
		{
			positivo=positivo+numero;
		} else 
		{
			negativo=negativo*numero;
		}

		contador=contador+1;
		respuesta=prompt("desea continuar?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN