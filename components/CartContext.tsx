import { createContext, useEffect, useState } from "react";

interface CartContextInterface {
  selectedProducts: any[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<any[]>>;
  addProduct: (_id: string) => void;
  removeProduct: (_id: string) => void;
}

export const CartContext = createContext<CartContextInterface>({
  selectedProducts: [],
  setSelectedProducts: () => {},
  addProduct: () => {},
  removeProduct: () => {},
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
      } else {
        console.log('Invalid product id');
      };
    };

    function removeProduct(_id: string) {
      setSelectedProducts(prev => {
        const positionId = prev.indexOf(_id);
        if (positionId !== -1) {
          return prev.filter((value,index) => index !== positionId);
        }
        return prev;
      });
    };

    return (
        <CartContext.Provider value={{selectedProducts, setSelectedProducts, addProduct, removeProduct }}>
          {children}
        </CartContext.Provider>
      );
};
