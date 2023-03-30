import Head from '../../components/Head';
import OrderHeader from '../../components/OderHeader';
import { Container } from './styles';

const MyCart = () => {
  return (
    <Container>
        <Head title='Carrinho'/>
        <OrderHeader/>
    </Container>
  )
}

export default MyCart;