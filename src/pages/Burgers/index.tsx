import React from 'react';

import { useSnack } from '../../hooks/useSnack';

import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const BurgersPage = () => {
  const { burgers } = useSnack();

  return (
      <React.Fragment>
        <Head title='Hámburgueres' description='Nossos melhores burguers'/>
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={burgers}/>
      </React.Fragment>
    )
}

export default BurgersPage;