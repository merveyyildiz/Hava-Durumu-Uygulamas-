import React from 'react'
import Sun from "../img/sun.jpg";
import Cloud from "../img/cloud.jpg";
import Rain from "../img/rain.png";
import Snow from "../img/snow.jpg";
import Clear from "../img/clear.jpg";

export default function Weather(props) {
    let img="";
    if(props.data.durum==="Clouds" )
        img=Cloud;
    else if(props.data.durum==="Sun")
        img=Sun; 
    else if(props.data.durum==="Rain")    
        img=Rain
    else if(props.data.durum==="Clear")    
        img=Clear
    else 
        img=Snow;   
        console.log(props.data)
    if(props.data.sehir!=="") {  
    return (
<div className="row mt-3">
        <div className="col-md-5 offset-md-5  " >
            <h4  >{props.data.sehir}</h4>
            <img src={img} style={{width:"250px",height:"250px"}}/>
            <h5>Durum:{props.data.durum}</h5>
            <h5>Açıklama:{props.data.aciklama}</h5>
            <h5>Sıcaklık:{props.data.sicaklik}</h5>
            <h5>Nem:{props.data.nem}</h5>
        </div>
        </div>
    )}else return(
        <div>{props.data.hata}</div>
    )
}
