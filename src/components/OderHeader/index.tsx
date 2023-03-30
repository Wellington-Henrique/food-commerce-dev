import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

const OrderHeader = () => {
  return (
    <Container>
        <Link to='/'>
            <img src={logoImg} alt="Food Commerce"/>
        </Link>
    </Container>
  )
}

export default OrderHeader;
