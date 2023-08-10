import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function HotelsCard (props){
    
    const {HotelsInfo}= props
        return(
            <div className="cards">
              <p className="cards-description">Hotel:{HotelsInfo?.Hotel} </p>
              <p className="cards-description">Codigo de Reserva:{HotelsInfo?.id}</p>
              <p className="cards-description">Capacidad: {HotelsInfo?.Capacidad}</p>
              <p className="cards-description">estado:{HotelsInfo?.state}</p>
              <p className="cards-description">Direccion:{HotelsInfo?.street}</p>
              <p className="cards-description">precio:{HotelsInfo?.precio}</p>
              <img src={HotelsInfo.image} style={{width:'100%', height:"140px"}}/>
              <button className="card-btn">RESERVAR</button>
            </div>
        
          )

       
       
}

export default HotelsCard ;