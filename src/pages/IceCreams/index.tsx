import React, { useContext } from 'react';
import { SnackContext } from '../../App';
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const IceCreamsPage = () => {
  const { iceCreams } = useContext(SnackContext);

  return (
    <React.Fragment>
      <Head title='Sorvetes'/>
      <SnackTitle>Sorvetes</SnackTitle>      
      <Snacks snacks={iceCreams}></Snacks>
    </React.Fragment>
  )
}

export default IceCreamsPage;