import React from 'react';
import Head from '../../components/Head';
import Snacks from '../../components/Snacks';
import SnackTitle from '../../components/SnackTitle';

import './styles.tsx';

const BurgersPage = () => {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description:
        'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg',
    },
  ]

  return (
      <React.Fragment>
        <Head title='Hámburgueres' description='Nossos melhores burguers'/>
        <SnackTitle>Hambúrgueres</SnackTitle>
        <Snacks snacks={data}/>
      </React.Fragment>
    )
}

export default BurgersPage;