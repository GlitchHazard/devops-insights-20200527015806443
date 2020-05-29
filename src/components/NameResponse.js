import React from 'react';

function NameResponse(props) {

    if(props.responseData === null || props.responseData === '') {
        return null;
    }

    if(props.responseData.cod === '400' || props.responseData.cod === '404') {
        setTimeout(function() { props.clearResponse();}, 20000);
        return (
            <div className="col-sm-8">
                <div className="text-danger">{ props.responseData.message }</div>
            </div>
        );
    }

    if(props.responseData.cod === 200) {
    			fetch('citylist.json')
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
							point = {lat: -37.78333, lng: 175.28333};
							if (data[key][i].name === props.responseData.name) {
								point = {lat: data[key][i].coord.lat, lng: data[key][i].coord.lon};
							}
						}
					}
					window.map.panTo(point);
				} 
        return (
            <div className="col-sm-8">
                <table className="table table-info table-hover">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{props.responseData.name}</td>     
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{props.responseData.main.temp}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.responseData.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{props.responseData.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Min)</td>
                            <td>{props.responseData.main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Max)</td>
                            <td>{props.responseData.main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>{props.responseData.weather[0].description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return null
}
  
export default NameResponse