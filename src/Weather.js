import React, { useEffect, useState } from 'react';
import "./Weather.css";
import { IoLocationSharp } from 'react-icons/io5';
import { FaTemperatureLow } from 'react-icons/fa';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsDropletHalf } from 'react-icons/bs';



function Weather() {
   
    let [weather,setWeather]=useState({});
    let [city,setCity]=useState("Pune");
   
    useEffect(()=>{
  
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6d0473295d26da9ab36203b957883cd`)
        .then((res)=>res.json())
        .then((data)=>{
        
         setWeather(data);

        })
        .catch((err)=>{
            console.log(err);
        })



    },[city])

   function readValue(value) {
       setCity(value);
   }


  return (
    <div className='weather'>
      
    <h1 className='title'>Weather App</h1>

     <div className='container'>
       <input className='city' placeholder='Enter City Name' onChange={ (event)=>{ 
           readValue(event.target.value)
       }}/>

          <div className='box'>
              <IoLocationSharp className='loc'/>
            <h1> {city}</h1>

          </div>

            <h3>Temp - {(weather.main?.temp-273.15).toFixed(2)}  <sup>o</sup>C</h3>
   

          <h3>Feels like - {(weather.main?.feels_like-273.15).toFixed(2)} <sup>o</sup>C</h3>
        
    
          <h3>Humidity - {weather.main?.humidity}  %</h3>
      
       <h3>Wind - {Math.round(weather.wind?.speed *18/5)} km/h</h3>
  
     </div>
    </div>

  )
}

export default Weather