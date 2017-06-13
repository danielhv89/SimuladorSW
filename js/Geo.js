   function geoSetpUp(){
		  if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					geolocationSuccess, 
					geolocationFailure
				)
		  } 
		};
		
		
	function geolocationFailure(positionError) {
		  alert("failure");
		 
		};
		
		function geolocationSuccess(position) {
          //alert(position.coords.latitude+ " "+position.coords.longitude);
		  var location = new google.maps.LatLng(position.coords.latitude,
		                                        position.coords.longitude);
		  
												
          setupMap(location);
		  

		};
		var map;
	function setupMap(location){		   
		   var myOptions = {
		      zoom: 13,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
	       };
		   
		   
	       map = new google.maps.Map(document.getElementById("geo"), myOptions);
		   map.setCenter(location);
          
		  var infowindow = new google.maps.InfoWindow();

		  infowindow.setContent("You are here, or somewhere thereabouts.");
		  infowindow.setPosition(location);
		  infowindow.open(map);
		  
		};
		