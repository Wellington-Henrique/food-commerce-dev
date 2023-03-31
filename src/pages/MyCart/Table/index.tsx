import { useCart } from "../../../hooks/useCart";

import TableDesktop, { } from './TableDesktop';

const Table = () => {
    const { cart } = useCart();

    if (!cart.length) {
        return <h1>Ops! parce que você não tem pedidos, peça já!</h1>;
    }

    return (
        <TableDesktop/>
    )
}

export default Table;
