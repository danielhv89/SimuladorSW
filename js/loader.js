window.onload = function(){
	var table = document.getElementById("tableEquipos");
	table.style.visible = "hidden";
	//geoSetpUp();
	crearCanvas();
	crearTabla();
	var can = document.getElementById("cancha");
	can.ondrop = drop;
	can.ondragover  = allowDrop;
	/////////////////////////////////////////////////////////////
	var lineChart = document.getElementById("lineChart");
	lineChart.onclick=drawChart;
	var pieChart = document.getElementById("pieChart");
	pieChart.onclick=drawChartPie;
	var columnChart = document.getElementById("columnChart");
	columnChart.onclick=drawChartColumn;
	//////////////////////////////////////////////////////////////
	var students =  document.getElementById("integrantes");
	students.onclick=function(){
		alert("Autor\n-Daniel Herrera Villegas");
	}
	var audio = document.getElementById("bong");
    audio.volume=START_VOLUME;
	
	var play = document.getElementById("jugar");
	play.onclick = Jugar;

	
  // Redraw every  FRAME_RATE milliseconds.
    setTimeout(drawFrame, FRAME_RATE); //drawFrame: es el q grafica    FRAME_RATE: cuantos flash x unidad de tiempo
}

