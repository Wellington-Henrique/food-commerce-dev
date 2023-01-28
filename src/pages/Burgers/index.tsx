import React from 'react';
import Head from '../../components/Head';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const BurgersPage = () => {
  return (
      <React.Fragment>
        <Head title='Hámburgueres' description='Nossos melhores burguers'/>
        <SnackTitle>Hambúrgueres</SnackTitle>
      </React.Fragment>
    )
}

export default BurgersPage