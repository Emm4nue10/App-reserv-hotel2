import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import HotelsCard from '../components/HotelsCard';
import cbba from "../img/cbba.jpg"
import scz from "../img/scz.jpg"
import lapaz from "../img/lapaz.jpg"
import beni from "../img/beni.jpg"
import potosi from "../img/potosi.jpg"
import tarija from "../img/tarija.jpg"





function listHotels(){
  return[
    {
      id:1,
      Hotel:"the One",
      Capacidad: 2,
      state: "disponible",
      precio: 50,
      street: "jordan n°154",
    },
     {
      id:2,
      Hotel:"place",
      Capacidad: 2,
      state: "disponible",
      precio: 60,
      street:"calama n°87",
    },
     {
      id:3,
      Hotel:"confort",
      Capacidad: 2,
      state: "reservado",
      precio: 70,
      street: "heroinas n°1101"
    }
  ]
}

  

function App() {

  const [hotelsState, setHotelsState]= useState([])

  useEffect (()=>{
    const hotels = listHotels()
    setHotelsState(hotels)
    console.log(hotels);

  }, [])

  const filterStateHotels = (state)=>{
    const filterHotels = hotelsState.filter((value)=>{
      return value.state === state
    });
    return filterHotels;
  }

  //style={{display: 'flex', justifyContent:'center', textAlign:'center', justifyContent:'center', borderRadius:".25rem", margin:"0rem auto", backgroundColor:'#9EC7A7'}}

  return (
    <div style={{background:'#282c34'}}>
      <div > 
        <header>
          <nav className='nav'>
          <h1 className='logo'>LOGO</h1>
          <ul  className='barra'>
            <li className='barra-item'><a>INICIO</a></li>
            <li className='barra-item'><a>PROMOCIONES</a></li>
            <li className='barra-item'><a>ALQUILER AUTOS</a></li>
            <li className='barra-item'><a>REGISTRA TU HOTEL</a></li>
            <li className='barra-item'><a>CONTACTO</a></li>
          </ul>
        </nav>
        </header>
      </div>
      <div >
      <h1 className="App-header" > RESERVA TU HOTEL</h1>
      </div> 
      <div style={{background:'#ffff'}}>
        <h2>CIUDADES DISPONIBLES:</h2>
        <img src={cbba} className='ciudades'/>
        <img src={lapaz} className='ciudades'/>
        <img src={scz} className='ciudades'/>
        <img src={potosi} className='ciudades'/>
        <img src={tarija} className='ciudades'/>


      </div> 
       <div >
          <h3 style={{color:'white'}}>  BUSQUEDA DE HABITACIONES:</h3>
          {filterStateHotels('disponible').map((value, index) =>{
            return(
              <div  className='contenedor' > 
              <HotelsCard HotelsInfo={value} key={index}/>
              </div>
              )
          })}
        </div>
    </div>
  );
}

export default App;
