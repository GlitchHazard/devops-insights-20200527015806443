var map;
      function initMap() {
        	map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: {lat: -40.9005585, lng: 174.8859711}});
        	var citylist = fetch("citylist.json");
        	for (var nzCities in citylist) {
            	var pinPoint = nzCities.nzCities.coord;
  				var marker = new google.maps.Marker({position: pinPoint, map: map});
  			}
      }