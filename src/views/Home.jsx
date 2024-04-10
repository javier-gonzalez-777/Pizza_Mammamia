import { useContext } from "react" // 
import { useNavigate, useParams } from "react-router"
//import { ContextApp } from "../App" // los datos de las Pizzas
import { ContextApp } from "../Context/PizzaContext"
import { Card, Button } from "react-bootstrap";
import React from 'react'

const Home = () => {
    const c = useContext(ContextApp) // las Variables globales
    const { pizzaID } = useParams()
    const navigate = useNavigate()    
    
    const handleClickBtnDetalle = (pizza) => {  // direccion programatica detalle pizza
        navigate(`/pizza/${pizza.name}`)
    }

    const handleClickBtnAgregar = (index)=>{ // Sumamos una pizza al carrito
        c.dataPizzas.map((pizza,i)=>{
            if (i == index){
                pizza.count = pizza.count + 1
                c.setTotal(c.total + pizza.price)
            }
        })

    }

  return (
    <>
       
        <h1>Pizza Mama mia!!!</h1>
        <h3>Tenemos las mejores pizzas que podras encontrar!</h3>
        <div className="row"> 
        
            {c.dataPizzas.map((pizza, index) => {
                return(
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
                  <Button variant="primary" onClick={() => handleClickBtnDetalle(pizza)}>Ver mas </Button>
                  &nbsp;&nbsp;
                  <Button variant="success" onClick={() => handleClickBtnAgregar(index)}>Añadir 🛒</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
