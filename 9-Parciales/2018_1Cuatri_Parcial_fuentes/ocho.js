/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a La cantidad de números pares.
b La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/


function mostrar()
{
	var numero;
	var letra;
	var respuesta;
	var contador;
	var contadorNumerosPar;
	var contadorNumerosImpar;
	var cantidadDeCeros;
	var sumaDeTodosLosNumerosPositivos;
	var contadorDeTodosLosNumerosPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaximo;
	var letraMinimo;

	respuesta="si";
	contador=0;
	contadorNumerosImpar=0;
	contadorNumerosPar=0;
	cantidadDeCeros=0;
	sumaDeTodosLosNumerosPositivos=0;
	contadorDeTodosLosNumerosPositivos=0;
	sumaNegativos=0;
	numeroMaximo=0;
	numeroMinimo=0;

	while(respuesta=="si")
	{	
		do
		{
			letra=prompt("Ingrese una letra");
		}
		while(!isNaN(letra));

		do
		{
			numero=prompt("Ingrese un numero");
		}
		while(isNaN(numero)||numero<-100 ||numero>100);

		if (numero%2==0) 
		{
			contadorNumerosPar++;
		}else
		{
			contadorNumerosImpar++;
		}

		if (numero==0) 
		{
			cantidadDeCeros++;
		}

		if (numero>0) 
		{
			contadorDeTodosLosNumerosPositivos++;
			sumaDeTodosLosNumerosPositivos=sumaDeTodosLosNumerosPositivos+numero;
		}
		
		if (numero<0) 
		{
			sumaNegativos=sumaNegativos+numero;
		}


		if (contador==0||numero>numeroMaximo) 
		{
			numeroMaximo=numero;
			letraMaximo=letra;
		}

		if (contador==0||numero<numeroMinimo) 
		{
			numeroMinimo=numero;
			letraMinimo=letra;
		}




		contador++;
		respuesta=prompt("Si desea continuar ingrensado datos escibra si");
	}

	promedioPositivos=sumaDeTodosLosNumerosPositivos/contadorDeTodosLosNumerosPositivos;

		document.write("<br>La cantidad de numeros pares es:  "+contadorNumerosPar);
		document.write("<br>La cantidad de numeros impares es:   "+contadorNumerosImpar);
		document.write("<br>La cantidad de ceros es:  "+cantidadDeCeros);
		document.write("<br>El promedio de todos los numeros positivos ingresados es:   "+promedioPositivos);
		document.write("<br>La suma de todos los numeros negativos es:  "+sumaNegativos);
		document.write("<br>El numero y letra del minimo son:  "+numeroMinimo+ " "+letraMinimo);
		document.write("<br>El numero y letra del maximo son:  "+numeroMaximo+" "+letraMaximo)


	}


	/*
La cantidad de numeros pares es: 4
La cantidad de numeros impares es: 0
La cantidad de ceros es: 2
El promedio de todos los numeros positivos ingresados es: 20
La suma de todos los numeros negativos es: 0-50
El numero y letra del minimo son: -50d
El numero y letra del maximo son: 20g*/