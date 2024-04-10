import { createContext, useEffect, useState } from 'react';

export const ContextApp = createContext();

export const PizzaContextProvider = ({ children }) => {
  const [dataPizzas, setDataPizzas] = useState([]); // aquí guardaremos la información de las pizzas
  const [total, setTotal] = useState(0); // aquí guardaremos el valor total que debe ir arriba de la página

const getPizzas = async () => {
    try {
      const data = await fetch('/pizzas.json');
      const res = await data.json();
      const adaptedPizzas = res.map((pizza) => ({ ...pizza, count: 0 }));
      setDataPizzas(adaptedPizzas);
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <ContextApp.Provider value={{ dataPizzas, setDataPizzas, total, setTotal }}>
      {children}
    </ContextApp.Provider>
  );
}