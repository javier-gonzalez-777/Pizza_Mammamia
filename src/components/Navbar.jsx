import React from 'react'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextApp } from "../Context/PizzaContext"



const Navbar = () => {
  const c = useContext(ContextApp)
  return (
    <div className="nav">
    <NavLink to='/'> Pizzeria Mamma Mia! 🍕</NavLink>
    <NavLink to='/carrito'>🛒 $ {c.total} </NavLink>
    </div>
)
}

export default Navbar