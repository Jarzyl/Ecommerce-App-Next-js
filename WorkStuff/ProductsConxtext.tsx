import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import useLocalStorageState from "use-local-storage-state";

type ContextProps = {
  selectedProducts: any[];
  setSelectedProducts: Dispatch<SetStateAction<any[]>>;
};

type ProductsContextProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext<ContextProps>({
  selectedProducts: [],
  setSelectedProducts: () => {},
});

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState<any[]>('cart', {defaultValue:[]});
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
