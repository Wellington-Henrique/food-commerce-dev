import React, { useEffect, useState } from 'react';
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';
import { getBurgers } from '../../services/api';

import './styles.tsx';

const BurgersPage = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data);
    })()
  }, []);

  return (
      <React.Fragment>
        <Head title='Hámburgueres' description='Nossos melhores burguers'/>
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={burgers}/>
      </React.Fragment>
    )
}

export default BurgersPage;