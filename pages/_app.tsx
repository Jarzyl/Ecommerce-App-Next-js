import { CartContextProvider } from '@/components/CartContext';
import { ProductsContextProvider } from '@/components/ProductsConxtext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
    {/* // <ProductsContextProvider> */}
      <Component {...pageProps} />
    {/* // </ProductsContextProvider> */}
    </CartContextProvider>
  );
}

