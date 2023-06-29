import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CartContextInterface {
  selectedProducts: string[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<any[]>>;
  addProduct: (_id: string) => void;
  deleteProduct: (_id: string) => void;
  removeProduct: (_id: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextInterface>({
  selectedProducts: [],
  setSelectedProducts: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (cartFromLocalStorage) {
      setSelectedProducts(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (selectedProducts?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(selectedProducts));
    }
  }, [selectedProducts]);

  function addProduct(_id: string) {
    if (_id && typeof _id === "string") {
      setSelectedProducts((prev) => [...prev, _id]);
      toast.success(
        <div className="flex justify-center">
          <span className="text-green-500">Product added to cart</span>
        </div>,
        {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      console.log("Invalid product id");
    }
  }

  function deleteProduct(_id: string) {
    setSelectedProducts((prev) => {
      const positionId = prev.indexOf(_id);
      if (positionId !== -1) {
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">Product deleted from cart</span>
          </div>,
          {
            position: "top-center",
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
  }

  function removeProduct(_id: string, quantity: number) {
    setSelectedProducts((prev) => {
      const positionId = prev.indexOf(_id);
      if (positionId !== -1) {
        const updatedProducts = [...prev];
        updatedProducts.splice(positionId, quantity);
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">Product removed from cart</span>
          </div>,
          {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        return updatedProducts;
      }
      return prev;
    });
  }

  function clearCart() {
    setSelectedProducts([]);
    toast.info(
      <div className="flex justify-center">
        <span className="text-blue-500">Cart cleared</span>
      </div>,
      {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        addProduct,
        deleteProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}