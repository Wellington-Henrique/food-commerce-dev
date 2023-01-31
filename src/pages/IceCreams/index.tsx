import React, { useState, useEffect} from 'react'
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';
import { getIceCreams } from '../../services/api';

import './styles.tsx';

const IceCreamsPage = () => {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    (async () => {
      const iceCreamsRequest = await getIceCreams()
      setIceCreams(iceCreamsRequest.data);
    })()
  }, []);

  return (
    <React.Fragment>
      <Head title='Sorvetes'/>
      <SnackTitle>Sorvetes</SnackTitle>      
      <Snacks snacks={iceCreams}></Snacks>
    </React.Fragment>
  )
}

export default IceCreamsPage;