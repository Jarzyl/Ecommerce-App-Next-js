import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "@/components/Products/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LikesProvider } from "@/components/Products/LikeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <LikesProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </LikesProvider>
    </CartContextProvider>
  );
}