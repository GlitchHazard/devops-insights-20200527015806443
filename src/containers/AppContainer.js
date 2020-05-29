import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import NameResponse from '../components/NameResponse';
import Name from '../components/Name';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleNameChange = async (NameValue) => {
        //console.log(`--------- fetchData called Name:${NameValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${NameValue},{},NZ,us`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Name onNameChange={handleNameChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <NameResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
