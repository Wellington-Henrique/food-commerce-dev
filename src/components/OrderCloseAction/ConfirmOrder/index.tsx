import { currencyFormat } from "../../../helpers/currencyFormat";
import { useCart } from "../../../hooks/useCart";

import { Container } from "../styles";

const ConfirmOrder = () => {
  const { cart, confirmOrder } = useCart();
  const totalAmout = cart.reduce((acc, item) => acc += item.subtotal, 0);

  return (
    <Container>
      <button
        type="button"
        onClick={confirmOrder}
      >
        Finalizar Pedido
      </button>
      <span>Total <strong>{currencyFormat(totalAmout)}</strong></span>
    </Container>
  )
}

export default ConfirmOrder;
