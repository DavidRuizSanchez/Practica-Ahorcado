window.onload=function(){
		var palabras="";
		var palabras_seleccionadas=[];

		//capturamos el contenedor	
		var contenedor=document.getElementsByClassName("contenedor")[0]; 

		//hacemos la llamada al fichero de palabras
		var conexion=new XMLHttpRequest(); 
		conexion.onreadystatechange=function(){
			if(this.readyState==4 && this.status==200){
				//parseamos el contenido del JSON
				var palabras=(JSON.parse(this.responseText)); 
				
				//establecemos un índice aleatorio para seleccionar la palabra
				var indice=Math.floor(Math.random()*(palabras.length));
				
				//Asignamos el indice a una palabra
				var palabra_seleccionada=palabras[indice].palabra;

				//añadimos la palabra seleccionada al array de palabras para que no se repita
				palabras_seleccionadas.push(palabra_seleccionada); 

				//Cramos array de las letras que contiene la palabra seleccionada para poder hacer las comparaciones
						var cortada=palabra_seleccionada.split("");
						console.log(cortada);

				//Creamos una casilla en blanco por cada letra de la palabra
						for(var i=0;i<cortada.length;i++){
							var parrafo=document.createElement("p")
							parrafo.className=("casilla");
							parrafo.innerHTML=("--");
							contenedor.appendChild(parrafo);
						}
						
				//capturamos las casillas para luego asignarles las letras
				var casillas=document.getElementsByClassName("casilla");
				//console.log(casillas);

				

				//capturamos la letra de entrada
				$(".espacio").submit(
					function(e){
						e.preventDefault();
						//establecemos la variable para controlar si la letra introducida no coincide con ninguna de las letras de la palbra seleccionada
						var fallos=0;
						var fallos_totales=0;

						var letra_entrada=$(".entrada_letra").val();
						console.log(letra_entrada);
						var ruta_imagen=document.getElementsByClassName("imagen_muneco")[0].src;
						console.log(ruta_imagen);

						console.log(palabra_seleccionada); //Flag para palabra seleccionada
						console.log(palabras_seleccionadas); //Flag para array de palabras seleccionadas

						//HAcemos la comparacion
						for(var i=0;i<cortada.length;i++){
							(function(indice){
								if(cortada[i]==letra_entrada){
								console.log("has acertado la letra "+cortada[i]);

								// Modificamos el texto de la casilla acertada por la letra correspondiente
								casillas[indice].innerHTML=cortada[i];
								}
								else{

									//se incrementa el numro de fallos parciales en uno (sin los fallos parciales suman el total de la longitud de la palabra,se sumara un fallo total)
									fallos++;
									console.log(fallos);
								}
								if(fallos==cortada.length){
									console.log("fallaste");

									//Como los fallos parciales suman la longitud de la palabra, los fallos totales se incrementan en uno
									fallos_totales++;
									console.log(fallos_totales);

									//Tratamos la ruta de la imagen para cambiarla por la que corrsponde
									var ruta_cortada=ruta_imagen.split("_");
									console.log(ruta_cortada);
									ruta_cortada[1]=[indice]+".gif";
									console.log(ruta_cortada);
									ruta_cortada=ruta_cortada.join("_");
									console.log(ruta_cortada);

									//Le asignamos la ruta de la imagen 
									document.getElementsByClassName("imagen_muneco")[0].src=ruta_cortada;

								}
							})(i);
							
						}
						
						})
	}
}
		conexion.open("GET","palabras.json",false); //cambiado a false porque si no se me recarga la página
		conexion.send();

	}
