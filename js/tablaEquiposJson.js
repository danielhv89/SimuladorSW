		// Lectura sincronica de datos
		
		function loadJSONData(url){
		//alert("json");
		    var http_request = new XMLHttpRequest();
			http_request.open("GET", url, false);
			http_request.send();
			return JSON.parse(http_request.responseText);
		}
		var JSON_DATA_URL="json/equipos.json";