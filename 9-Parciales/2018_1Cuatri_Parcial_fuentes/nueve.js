
/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/
function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var cantidadDeTemperaturaPares;
	var marcaProductoMasPesado;
	var pesoMasPesado;
	var cantidadDeProductosMenos0Grados;
	var totalPesoTodosLosProductos;
	var promedioDelPeso;
	var contadorDePeso;
	var contador;
	var pesoMaximo;
	var pesoMinimo;


	respuesta="si";
	cantidadDeTemperaturaPares=0;
	pesoMasPesado=0;
	cantidadDeProductosMenos0Grados=0;
	contadorDePeso=0;
	totalPesoTodosLosProductos=0;
	contador=0;	
	pesoMaximo=0;
	pesoMinimo=0;
	

	while(respuesta=="si")
	{
		do
		{
			marca=prompt("ingrese marca");
		}
		while(!isNaN(marca));

		do
		{
			peso=prompt("ingrese peso");
			peso=parseInt(peso);

		}
		while(isNaN(peso)|| peso<1 || peso>100);

		do
		{
			temperatura=prompt("ingrese temperatura");
			temperatura=parseInt(temperatura);
		}
		while(isNaN(temperatura)||temperatura<-30 && temperatura>30);

		if (temperatura%2==0) 
		{
			cantidadDeTemperaturaPares=cantidadDeTemperaturaPares+1;
		}

		if (peso>pesoMasPesado) 
		{	
			pesoMasPesado=peso;
			marcaProductoMasPesado=marca;
		}

		if (temperatura<0) 
		{
			cantidadDeProductosMenos0Grados++;
		}


		if (contador==0 || peso>pesoMaximo)
		{
			pesoMaximo=peso;
		}
		if (contador==0 || peso<pesoMinimo) 
		{
			pesoMinimo=peso;
		}

		totalPesoTodosLosProductos=totalPesoTodosLosProductos+peso;
		contadorDePeso++;
		contador++;



		


		







		respuesta=prompt("Escriba si si desea continuar");
	}
		promedioDelPeso=totalPesoTodosLosProductos/contadorDePeso;
		document.write("<br>La marca del producto mas pesado es:  "+marcaProductoMasPesado);
		document.write("<br>La cantidad de temperaturas pares es:   "+cantidadDeTemperaturaPares);
		document.write("<br>La cantidad de productos que se conservan a -0grados son:   "+cantidadDeProductosMenos0Grados);
		document.write("<br>El peso maximo es:  "+pesoMaximo);
		document.write("<br>El peso minimo es:  "+pesoMinimo);
}
