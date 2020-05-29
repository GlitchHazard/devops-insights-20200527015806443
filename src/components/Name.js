import React, { useState } from 'react';

function Name(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const NameCodePattern = /^[A-Za-z]+/;
        const valid = NameCodePattern.test(event.target.value);
        if (!valid) {
            setValidationError('Does Not Match Any City');
            props.clearResponse();
        } else {
            setValidationError('');
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
			      		if (data[key][i].name == event.target.value) {
			      			point = {lat: data[key][i].coord.lat, lng: data[key][i].coord.lon};
			      		}
			    	}
			   	}
			   	window.map.panTo(point);
        	}      
            props.onNameChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="NZ City Name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default Name