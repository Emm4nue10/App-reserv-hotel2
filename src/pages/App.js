
import '../App.css';
import { useEffect, useState } from 'react';
import HotelsCard from '../components/HotelsCard';
import cbba from "../img/cbba.jpg"
import scz from "../img/scz.jpg"
import lapaz from "../img/lapaz.jpg"
import beni from "../img/beni.jpg"
import potosi from "../img/potosi.jpg"
import tarija from "../img/tarija.jpg"
import { Link } from 'react-scroll';
import data2 from './basedeDatos';
  


  

function App() {


 
  const [FormularioReserv, setFormularioReserv]= useState({
        name:"",
        lastname:"",
        email:"",
        phone:""
  });
  
  const [myreserv, setMyReserv]= useState([]);
  
  useEffect (()=>{
    


  },[])

  //const [hotelsState, setHotelsState]= useState([]);

  const [categoriasFiltradas, setCategoriasFiltradas]=useState([]);


  const[habitacionSelecionado, setHabitacionSelecionado]= useState({
      Individual:false,
      Matrimonial:false,
      Familiar:false,
  })
  const filterOnCheckbox = (e)=>{
      setHabitacionSelecionado({
        ...habitacionSelecionado,
        [e.target.value]: e.target.checked,
      });
      if (e.target.checked){
        const resultadoCategoria = data2.filter(item=> item.category === e.target.value)
        setCategoriasFiltradas([
          ...categoriasFiltradas,
          ...resultadoCategoria
        ]);
      } else {
        const resultadoCategoria = categoriasFiltradas.filter(item => item.category !== e.target.value)
        setCategoriasFiltradas([ ...resultadoCategoria]);
      }
  };
  console.log( categoriasFiltradas);


 

  //style={{display: 'flex', justifyContent:'center', textAlign:'center', justifyContent:'center', borderRadius:".25rem", margin:"0rem auto", backgroundColor:'#9EC7A7'}}

  return (
    <div className='fondo'>
      <div > 
        <header>
          <nav className='nav'>
          <h1 className='logo'>LOGO</h1>
          <ul  className='barra'>
            <li className='barra-item'><a>INICIO</a></li>
            <li className='barra-item'><a>ALQUILER EMPRESAS</a></li>
            <li className='barra-item'><a>RESERVA </a></li>
            <li className='barra-item'><a>TERMINOS Y CONDICIONES</a></li>
            <li className='barra-item'><a>CONTACTO</a></li>
          </ul>
        </nav>
        </header>
      </div>
      <div >
      <h1 className="titulo-com" > ReservaTuHotel.com.bo</h1>
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
            <div className='checkbox-container'>
                  <h4>habitaciones</h4>
                  <div className='input-checkbox'>
                        <input 
                          onChange={filterOnCheckbox}
                         type='checkbox'
                         name='habitaciones' 
                         value='Individual'/>
                        <label htmlFor='1'>Individual</label>
                  </div>
                  <div className='input-checkbox'>
                        <input 
                          onChange={filterOnCheckbox}
                         type='checkbox'
                         name='habitaciones' 
                         value='Matrimonial'/>
                        <label htmlFor='2'>Matrimonial</label>
                  </div>
                  <div className='input-checkbox'>
                        <input 
                          onChange={filterOnCheckbox}
                         type='checkbox'
                         name='habitaciones' 
                         value='Familiar'/>
                        <label htmlFor  ='3'>Familiar</label>
                  </div>

            </div>
      </div>
      <div className='contenedor' >
          {categoriasFiltradas.map((value, index) =>{
            return(
              <div  className='contenedor' > 
              <HotelsCard HotelsInfo={value} key={index}/>
              </div>
              )
          })}
      </div>

       <div>
           <img  style={{width:"100%"}}src='https://icgmaster.net/wp-content/uploads/2017/07/MEJORAR-SERVICIO-HOTEL.jpg'/>
        </div >

        <div style={{boxShadow:'0 0 20px', width:"350px", margin:"40px", position:'static'}}>
            <form style={{marginBottom:"20px", width:"500px"}}>
              <h2 style={{color:"GrayText"}}>REALIZA TU RESERVA</h2>
              <label>Nombre:</label>
              <input  style={{display:"block", margin:"5px", }}
                  type='text'
                  name='Nombre'
                  placeholder='Ingresa tu Nombre'
                
              />
               <label>Apellido:</label>
              <input style={{display:"block", margin:"5px", }}
                  type='text'
                  name='lastName'
                  placeholder='Ingresa tu Apellido'
                
              />
              <label>Correo Electronico:</label>
              <input  style={{display:"block", margin:"5px", }}
                  type='text'
                  name='email'
                  placeholder='ejemplo@gmail.com'
                
              />
              <label>Celular:</label>
              <input  style={{display:"block", margin:"5px", }}
                  type='text'
                  name='phone'
                  placeholder='Ingresa tu Telefono'
              />
              <label>Codigo de Reserva:</label>
              <input  style={{display:"block", margin:"5px", }}
                  type='text'
                  name='reserva'
                  placeholder='introduce codigo'
              />
            </form>
            <button style={{padding:"10px 20px"}}>ENVIAR RESERVA</button>


        </div>

        <div>
        <br></br>
        <br></br>
          <h3>Terminos y condiciones</h3>
          
          <p>A continuación, encontrará los Términos y condiciones para los diferentes servicios:.</p>
          
          <p>
          CHECK-IN
          El horario de check in es a las 14:00 h. Para vuelos que llegan temprano en la mañana, las reservas de habitaciones deben hacerse una noche antes de la llegada.
          CHECK-OUT
          El horario de salida es a las 12:00 h. Si desea permanecer en su habitación hasta las 18:00, hay una tarifa del 50%. Después de esta hora, la tarifa es del 100%.
          CANCELACIONES
          No hay cargo por no presentarse si la cancelación se realiza 48 horas antes de la llegada. De lo contrario, procedemos con el cargo de una noche de hospedaje. No se aceptan como válidas las cancelaciones telefónicas. Estas deben ser notificadas por correo electrónico.
          NO SHOW
          Cualquier cancelación o modificación fuera de las políticas de cancelación establecidas se cobrará con una estadía de una noche.
          RESERVAS NO REEMBOLSABLES
          No se aplicarán cancelaciones o modificaciones.
          POLÍTICA INFANTIL
          Los niños menores de 12 años pueden compartir la habitación de sus padres que incluye desayuno, sin costo adicional.
          RESERVAS GRUPaLES
          Las reservas para cinco o más habitaciones están sujetas a condiciones especiales. Suites Camino Real considera las reservas de cinco o más habitaciones como grupo. Además, Suites Camino Real se reserva el derecho de cancelar las reservas de cinco o más habitaciones realizadas a través de Internet. Si estas reservas no se pagan dentro de diez días, serán canceladas. En caso de que el huésped llegue en un período inferior a esta cantidad de días, la reserva debe pagarse en su totalidad al momento de realizar la reserva. Una vez pagado, no se aceptan modificaciones y no se puede ofrecer ningún reembolso o modificación.
          POLÍTICA DE MASCOTAS
          No se permiten mascotas.
          DISCAPACIDADES
          Tenemos equipos e instalaciones de préstamo gratuitos para habilitar una habitación.
          SERVICIOS DE PAGO
          El pago puede hacerse en efectivo con moneda local o dólares estadounidenses y tarjetas de crédito: Visa, Mastercard y American Express.

          </p>
          
        </div>
    </div>
  );
}



export default App;
