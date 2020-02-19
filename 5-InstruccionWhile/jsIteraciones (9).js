function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	

	// declarar variables
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numero = prompt("ingrese un número ");
		numero=parseInt(numero);
		if (contador==1) 
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if (numero>maximo) 
			{
				maximo=numero;
			}if (numero<minimo) 
			{
				minimo=numero
			}
		}

		
		

		
		respuesta=prompt("desea continuar?");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN