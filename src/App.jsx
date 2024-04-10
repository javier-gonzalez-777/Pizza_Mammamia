//import { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'

import Home from './views/Home'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import Navbar from './components/Navbar'
import { PizzaContextProvider } from './Context/PizzaContext'; // Importa el nuevo contexto
import './App.css'
//import { NavLink } from 'react-router-dom'

function App() {


  
  return (
    <>
        <PizzaContextProvider> {/* Usa el PizzaContextProvider */}
             <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/pizza/:pizzaID' element={<Pizza />}/>
                    <Route path='/carrito' element={<Carrito />}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>

       </PizzaContextProvider>
     
    </>
  )
}

export default App
