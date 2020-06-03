function initMap() {
      	map = new google.maps.Map(document.getElementById('map'), {zoom: 5, center: {lat: -40.9005585, lng: 174.8859711}});
      	}
function addMarker(location, name) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            title: name
        });
        marker.addListener('click', function() {
			map.panTo(this.getPosition());
			document.getElementById('usr').innerHTML = this.getTitle();
		});
}