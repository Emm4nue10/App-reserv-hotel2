import { useEffect, useState } from "react";

function HotelsCard (props){
    
    const {HotelsInfo}= props
        return(
            <div className="cards">
              <p >Hotel:{HotelsInfo?.Hotel}</p>
              <p>Capacidad: {HotelsInfo?.Capacidad}</p>
              <p>estado:{HotelsInfo?.state}</p>
              <p>street:{HotelsInfo?.street}</p>
              <button>RESERVAR</button>
            </div>
        
          )


       
}

export default HotelsCard ;