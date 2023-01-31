import React, { useState, useEffect} from 'react'
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';
import { getDrinks } from '../../services/api';

import './styles.tsx';

const DrinksPage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks()
      setDrinks(drinksRequest.data);
    })()
  }, []);

  return (
    <React.Fragment>
      <Head title='Bebidas'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}/>
    </React.Fragment>
  )
}

export default DrinksPage;