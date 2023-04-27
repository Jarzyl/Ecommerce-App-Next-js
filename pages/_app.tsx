import type { AppProps } from 'next/app';
import { CartContextProvider } from '@/components/CartContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

