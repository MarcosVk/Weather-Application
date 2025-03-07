import React, { useContext } from 'react'
import DataContext from './Context/dataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
const Weather = () => {
  const { weather, toWeatherDate } = useContext(DataContext)
  return (
    <>
    {weather.isLoading && 
        <div><br /><br />
        <Oval type="Oval" color="black" height={100} width={100} />
        </div>}
    {weather.error && 
        <div><br /><br />
        <h3 style={{fontSize:"25px"}}>City not found....<FontAwesomeIcon icon={faFrown} /></h3></div>}
        <div></div>
      {weather && weather.weather && weather.weather.main &&
        <div className='WeatherMain'>
          <div className="CityName">
            <h2>{weather.weather.name}, {weather.weather.sys.country}</h2>
          </div>
          <div className='Date'>
            <h3>{toWeatherDate()}</h3>
          </div><br></br><br></br>
          <div className='WeatherIcon'>
            {console.log(weather.weather.weather[0].description)}
            {weather.weather.weather[0].description && <img src={`https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`} alt={weather.weather.weather[0].description}/>}
            <span>{Math.round(weather.weather.main.temp)}</span>
            <sup>°C</sup>
          </div>
          <div className='WeatherDescription'>
            <h3>{(weather.weather.weather[0].description).toUpperCase()}</h3>
          </div>
          <div className='WindSpeed'>
            <h3>Wind Speed: {weather.weather.wind.speed} m/s</h3>
          </div>
          <nav className='CheckUser'>
            <Link to='/checkuser'>Check User</Link>
          </nav>
        </div>}
    </>
  )
}

export default Weather