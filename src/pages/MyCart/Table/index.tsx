import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";

import TableDesktop, { } from './TableDesktop';
import TableMobile from "./TableMobile";

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
        return <h1>Ops! parece que você não tem pedidos, peça já!</h1>;
    }

    return (
        windowWidth > 768 ?
        <TableDesktop/>
        : <TableMobile/>
    )
}

export default Table;
