import React, { useState, useEffect} from 'react'
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';
import { getPizzas } from '../../services/api';

import './styles.tsx';

const PizzasPage = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      const pizzasRequest = await getPizzas()
      setPizzas(pizzasRequest.data);
    })()
  }, []);

  return (
    <React.Fragment>
      <Head title='Pizzas'/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </React.Fragment>
  )
}

export default PizzasPage;