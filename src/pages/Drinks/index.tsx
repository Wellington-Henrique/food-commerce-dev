import React, { useContext } from 'react';
import { SnackContext } from '../../App';
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const DrinksPage = () => {
  const { drinks } = useContext(SnackContext);

  return (
    <React.Fragment>
      <Head title='Bebidas'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}/>
    </React.Fragment>
  )
}

export default DrinksPage;