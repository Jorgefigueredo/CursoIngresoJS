/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/
function mostrar()
{
  var nombre;
  var edad;
  var sexo;
  var notaFinal;
  var respuesta;
  var cantidadVarones;
  var sumaNotasMenores;
  var sumaNotasAdolescentes;
  var sumaNotasMayores;
  var contadorMenores;
  var contadorMayores;
  var contadorAdolescentes;
  var promedioMayores;
  var promedioMenores;
  var promedioAdolescente
  var acumuladorSexoMasculino;
  var acumuladorSexoFemenino;
  var notaTotalFemenino;
  var notaTotalMasculino;
  var promedioNotasMasculino;
  var promedioNotasFemenino;


  respuesta="s";
  cantidadVarones=0;
  contadorMenores=0;
  contadorMayores=0;
  acumuladorSexoMasculino=0;
  acumuladorSexoFemenino=0;
  sumaNotasMenores=0;
  sumaNotasAdolescentes=0;
  sumaNotasMayores=0;

  while(respuesta=="s")
  {
  	nombre=prompt("ingrese nombre");

  	do
  	{
  	 edad=prompt("ingrese edad");
  	 edad=parseInt(edad);
  	}
  	while(isNaN(edad) || edad<0 || edad>100);

  	do
  	{
  		sexo=prompt("ingrese f para femenino o m para masculino");
  	}
  	while(!isNaN(sexo) || sexo!="f" && sexo!="m");

  	do
  	{
  		notaFinal=prompt("ingrese nota final");
  		notaFinal=parseInt(notaFinal);
  	}
  	while(isNaN(notaFinal) || notaFinal<1);

  	if (sexo=="m" && notaFinal>7) 
  	{
  		cantidadVarones++;
  	}

  	if (edad<13) 
  	{
  		sumaNotasMenores=sumaNotasMenores+notaFinal;
  		contadorMenores++;
  	}else
  		if (edad>17) 
  		{
  			sumaNotasMayores=sumaNotasMenores+notaFinal;
  			contadorMayores++;
  			
  		}else
  		{
  			sumaNotasAdolescentes=sumaNotasAdolescentes+notaFinal;
  			contadorAdolescentes++;
  			
  		}
  	if(sexo=="f")
  	{
  		acumuladorSexoFemenino++;
  		notaTotalFemenino=notaFinal+notaTotalFemenino;
	}else
	{
		acumuladorSexoMasculino++;
		notaTotalMasculino=notaFinal+notaTotalMasculino;
	}

     respuesta=prompt("escriba s si desea continuar");
  }

  promedioAdolescente=sumaNotasAdolescentes/contadorAdolescentes;
  promedioMenores=sumaNotasMenores/contadorMenores;
  promedioMayores=sumaNotasMayores/contadorMayores;
  promedioNotasFemenino=notaTotalMasculino/acumuladorSexoMasculino;
  promedioNotasMasculino=notaTotalMasculino/acumuladorSexoMasculino;


  	document.write("<br> los varones aprobados son:  "+cantidadVarones);
  	document.write("<br> el promedio de las notas de los adolescentes es:  "+promedioAdolescente);
  	document.write("<br> el promedio de las notas de los mayores es "+promedioMayores);
  	document.write("<br> el promedio de las notas  de los menores es: "+promedioMenores);
  	document.write("<br> el promedio de las notas del sexo femenino es:  "+promedioNotasFemenino);
  	document.write("<br>l promedio de las notas del sexo masculino es: "+promedioNotasMasculino);

}
