import { useCart } from '../../../hooks/useCart';
import { Container } from '../styles';
import { currencyFormat } from '../../../helpers/currencyFormat';

const PayOrder = () => {
  const { cart } = useCart();
  const totalAmout = cart.reduce((acc, item) => acc += item.subtotal, 0);

  return (
      <Container>
          <button
              type="button"
              onClick={() => console.log('Pagando...')}
          >
              Pagar
          </button>
          <span>Total <strong>{currencyFormat(totalAmout)}</strong></span>
      </Container>
  )
}

export default PayOrder;
