import { useContext } from "react"
import { useParams } from "react-router"
//import { ContextApp } from "../App"
import { ContextApp } from "../Context/PizzaContext"
import { Card, Button } from "react-bootstrap";
import React from 'react'

const Pizza = () => {

  const { pizzaID } = useParams()
  const c = useContext(ContextApp)

  const handleClickBtnAgregar = (index) => {
    c.dataPizzas.map((pizza, i) => {
        if (i === index) {
            pizza.count = pizza.count + 1
            c.setTotal(c.total + pizza.price)
        }
    })
}

  return (
    <>
        <div className="row"> 
          {c.dataPizzas.map((pizza, index) => {
            if (pizza.name == pizzaID) {
              return (
                <div className="col-md-4" key={index}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pizza.img}/>
                      <Card.Body>
                           <Card.Title>{pizza.name}</Card.Title>
                           <Card.Text>
                                  <ul>Ingredientes:
                                   {pizza.ingredients.map((ing, index) => {
                                return (
                                    <li key={index}>{ing}</li>
                                  );
                                })}
                          </ul>
                          <h2>$ {pizza.price}</h2>
                        </Card.Text>
                        <Button onClick={() => handleClickBtnAgregar(index)}>Añadir 🛒</Button>
                     </Card.Body>
                  </Card>
                   </div>
                  )
            }
          })}
          </div>
       </>
    )
  }

export default Pizza
