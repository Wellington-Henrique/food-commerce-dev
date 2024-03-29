import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';

import { SnackData } from '../interfaces/SnackData'
import { CustomerData } from '../interfaces/CustomerData';

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
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (data: CustomerData) => void
}


export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@FoodCmmerce:cart'
interface CarProviderProps {
  children: ReactNode
}

export function CartProvider({children} : CarProviderProps ) {
  const navigate = useNavigate();

  const [cart, setCart] = useState<Snack[]>(() => {
    const value = localStorage.getItem(localStorageKey);

    if (value) return JSON.parse(value);

    return []
  });

  function saveCart(items: Snack[]) {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
    setCart(items);
  }

  function ClearCart() {
    localStorage.removeItem(localStorageKey);
  }

  function addSnackIntoCart(snack: SnackData) :  void {
    const snackExistentInCart = cart.find(
      item => item.snack === snack.snack && item.id === snack.id
    );

    if (snackExistentInCart) {
      const newCart = cart.map(
          item => {
              if (item.id === snack.id) {
                  const quantity = item.quantity + 1;
                  const subtotal = quantity * item.price;

                  return { ...item, quantity, subtotal}
              }

              return item;
          }
      );

      saveCart(newCart);
      toast.success(`${snackEmoji(snack.snack)}  Outro(a) ${snack.name} adicionado(a) no pedido!`);
      return;
    }

    const newSnack  = {...snack, quantity: 1, subtotal: snack.price}
    const newCart= [...cart, newSnack];

    saveCart(newCart);
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado(a) no pedido!`);
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) :  void {
    if (newQuantity <= 0) return;

    const snackExistentInCart = cart.find(
        item => item.snack === snack.snack && item.id === snack.id
    );

    if (!snackExistentInCart) return;

    const newCart = cart.map(
      item => {
        if (item.id === snack.id && item.snack === snackExistentInCart.snack) {
            return { ...item, quantity: newQuantity, subtotal: item.price * newQuantity}
        }

        return item;
    }
    );

    saveCart(newCart);
  }

  function removeSnackFromCart(snack: Snack) :  void {
    const newCart = cart.filter(item => !(item.id === snack.id && item.snack === snack.snack));

    saveCart(newCart);
    toast.success("Item removido do carrinho!");
  }

  function snackCartIncrement(snack: Snack) :  void {
    updateSnackQuantity(snack, snack.quantity + 1);
  }

  function snackCartDecrement(snack: Snack) :  void {
    updateSnackQuantity(snack, snack.quantity - 1);
  }

  function confirmOrder() :  void {
    navigate('/payment');
  }

  function payOrder(customer: CustomerData) :  void {
    ClearCart();
    return;
  }

  return(
    <CartContext.Provider value={{cart, addSnackIntoCart, removeSnackFromCart, snackCartIncrement, snackCartDecrement, confirmOrder, payOrder}}>
      {children}
    </CartContext.Provider>
  )
}
