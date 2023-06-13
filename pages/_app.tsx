import type { AppProps } from 'next/app';
import { CartContextProvider } from '@/components/Products/CartContext';
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </CartContextProvider>
  );
};
