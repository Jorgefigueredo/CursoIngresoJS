/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioLamparas;
 	var cantLamparas;
 	var marca;
 	var impuesto;

 	
 	marca=document.getElementById("Marca").value;
 	cantLamparas=document.getElementById('Cantidad').value;
 	precioLamparas=parseInt(precioLamparas);
 	precioLamparas=35
 	
 	if (cantLamparas>5)
 	{
 		precioLamparas=cantLamparas*precioLamparas;
 		precioLamparas=precioLamparas-precioLamparas*50/100;
 		if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 		document.getElementById("precioDescuento").value=precioLamparas;
 	}//fin cantidad >5
 	if (cantLamparas==5)
 	{
 		if (marca=="ArgentinaLuz") 
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*40/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}
 		else
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*30/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}

 	}// fin cantidad ==5
 	if (cantLamparas==4)
 	{
 		if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*25/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}
 		else
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*20/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}


 	}// fin cantidad == 4
 	if (cantLamparas==3)
 	{
 		if (marca=="ArgentinaLuz") 
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*15/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}
 		if (marca=="FelipeLamparas") 
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*10/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}

 		if (marca!="ArgentinaLuz" && marca!="FelipeLamparas")
 		{
 			precioLamparas=cantLamparas*precioLamparas;
 			precioLamparas=precioLamparas-precioLamparas*5/100;
 			if (precioLamparas>120) 
 			{
 				impuesto=precioLamparas*10/100;
				precioLamparas=precioLamparas+precioLamparas*10/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 			document.getElementById("precioDescuento").value=precioLamparas;
 		}
 	}
 	
}