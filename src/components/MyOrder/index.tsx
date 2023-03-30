import { useCart } from "../../hooks/useCart"

import { Container } from "./styles";
import { ReactComponent as CartIcon} from '../../assets/shopping-cart.svg';

export function MyOrder () {
    const { cart } = useCart();

    return (
        <Container to=''>
            <span>Meu Pedido</span>
            <CartIcon/>

            {!!cart.length && <span>{`${cart.length}`.padStart(2, '0')}</span>}
        </Container>
    )
}