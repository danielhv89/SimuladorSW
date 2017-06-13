	google.load("visualization", "1", {packages:["corechart"]});
	function drawChart() {
		var results1 = loadJSONData(JSON_DATA_URL);
		console.log("entro al draw");
		var table1 = document.getElementById("tableEquipos");
        var data = google.visualization.arrayToDataTable([
		  ['Equipo', 'PG', 'PP','PE'],
          [table1.rows[1].cells[0].innerHTML,  parseInt(table1.rows[1].cells[2].innerHTML), parseInt(table1.rows[1].cells[3].innerHTML), parseInt(table1.rows[1].cells[4].innerHTML)],
          [table1.rows[2].cells[0].innerHTML,  parseInt(table1.rows[2].cells[2].innerHTML), parseInt(table1.rows[2].cells[3].innerHTML), parseInt(table1.rows[2].cells[4].innerHTML)],
		  [table1.rows[3].cells[0].innerHTML,  parseInt(table1.rows[3].cells[2].innerHTML), parseInt(table1.rows[3].cells[3].innerHTML), parseInt(table1.rows[3].cells[4].innerHTML)],
		  [table1.rows[4].cells[0].innerHTML,  parseInt(table1.rows[4].cells[2].innerHTML), parseInt(table1.rows[4].cells[3].innerHTML), parseInt(table1.rows[4].cells[4].innerHTML)],
		  [table1.rows[5].cells[0].innerHTML,  parseInt(table1.rows[5].cells[2].innerHTML), parseInt(table1.rows[5].cells[3].innerHTML), parseInt(table1.rows[5].cells[4].innerHTML)],
		  [table1.rows[6].cells[0].innerHTML,  parseInt(table1.rows[6].cells[2].innerHTML), parseInt(table1.rows[6].cells[3].innerHTML), parseInt(table1.rows[6].cells[4].innerHTML)],
		  [table1.rows[7].cells[0].innerHTML,  parseInt(table1.rows[7].cells[2].innerHTML), parseInt(table1.rows[7].cells[3].innerHTML), parseInt(table1.rows[7].cells[4].innerHTML)],
		  [table1.rows[8].cells[0].innerHTML,  parseInt(table1.rows[8].cells[2].innerHTML), parseInt(table1.rows[8].cells[3].innerHTML), parseInt(table1.rows[8].cells[4].innerHTML)],
		  [table1.rows[9].cells[0].innerHTML,  parseInt(table1.rows[9].cells[2].innerHTML), parseInt(table1.rows[9].cells[3].innerHTML), parseInt(table1.rows[9].cells[4].innerHTML)],
		  [table1.rows[10].cells[0].innerHTML,  parseInt(table1.rows[10].cells[2].innerHTML), parseInt(table1.rows[10].cells[3].innerHTML), parseInt(table1.rows[10].cells[4].innerHTML)],
		  [table1.rows[11].cells[0].innerHTML,  parseInt(table1.rows[11].cells[2].innerHTML), parseInt(table1.rows[11].cells[3].innerHTML), parseInt(table1.rows[11].cells[4].innerHTML)],
		  [table1.rows[12].cells[0].innerHTML,  parseInt(table1.rows[12].cells[2].innerHTML), parseInt(table1.rows[12].cells[3].innerHTML), parseInt(table1.rows[12].cells[4].innerHTML)]
        ]);
        var options = {
          title: 'Game History'
        };
        var char_div=document.getElementById('chart_div');
		if(true){
			var chart = new google.visualization.LineChart(char_div);
			chart.draw(data, options);
		}
		
   }
         function drawChartPie() {
		 var table2 = document.getElementById("tableEquipos");
         var data = google.visualization.arrayToDataTable([
          ['EQUIPO', 'PUNTAJE'],
          [table2.rows[1].cells[0].innerHTML,parseInt(table2.rows[1].cells[8].innerHTML)],
		  [table2.rows[2].cells[0].innerHTML,parseInt(table2.rows[2].cells[8].innerHTML)],
		  [table2.rows[3].cells[0].innerHTML,parseInt(table2.rows[3].cells[8].innerHTML)],
		  [table2.rows[4].cells[0].innerHTML,parseInt(table2.rows[4].cells[8].innerHTML)],
		  [table2.rows[5].cells[0].innerHTML,parseInt(table2.rows[5].cells[8].innerHTML)],
		  [table2.rows[6].cells[0].innerHTML,parseInt(table2.rows[6].cells[8].innerHTML)],
		  [table2.rows[7].cells[0].innerHTML,parseInt(table2.rows[7].cells[8].innerHTML)],
		  [table2.rows[8].cells[0].innerHTML,parseInt(table2.rows[8].cells[8].innerHTML)],
		  [table2.rows[9].cells[0].innerHTML,parseInt(table2.rows[9].cells[8].innerHTML)],
		  [table2.rows[10].cells[0].innerHTML,parseInt(table2.rows[10].cells[8].innerHTML)],
		  [table2.rows[11].cells[0].innerHTML,parseInt(table2.rows[11].cells[8].innerHTML)],
		  [table2.rows[12].cells[0].innerHTML,parseInt(table2.rows[12].cells[8].innerHTML)],
        ]);

        var options = {
          title: 'PUNTAJE EQUIPOS PRIMERA DIVISION CR'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
	  
	  function drawChartColumn() {
	    var table3 = document.getElementById("tableEquipos");
        var data = google.visualization.arrayToDataTable([
          ['EQUIPO', 'PJ', 'PG','PP','PE'],
          [table3.rows[1].cells[0].innerHTML,parseInt(table3.rows[1].cells[1].innerHTML),parseInt(table3.rows[1].cells[2].innerHTML),parseInt(table3.rows[1].cells[3].innerHTML), parseInt(table3.rows[1].cells[4].innerHTML)],
		  [table3.rows[2].cells[0].innerHTML,parseInt(table3.rows[2].cells[1].innerHTML),parseInt(table3.rows[2].cells[2].innerHTML),parseInt(table3.rows[2].cells[3].innerHTML), parseInt(table3.rows[2].cells[4].innerHTML)],
		  [table3.rows[3].cells[0].innerHTML,parseInt(table3.rows[3].cells[1].innerHTML),parseInt(table3.rows[3].cells[2].innerHTML),parseInt(table3.rows[3].cells[3].innerHTML), parseInt(table3.rows[3].cells[4].innerHTML)],
		  [table3.rows[4].cells[0].innerHTML,parseInt(table3.rows[4].cells[1].innerHTML),parseInt(table3.rows[4].cells[2].innerHTML),parseInt(table3.rows[4].cells[3].innerHTML), parseInt(table3.rows[4].cells[4].innerHTML)],
		  [table3.rows[5].cells[0].innerHTML,parseInt(table3.rows[5].cells[1].innerHTML),parseInt(table3.rows[5].cells[2].innerHTML),parseInt(table3.rows[5].cells[3].innerHTML), parseInt(table3.rows[5].cells[4].innerHTML)],
		  [table3.rows[6].cells[0].innerHTML,parseInt(table3.rows[6].cells[1].innerHTML),parseInt(table3.rows[6].cells[2].innerHTML),parseInt(table3.rows[6].cells[3].innerHTML), parseInt(table3.rows[6].cells[4].innerHTML)],
		  [table3.rows[7].cells[0].innerHTML,parseInt(table3.rows[7].cells[1].innerHTML),parseInt(table3.rows[7].cells[2].innerHTML),parseInt(table3.rows[7].cells[3].innerHTML), parseInt(table3.rows[7].cells[4].innerHTML)],
		  [table3.rows[8].cells[0].innerHTML,parseInt(table3.rows[8].cells[1].innerHTML),parseInt(table3.rows[8].cells[2].innerHTML),parseInt(table3.rows[8].cells[3].innerHTML), parseInt(table3.rows[8].cells[4].innerHTML)],
		  [table3.rows[9].cells[0].innerHTML,parseInt(table3.rows[9].cells[1].innerHTML),parseInt(table3.rows[9].cells[2].innerHTML),parseInt(table3.rows[9].cells[3].innerHTML), parseInt(table3.rows[9].cells[4].innerHTML)],
		  [table3.rows[10].cells[0].innerHTML,parseInt(table3.rows[10].cells[1].innerHTML),parseInt(table3.rows[10].cells[2].innerHTML),parseInt(table3.rows[10].cells[3].innerHTML), parseInt(table3.rows[10].cells[4].innerHTML)],
		  [table3.rows[11].cells[0].innerHTML,parseInt(table3.rows[11].cells[1].innerHTML),parseInt(table3.rows[11].cells[2].innerHTML),parseInt(table3.rows[11].cells[3].innerHTML), parseInt(table3.rows[11].cells[4].innerHTML)],
		  [table3.rows[12].cells[0].innerHTML,parseInt(table3.rows[12].cells[1].innerHTML),parseInt(table3.rows[12].cells[2].innerHTML),parseInt(table3.rows[12].cells[3].innerHTML), parseInt(table3.rows[12].cells[4].innerHTML)]

        ]);

        var options = {
          title: 'EQUIPOS PRIMERA DIVISION CR',
          hAxis: {title: 2013, titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }