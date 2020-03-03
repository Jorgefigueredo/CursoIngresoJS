/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{  
	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfete;
	var formaDePagoMasUtilizado;

	respuesta="s";
	contador=0;
	acumulador=0;
	contadorEfete=0;
	contadorTarjeta=0;
	contadorQR=0;


	while(respuesta == "s")
	{
		nombre=prompt("ingrese nombre ");

		
		do
		{
			cantidadDePersonas=prompt("ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}
		while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);


		do
		{
			cantidadDeDias=prompt("ingrese cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);

		}
		while(isNaN(cantidadDeDias) || cantidadDeDias<1);

		do
		{
			formaDePago=prompt("ingrese forma de pago");
		}
		while(!isNaN(formaDePago) || formaDePago!="QR" && formaDePago!="efectivo" && formaDePago!="tarjeta");

		console.log("personas:  "+cantidadDePersonas);
		console.log("dias:  "+cantidadDeDias);
		console.log("forma de pago:  "+formaDePago);


		if(contador==0 || maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombre;
		}
		if(contador==0 || maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}
		switch(formaDePago)
		{
			case "efectivo":
				contadorEfete++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++;
				break;
		}


		acumulador=acumulador+cantidadDeDias;
		contador++;
		respuesta = prompt("desea continuar");
	}//termina el while

	if(contadorEfete>contadorTarjeta && contadorEfete>contadorQR)
	{
			formaDePagoMasUtilizado="efete";
	}else
	{
		if (contadorQR>contadorTarjeta) 
		{
			formaDePagoMasUtilizado="QR";
		}else
		{
			formaDePagoMasUtilizado="tarjeta";
		}
	}
	promedio=acumulador/contador;
	console.log(maximoDePersonasNombre);
	console.log(maximoDeDiasCantidadDePersonas);
	console.log(formaDePagoMasUtilizado);
	

	document.write("<br> nombre del huesped con mas invitados:  "+maximoDePersonasNombre);
	document.write("<br> la cantidad:  "+maximoDeDiasCantidadDePersonas);
	document.write("<br> Forma de pago mas utilizado:  "+formaDePagoMasUtilizado);
	document.write("<br> promedio:  "+promedio);







	
}
