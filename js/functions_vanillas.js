window.onload=function(){
	var palabras=["casa","coche","seo","sem","xx"]; //array de palabras
	//console.log(palabras);
	var random_number=Math.floor(Math.random()*palabras.length); //genera un numero aleatorio que nuca supera el numerode elementos del array de palabras
	//console.log(random_number);
	var palabra_activa=palabras[random_number].split(""); //asignamos una palabra al azar para comenzar a jugar y la tokenizamos para poder comparar
	console.log(palabra_activa);
	var contenedor=document.getElementsByTagName("div")[0]; //capturamos el espacio donde se mostraran las casillas
	//console.log(contenedor);
	for (var i=0;i<palabra_activa.length;i++){
		//console.log("hola "+[i]);
		casillas=document.createElement("p"); //creamos un p por cada letra de la palabra seleccionada 
		casillas.className="clase"+[i]; //le ponemos una clase diferente a cada p
		casillas.innerHTML="--"; //los rellenamos con un guión para ver el número de letras
		contenedor.appendChild(casillas); //Añadimos los p's creados al div
	}

	var almacenletras =[]; //en este array iremos alamcenando las letras qu se vayan metiendo
	var entradaletra=document.getElementById("entradaformulario"); //capturo la entrada del formulario
	var envioletra=document.getElementById("envioformulario");
		console.log(entradaletra.value);
		//console.log(envioletra);
	entradaletra.onsubmit=function(){
		console.log("hola");
	}
		
		
	/*

	for (var i=0;i<10;i++){
		(function(indice){
		entradaletra.onsubmit=function(e){
			e.preventDefault();	
			almacenletras=letra.value.split(""); //tokenizamos cada letra que se mete para poder compararlas luego
			console.log(entradaletra.value);
			consolelog(letra.value);
			//console.log(almacenletras);
			for(k=0;k<palabra_activa.length;k++){

				if(entradaletra.value==palabra_activa[k]){
					console.log("Acertaste letra");
				}
			}
		}
	})(i);
	}
*/
	}


