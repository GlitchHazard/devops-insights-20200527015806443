var map;
      function initMap() {
        	map = new google.maps.Map(document.getElementById('map'), {zoom: 8, center: {lat: -40.9005585, lng: 174.8859711}});
        	fetch('citylist.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
			function appendData(data) {
			    for (var key in data) {
			    	for (var i = 0; i < data[key].length; i++) {
			      		var point = {lat: data[key][i].coord.lat, lng: data[key][i].coord.lon};
			     		var marker = new google.maps.Marker({position: point, map: map});
			    	}
			   	}
        	}
      	}
      	function moveTo(name) {
      		fetch('citylist.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
			function appendData(data) {
				var point;
			    for (var key in data) {
			    	for (var i = 0; i < data[key].length; i++) {
			      		if (data[key][i].name == name) {
			      			point = {lat: data[key][i].coord.lat, lng: data[key][i].coord.lon};
			      		}
			    	}
			   	}
			   	map.panTo(point);
        	}      		
      	}