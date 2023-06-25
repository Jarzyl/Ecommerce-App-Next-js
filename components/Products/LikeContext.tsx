import { createContext, useState, ReactNode } from "react";

interface LikesContextProps {
  likedProducts: string[];
  addLike: (productId: string) => void;
  removeLike: (productId: string) => void;
}

export const LikesContext = createContext<LikesContextProps>({
  likedProducts: [],
  addLike: () => {},
  removeLike: () => {},
});

interface LikesProviderProps {
  children: ReactNode;
}

export const LikesProvider = ({ children }: LikesProviderProps) => {
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const addLike = (productId: string) => {
    setLikedProducts((prevProducts) => [...prevProducts, productId]);
  };

  const removeLike = (productId: string) => {
    setLikedProducts((prevProducts) =>
      prevProducts.filter((id) => id !== productId)
    );
  };

  return (
    <LikesContext.Provider value={{ likedProducts, addLike, removeLike }}>
      {children}
    </LikesContext.Provider>
  );
};
