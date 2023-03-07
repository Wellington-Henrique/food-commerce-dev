import React, { useContext } from 'react';
import { SnackContext } from '../../App';
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const BurgersPage = () => {
  const { burgers } = useContext(SnackContext);

  return (
      <React.Fragment>
        <Head title='Hámburgueres' description='Nossos melhores burguers'/>
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={burgers}/>
      </React.Fragment>
    )
}

export default BurgersPage;