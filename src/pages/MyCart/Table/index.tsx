import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";

import TableDesktop, { } from './TableDesktop';
import TableMobile from "./TableMobile";
import EmptyCart from "../../../components/EmptyCart";

const Table = () => {
    const [ windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
    const { cart } = useCart();

    useEffect(() => {
        function updateTableComponentBasedInWindowWidth () {
            const currentWidth = document.documentElement.clientWidth;

            setWindowWidth(currentWidth);
        }

        window.addEventListener('resize', updateTableComponentBasedInWindowWidth)
        
        return () => {
            window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
        }
    }, [])

    if (!cart.length) {
        return <EmptyCart title='Ops! parece que você não tem pedidos, peça já!'/>
    }

    return (
        windowWidth > 768 ?
        <TableDesktop/>
        : <TableMobile/>
    )
}

export default Table;
