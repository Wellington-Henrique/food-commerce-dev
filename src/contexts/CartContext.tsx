import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';

import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
    quantity: number,
    subtotal: number
}

interface removeSnackFromCart {
    id: number
    snack: string
}

interface UpdateCartProps {
    id: number,
    snack: string,
    newQuantity: number
}


interface CartContextProps {
    cart: Snack[]
    addSnackIntoCart: (snack: SnackData) => void
    // removeSnackFromCart: ({id, snack} : removeSnackFromCart) => void
    // updateCart: ({id, snack, newQuantity} : UpdateCartProps) => void
}


export const CartContext = createContext({} as CartContextProps)


interface CarProviderProps {
    children: ReactNode
}

export function CartProvider({children} : CarProviderProps ) {
    const [cart, setCart] = useState<Snack[]>([]);

    function addSnackIntoCart(snack: SnackData) :  void {
        const snackExistentInCart = cart.find(
            item => item.snack === snack.snack && item.id === snack.id
        );

        if (snackExistentInCart) {
            const newCart = cart.map(
                item => {
                    if (item.id === snack.id) {
                        const quantity = item.quantity + 1;
                        const subtotal = item.quantity * item.price;

                        return { ...item, quantity, subtotal}
                    }

                    return item;
                }
            );

            setCart(newCart);
            toast.success(`${snackEmoji(snack.snack)}  Outro(a) ${snack.name} adicionado(a) no pedido!`);
            return;
        }

        const newSnack  = {...snack, quantity: 1, subtotal: snack.price}
        const newCart= [...cart, newSnack];

        setCart(newCart);
        toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado(a) no pedido!`);
    }

    return(
        <CartContext.Provider value={{cart, addSnackIntoCart}}>
            {children}
        </CartContext.Provider>
    )
}