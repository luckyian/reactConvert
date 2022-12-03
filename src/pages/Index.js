import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import WeatherContainer from "../components/CitySearch/WeatherContainer";


function Index() {
 
  
  
  return (


    <div>
      <div className="mt-5">
        <div className="p-5">
        <h1 className="titleboi"><u>Weather Dashboard</u></h1>
          <Card className="aboutBack">
          <Card.Title></Card.Title>
            <Card.Body>
             
              <div className="float-left" >
                <Card.Img src="./assets/clouds.jpg" className="p-2" alt="Ian Wren"></Card.Img>
              </div>
              <div>
             <WeatherContainer/>

            </div>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>








  );
}

export default Index;
