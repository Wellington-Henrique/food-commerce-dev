import { useCart } from '../../../hooks/useCart';
import { Container } from '../styles';
import { currencyFormat } from '../../../helpers/currencyFormat';

const PayOrder = () => {
  const { cart, payOrder } = useCart();
  const totalAmout = cart.reduce((acc, item) => acc += item.subtotal, 0);

  return (
    <Container>
      <button
        type="button"
        onClick={payOrder}
      >
        Pagar
      </button>
      <span>Total <strong>{currencyFormat(totalAmout)}</strong></span>
    </Container>
  )
}

export default PayOrder;
