import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface CartContextInterface {
  selectedProducts: any[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<any[]>>;
  addProduct: (_id: string) => void;
  removeProduct: (_id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextInterface>({
  selectedProducts: [],
  setSelectedProducts: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export function CartContextProvider({children}: {children: React.ReactNode}) {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('cart');
    if (cartFromLocalStorage) {
      setSelectedProducts(JSON.parse(cartFromLocalStorage));
    }
  }, []);
  
  useEffect(() => {
    if (selectedProducts?.length > 0) {
      localStorage.setItem('cart', JSON.stringify(selectedProducts));
    }
  }, [selectedProducts]);

  function addProduct(_id: string) {
    if (_id && typeof _id === 'string') {
      setSelectedProducts(prev => [...prev, _id]);
      toast.success(
        <div className="flex justify-center">
          <span className="text-green-500">Product added to cart</span>
        </div>,
        {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      console.log('Invalid product id');
    }
  }

    function removeProduct(_id: string) {
      setSelectedProducts(prev => {
        const positionId = prev.indexOf(_id);
        if (positionId !== -1) {
          toast.error(
            <div className="flex justify-center">
              <span className="text-red-500">Product removed from cart</span>
            </div>,
            {
              position: 'top-center',
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          return prev.filter((value, index) => index !== positionId);
        }
        return prev;
      });
    };

    function clearCart() {
      setSelectedProducts([]);
    }

    return (
        <CartContext.Provider value={{selectedProducts, setSelectedProducts, addProduct, removeProduct, clearCart }}>
          {children}
        </CartContext.Provider>
      );
};
