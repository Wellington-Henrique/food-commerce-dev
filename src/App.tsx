import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import { AppRoutes } from './routes'
import { SnackProvider } from './contexts/SnackContext'
import { CartProvider } from './contexts/CartContext'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </SnackProvider>
        <GlobalStyle />
        <Normalize />
      </Theme>
      <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  )
}
