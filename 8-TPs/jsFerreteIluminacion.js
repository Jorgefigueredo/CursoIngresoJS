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
 	var cantLamparas;
 	var marca;
 	var impuesto;
 	var precioBruto
 	var descento
 
	marca=document.getElementById("Marca").value;
 	cantLamparas=document.getElementById('Cantidad').value;
 	precioBruto=cantLamparas*35;
 	impuesto=0
 	
 	
 	if (cantLamparas>5)
 	{
 		impuesto=50;
 	}
 	else
 		{
 		if(cantLamparas==5)
 			{if (marca=="ArgentinaLuz") 
 			{
 			impuesto=40;
 			}
 			else
 			{
 			impuesto=30;
 			}

 	}else
 		{
 			if(cantLamparas==4)
 			{if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
 		{
 			impuesto=25;
 		}
 		else
 		{
 			impuesto=20;
 		}

 	}else
 		{
 		if(cantLamparas==3)
 				{
 		if (marca=="ArgentinaLuz") 
 		{
 			impuesto=15;
 		}
 		else
 		if (marca=="FelipeLamparas") 
 		{
 			impuesto=10;
 		}
		else
 		{
 			impuesto=5;
 		}

 	}else
 	{

 	}

 	
       precioBruto=precioBruto-precioBruto*impuesto/100;
 	if (precioBruto>120) 
 			{
 				impuesto=10;
				precioBruto=precioBruto+precioBruto*impuesto/100;
 				console.log("Usted pago $"+impuesto+" de IIBB.");
 			}
 		document.getElementById("precioDescuento").value=precioLamparas;
}