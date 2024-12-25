import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext=createContext({})

export const DataHandle=({children})=>{
    const [search,setSearch]=useState('')
    const[weather,setWeather]=useState({
        weather:{},
        isLoading:false,
        error:''
    })
    const [userData,setUserData]=useState({
        name:'',
        age:'',
        minTemp:'',
        maxTemp:''
    })
    const [result,setResult]=useState(null);
    const toWeatherDate=()=>{
        const Weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const month=[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",];
        const getDate=new Date();
        const date=`${Weekdays[getDate.getDay()]} ${getDate.getDate()} ${month[getDate.getMonth()]}`
        return date;
    }
        const input=async(e)=>{
            if(e.key==='Enter')
            {
                e.preventDefault()
                setSearch('')
                setWeather({...weather,isLoading:true})
                try
                {
                    const fetch=await axios.get("https://api.openweathermap.org/data/2.5/weather",{
                        params:{
                            q:search,
                            units:"metric",
                            appid:"630c8370aaa86fa1e904048878538780",
                        },
                    });
                    setWeather({weather:fetch.data,isLoading:false,error:''})
                    localStorage.setItem('Weather App',JSON.stringify(fetch.data))
                }
                catch(e){
                    setWeather({...weather,weather:{},isLoading:false,error:(e.message)})
                    console.log(e.message)
                }
            }
        }
        useEffect(()=>{
            const storedData=localStorage.getItem('Weather App');
            if(storedData){
                setWeather({weather:JSON.parse(storedData),isLoading:false,error:''})
            }
        },[])
    return(
        <DataContext.Provider
        value={{search,setSearch,toWeatherDate,weather,setWeather,input,userData,setUserData,result,setResult}}
        >
            {children}
        </DataContext.Provider>
    )
}


export default DataContext