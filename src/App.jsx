import { useState } from 'react'

// import lodearriba from './top'
import './App.css'
import  Header  from "./components/Header.jsx"
import  Workers  from "./components/Workers.jsx"
import Calculator from './components/Calculator.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [number1,setNumber1] = useState(0)
  const [number2,setNumber2] = useState(0)
  const [symbol,setSymbol] = useState(null)
  const [result, setResult] = useState('')
  
  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <>
      <Header />
    <main className="envoltura">
      <Workers />
      
      
       <Calculator />
  
      
      
    </main>
    
    <Footer nombre={'Todos los derechos reservados.'} inc={'Coquetas INC ©'} direccion={'Dirección: Simancas (Madriz)'} telefono={'Teléfono: 917335673 - 635444912'} email={'Email: croquetasINC@hotmail.com'} />
    
    </>
    /* <pie /> */
  )
}

export default App
