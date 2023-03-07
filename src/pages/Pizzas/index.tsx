import React, { useContext } from 'react';
import { SnackContext } from '../../App';import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const PizzasPage = () => {
  const { pizzas } = useContext(SnackContext);

  return (
    <React.Fragment>
      <Head title='Pizzas'/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </React.Fragment>
  )
}

export default PizzasPage;