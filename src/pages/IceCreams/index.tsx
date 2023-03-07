import React from 'react';

import { useSnack } from '../../hooks/useSnack';

import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const IceCreamsPage = () => {
  const { iceCreams } = useSnack();

  return (
    <React.Fragment>
      <Head title='Sorvetes'/>
      <SnackTitle>Sorvetes</SnackTitle>      
      <Snacks snacks={iceCreams}></Snacks>
    </React.Fragment>
  )
}

export default IceCreamsPage;