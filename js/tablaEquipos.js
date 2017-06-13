	var img = new Image();
	img.src = "canchaFutbol.jpg";
	var primerEquipo;
	var equipo;
	var equipo1, equipo2;
	var equipo1Seleccionado = false;
	var equipo2Seleccionado = false;
	var table;

	//////////////////////////////////////////////////////////////////////////////
	var balls = [];
	var c;
	var ctx;
	
	function Color(r,g,b){
	  this.Red = r;
	  this.Green = g;
	  this.Blue = b;

	  this.HexString = function()
	  {
		var rStr = this.Red.toString(16);
		if (rStr.length == 1)
		  rStr = '0' + rStr;
		var gStr = this.Green.toString(16);
		if (gStr.length == 1)
		  gStr = '0' + gStr;
		var bStr = this.Blue.toString(16);
		if (bStr.length == 1)
		  bStr = '0' + bStr;
		return ('#' + rStr + gStr + bStr).toUpperCase();
	  }
	}
	function Ball(x, y, dx, dy, radius) {
	  this.x = x;
	  this.y = y;
	  this.dx = dx;
	  this.dy = dy;
	  this.radius = radius;
	  this.strokeColor = "red";
	  this.color=function(){
		return Math.floor(Math.random()*255);
	  };
	  this.fillColor= function(){
	   return new Color(this.color(), this.color(), this.color()).HexString();
	  };
	  this.deltaX= function(){
		  //return Math.random()*300+1;
		  return this.dx;
	  };
	  this.deltaY= function(){
		  //return Math.random()*300+1;
		  return this.dy;
	  };
	}

	function addBall() {
	  // Get the requested size.
	  var radius = parseFloat(05);

	  // Create the new ball.
	  var ball = new Ball(50,50,1,1,radius);

	  // Store it in the ball array.
	  balls.push(ball);
	}
	function clearBalls() {
	  // Remove all the balls.
	  balls = [];
	}

	var sound_index=0;
	var sounds =["Imperial_March.m4a"];  //arreglo de sonidos

	function bong(p){
	  var audio = document.getElementById("bong");
	  audio.src=sounds[sound_index];
	  if(p==1){
	  audio.volume=Math.min(audio.volume);
	  audio.play();
	  }else{
	  audio.pause();
	  }
	}

	var VX=0.15;
	var VY=0.15;
	var friction=1.0005;//* 0.998;
	var BOUNCE=1.96;
	var MIN=1e-10;
	var VX_CHANGE=0.1;
	var GRAVITY=0.22;
	var FRAME_RATE=20;
	var START_VOLUME=1;
	// The ball
	var imageBall = new Image(); // no es de html pero se puede crear, cuando se hace un img
	imageBall.width="0";
	imageBall.height="0";

	var imagePlayer = new Image(); //
	imagePlayer.width="15";
	imagePlayer.height="15";

	var imagePlayer1 = new Image(); //
	imagePlayer1.width="35";
	imagePlayer1.height="35";
	
	// Handle image loading
	imageBall.onload = function() {
			// do something here
	};

	imagePlayer.onload = function() { // si se quiere mostrar algo mientras llega la imagen x si dura mucho
			// do something here
	};
	// Load images 
	imagePlayer.src = "player.png";
	imagePlayer1.src = "player1.png";

	function drawFrame() {
	  // Clear canvas.
	  //console.log("drawframe");
	  ctx.clearRect(0, 0, c.width, c.height);

	  //context.beginPath();

	  // For each ball calculate its position
	  for(var i=0; i<balls.length; i++) {
		
		var ball = balls[i];
		
		// Each ball to its new position.
		
		ball.x += ball.deltaX();
		ball.y += ball.deltaY();

		// Add  a "Y-gravity" effect 
		if ((ball.y) < c.height) ball.dy += GRAVITY;  //digamos entre mas alto mas gravedad

		// Add  "X-friction" effect 
		ball.dx = ball.dx*friction; // la bola con el aire es la friccion

		// If the ball hits the X-side:
		if ((ball.x + ball.radius > c.width) || (ball.x - ball.radius < 0)) { //si la cooredenada x + el canvas es > 
		  //bong();
		  if(ball.x + ball.radius > c.width)
			ball.dx = -ball.dx-VX;  // produce como un efecto de balanceo
		  else ball.dx = -ball.dx+VX;
		  
		}

		// If the ball hits the Y-side
		if ((ball.y + ball.radius > c.height) || (ball.y - ball.radius < 0)) {
		  //console.log(ball.y , ball.radius);	
		  //bong();
		  if(ball.y + ball.radius > c.height)
			ball.dy = -ball.dy-VY;
		  else ball.dy =  1+VY;
		}
		// (Re)draw the ball.
		if(i>1){
		}else if(i==1){
			ctx.drawImage(imagePlayer1, ball.x, ball.y); 
			ctx.beginPath();
			ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2); // partir de donde pinte el arco
			ctx.lineWidth = 1;
			ctx.fillStyle = ball.fillColor(); // color con el q llena la figura pr hay q llamar al fill
			ctx.fill();
		}else{
			ctx.drawImage(imagePlayer, ball.x, ball.y); 
		}
	  };
	  ctx.stroke();   // cuando se termina se llama al stroke  y este es el q pinta fisicamente
	  // Draw the next frame 
	  setTimeout(drawFrame, FRAME_RATE);  //da un tiempo para q se vea la imagen
	}	
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	
	function crearCanvas(){
		c=document.getElementById("cancha");
		ctx=c.getContext("2d");
		ctx.drawImage(img,0,0, c.width, c.height);
	}
	function allowDrop(ev) {
		ev.preventDefault();
	}	
	function drag(celda, ev){
	ev.dataTransfer.setData("Text",celda.id);
	}
	function drop(ev){
		ev.preventDefault();
		var data=ev.dataTransfer.getData("Text"); //agarramos el objeto que se transfiera
		//var equipo = document.createElement("p"); //creamos un p
		equipo = document.createElement("p");
		equipo.innerHTML=document.getElementById(data).innerHTML; //igualamos el html del p con el html del objeto
		equipo.id=document.getElementById(data).id;
		if(equipo.id!="Equipo"){ // valida que no se pueda agregar el primer nodo de la tabla de e equipos
			if(document.getElementById("cancha").id==ev.target.id&&document.getElementById("cancha").getElementsByTagName("p").length<2){ //si es el id "cancha" y tiene 0 nodos hijos
				if(document.getElementById("cancha").id==ev.target.id&&document.getElementById("cancha").getElementsByTagName("p").length==0){
					console.log("if1");
					equipo.id="equipo1"; //si no hay ningun equipo le ponemos la clase css equipo1
					addBall();
					primerEquipo = equipo;
					ev.target.appendChild(equipo); //le metemos el equipo
					console.log("entro equipo1");
				}else{
					equipo.id="equipo2"; //sino equipo2
					if(primerEquipo.innerHTML != equipo.innerHTML){	
					console.log("entro equipo2");
					console.log("if2");
						ev.target.appendChild(equipo); //le metemos el equipo
						addBall();
						bong(1);
					}
				}
				
			}

		}
		if(equipo1Seleccionado == false){
			equipo1=ev.dataTransfer.getData("Text");
			equipo1Seleccionado = true;
		}else{
			if(equipo2Seleccionado == false && equipo1 != ev.dataTransfer.getData("Text")){
				equipo2=ev.dataTransfer.getData("Text");
				equipo2Seleccionado = true;
			}
		}
		if(equipo1Seleccionado && equipo2Seleccionado){
			alert("Batalla entre " + equipo1 + " y " + equipo2);
			//Jugar();
			equipo1Seleccionado = equipo2Seleccionado = false;
		}	
		
		
	}
	function removeSon(){
		var cancha = document.getElementById("cancha");
		cancha.removeChild(document.getElementById("equipo1"));
		cancha.removeChild(document.getElementById("equipo2"));
	}
	
	var crearTabla = function(e){
		 var doc = document;
		 // Accedemos la tabla
		 table = doc.getElementById("tableEquipos");
	     table.style.visibility="visible";	 
		 // Borramos filas si es que hay			
		 var tb= table.tBodies[0];
		 for(;tb.childElementCount;)	 
		    tb.removeChild(tb.children[0]);
		 // Llamamos servicio que traiga los datos en Json
		 var results = loadJSONData(JSON_DATA_URL);
		 // Ver muestra de los resultados
		 var teams = results.results.teams;
		 // Ponemos un caption tomando su valor del JSON
		 if(!table.caption){
		   var cap = doc.createElement("caption");
		   cap.innerHTML=results.results.title;
		   table.appendChild(cap);
		 }
		 // LLenamos la tabla
		 var header = table.createTHead();
		 var trHead = header.insertRow(0);
		 var cell1 = trHead.insertCell(0);
		 		 
		 cell1.innerHTML="JUGADOR";		 	 
		 
		 var i=0;
		 for(i in teams){
		   var team =teams[i];
		   // Nueva fila
		   var tr= tb.insertRow(i);
		   var nombre = tr.insertCell(0);
		   
		   //llenamos las columnas
		   nombre.innerHTML=team.name;
		   nombre.id = team.name;
		   nombre.ondragstart = function(evt) {
		      drag(this, evt); //this.parentNode
		   };
		   nombre.draggable = true;
		   
		   
		}
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	function buscarIndiceFila(equipo){
	var indiceFila = 1;
	while(table.rows[indiceFila].cells[0].innerHTML != equipo && indiceFila <= 12)
		indiceFila++
	return indiceFila;
}

function Jugar(){

	var indiceFilaEquipo1 = buscarIndiceFila(equipo1);
	var indiceFilaEquipo2 = buscarIndiceFila(equipo2);
	
	var teams = loadJSONData(JSON_DATA_URL).results.teams;

	var eventosEquipoA = teams[indiceFilaEquipo1 - 1].PB;
	var eventosEquipoB = teams[indiceFilaEquipo2 - 1].PB;

	var atributosEquipoA = teams[indiceFilaEquipo1 - 1];
	var atributosEquipoB = teams[indiceFilaEquipo2 - 1];
	
	
	var probabilidadEquipoA = [eventosEquipoA.Ataque1, eventosEquipoA.Ataque2, eventosEquipoA.TipoAtaque1, 
	eventosEquipoA.TipoAtaque2, eventosEquipoA.TipoAtaque3, eventosEquipoA.Defensa1, eventosEquipoA.Defensa2,
	eventosEquipoA.Defensa3, eventosEquipoA.Critico];

	var probabilidadEquipoB = [eventosEquipoB.Ataque1, eventosEquipoB.Ataque2, eventosEquipoB.TipoAtaque1, 
	eventosEquipoB.TipoAtaque2, eventosEquipoB.TipoAtaque3, eventosEquipoB.Defensa1, eventosEquipoB.Defensa2,
	eventosEquipoB.Defensa3, eventosEquipoB.Critico];

	var diferenciaDeProbabilidades = 20;
	var vidaEquipoA = 100;
	var vidaEquipoB = 100;

	var n = 0;

	//Elegimos un numero al azar para ver quien ataca primero; 
	var azarEquipo1 = Math.random();
	var azarEquipo2 = Math.random();

	for (var tiempo = 0; tiempo < 4; tiempo++) { // 60 tiempos

		if (azarEquipo1 > azarEquipo2){
			alert (equipo1 +"\n"+ "ataca primero");
			if(tiempo == n){
				//hay un ataque
				// si la suma de fuerza + inteligencia de equipo1 es > a suma de fuerza + inteligencia equipo2, equipo1 acerta el ataque
				if(atributosEquipoA.Inteligencia + atributosEquipoA.Velocidad > 
				(atributosEquipoA.Inteligencia + atributosEquipoA.Velocidad)-Math.floor((Math.random() * 10) + 1)){
					alert (equipo1 +"\n"+ "acerto ataque");
					vidaEquipoB = vidaEquipoB - atributosEquipoA.DañoAtaque1;
	
				}else{
					alert (equipo1 +"\n"+ "no acerto el ataque");
				}

				n++;
			}
				//hay defensa
				if(tiempo == (n+1)){
					alert (equipo2 +"\n"+ "se defendio");
					if(atributosEquipoB.DañoAtaque1-atributosEquipoB.ResistenciaDefensa1 > 0){
					vidaEquipoB = vidaEquipoB - (atributosEquipoA.DañoAtaque1-atributosEquipoA.ResistenciaDefensa1);} 
					n++;
				}
					else
						//hay ataque
						if (tiempo == (n+2)){
							//hay un ataque
							// si la suma de fuerza + inteligencia de equipo1 es > a suma de fuerza + inteligencia equipo2, equipo1 acerta el ataque
							if(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad > 
							(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad)-Math.floor((Math.random() * 10) + 1)){
								alert (equipo2 +"\n"+ "acerto ataque");
								vidaEquipoA = vidaEquipoA - atributosEquipoA.DañoAtaque1;	
						}else{
							alert (equipo2 +"\n"+ "no acerto el ataque");
						}
							n++;
						}

		}
		else{
			alert (equipo2 +"\n"+ "ataca primero");
			if(tiempo == n){
				//hay un ataque
				// si la suma de fuerza + inteligencia de equipo1 es > a suma de fuerza + inteligencia equipo2, equipo1 acerta el ataque
				if(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad > 
				(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad)-Math.floor((Math.random() * 10) + 1)){
					alert (equipo2 +"\n"+ "acerto ataque");
					vidaEquipoA = vidaEquipoA - atributosEquipoB.DañoAtaque1;
	
				}else{
					alert (equipo2 +"\n"+ "no acerto el ataque");
				}

				n++;
			}
				//hay defensa
				if(tiempo == (n+1)){
					alert (equipo1 +"\n"+ "se defendio");
					if(atributosEquipoA.DañoAtaque1-atributosEquipoA.ResistenciaDefensa1 > 0){
					vidaEquipoB = vidaEquipoB - (atributosEquipoA.DañoAtaque1-atributosEquipoA.ResistenciaDefensa1);} 
					n++;
				}
					else
						//hay ataque
						if (tiempo == (n+2)){
							//hay un ataque
							// si la suma de fuerza + inteligencia de equipo1 es > a suma de fuerza + inteligencia equipo2, equipo1 acerta el ataque
							if(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad > 
							(atributosEquipoB.Inteligencia + atributosEquipoB.Velocidad)-Math.floor((Math.random() * 10) + 1)){
								alert (equipo2 +"\n"+ "acerto ataque");
								vidaEquipoA = vidaEquipoA - atributosEquipoB.DañoAtaque1;	
						}else{
							alert (equipo2 +"\n"+ "no acerto el ataque");
						}
							n++;
						}

		}
    	
	}
        	
	
	if (vidaEquipoA > vidaEquipoB){
		 alert ("gano " + equipo1 + "\n" +  equipo1 + " " + vidaEquipoA + " " + equipo2 + " " + vidaEquipoB + ".");
		 
	}else 
		if (vidaEquipoB > vidaEquipoA){
		 	alert ("gano " + equipo2 + "\n" +  equipo2 + " " + vidaEquipoB + " " + equipo1 + " " + vidaEquipoA + ".");
		 	
		 }else{
			 alert ("batalla empatada a " + vidaEquipoA + " vida\n" +  equipo1 + " " + vidaEquipoA + " " + equipo2 + " " + vidaEquipoB + ".");
			 }
			 
			 clearBalls();
			 bong(0);
			 removeSon();
};