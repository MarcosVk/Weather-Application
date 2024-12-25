import React, { useContext } from 'react'
import DataContext from './Context/dataContext'

const UserData = () => {
    const { userData, setUserData, weather,result,setResult } = useContext(DataContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const temp=`Hi ${userData.name}, the current temperature is ${Math.round(weather.weather.main.temp)}°C.`
         const recommend = Math.round(weather.weather.main.temp) >= userData.minTemp && Math.round(weather.weather.main.temp) <= userData.maxTemp ? (
                `Hi ${userData.name}, based on your preferences, it's safe to go out!`) : (
                `It's too cold/hot for your preference. Consider staying indoors!`)
        setResult({
            tempResult:temp,
            recommandResult:recommend
        });
        setUserData({
            name: '',
            age: '',
            minTemp: '',
            maxTemp: ''
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='UserData'>
                    <input
                        type='text'
                        placeholder='Enter your name...'
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Enter your age...'
                        value={userData.age}
                        onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                    />
                </div>
                <div className='UserData Temp'>
                    <input
                        type='text'
                        placeholder='Enter min temperature...'
                        value={userData.minTemp}
                        onChange={(e) => setUserData({ ...userData, minTemp: e.target.value })}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Enter max temperature...'
                        value={userData.maxTemp}
                        onChange={(e) => setUserData({ ...userData, maxTemp: e.target.value })}
                        required
                    />
                </div>
                <div className='Submit'>
                    <button type='submit' >Submit</button>
                </div>
            </form>
            {result &&
            <div className='Message'><p>
            {result.tempResult}
            <br /><br />
            {result.recommandResult}
        </p></div>
            
               }
        </>

    )
}

export default UserData