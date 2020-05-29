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