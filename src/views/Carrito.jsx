import React from 'react'
import { useContext } from "react"
//import { ContextApp } from "../App"
import { ContextApp } from "../Context/PizzaContext"
import { Card, Button } from "react-bootstrap";

const Carrito = () => {

  const c = useContext(ContextApp)

  const handleClickBtnAgregar = (index) => {
    c.dataPizzas.map((pizza, i) => {
        if (i === index) {
            pizza.count = pizza.count + 1
            c.setTotal(c.total + pizza.price)
        }
    })
}
const handleClickBtnRemover = (index) => {
  c.dataPizzas.map((pizza, i) => {
      if (i === index) {
          pizza.count = pizza.count - 1
          c.setTotal(c.total - pizza.price)
      }
  })
}

  return (
    <>
      
        <h3>Detalles del pedido:</h3>
        <div className="row"> 
          {c.dataPizzas.map((pizza, index) => {
            if (pizza.count > 0) {
              return (
                <div className="col-md-4" key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pizza.img}/>
                    <Card.Body>
                           <Card.Title>{pizza.name}</Card.Title>
                           <Card.Text>
                             <p>{pizza.name}</p>
                             <p>${pizza.count * pizza.price}</p>
                             <Button variant="success" onClick={() => handleClickBtnAgregar(index)}>+</Button>
                             &nbsp;&nbsp;<spam>{pizza.count}</spam> &nbsp;&nbsp;
                             <Button variant="danger" onClick={() => handleClickBtnRemover(index)}>-</Button>
                             </Card.Text>
                          </Card.Body>   
                         </Card>
                  </div>
              )
            }
          })
        }
        <h2>Total: ${c.total}</h2>
      </div>
      </>
    )
  }

export default Carrito
