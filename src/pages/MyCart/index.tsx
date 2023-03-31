import Head from '../../components/Head';
import OrderHeader from '../../components/OrderHeader';
import Table from './Table';

import { Container } from './styles';

const MyCart = () => {
  return (
    <Container>
        <Head title='Carrinho'/>
        <OrderHeader/>
        <Table/>
    </Container>
  )
}

export default MyCart;