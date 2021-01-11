import './App.css';
import React,{useState} from 'react';
import Title from "./components/Title";
import Weather from "./components/Weather";
import Form from "./components/Form";
import "../node_modules/animate.css"
const API_KEY="7091436790767d008ee28d3cf0884f55";
function App() {
  const [data,setData]=useState({sicaklik:"",sehir:"",nem:"",aciklama:"",durum:"",hata:""})

 const getWeather =async(city)=>{
    
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const datas=await api_call.json();
    setData({...data,sicaklik:datas.main.temp,sehir:datas.name,nem:datas.main.humidity ,aciklama:datas.weather[0].description ,durum:datas.weather[0].main ,hata:""})
  }
  const handleSubmit=(e)=> {
    e.preventDefault();
    let city=e.target.elements.city.value

    if(city!=="")
      getWeather(city)
    else{
      setData({...data,hata:"Lütfen şehir giriniz"})
    }  
   
  }
  
  return (
    <div className=" container ">
     <Title/>
     <Form handleSubmit={handleSubmit} />
     <Weather data={data}/>
 
        
    </div>
  );
}

export default App;
