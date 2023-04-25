import { useContext } from "react";
import { ProductsContext } from "./ProductsConxtext";

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  category: string;
}

export default function Product({ _id, name, price, description, picture }: ProductProps) {
  const { setSelectedProducts } = useContext(ProductsContext);
  
  function addProduct(): void {
    setSelectedProducts(prev => [...prev, _id]);
  }

  return (
    <div className="w-44 md:w-52 xl:w-60 bg-white border-2">
      <div className="p-4">
        <img src={picture} alt=""/>
      </div>
        <h3 className="font-bold text-lg text-left ml-3">{name}</h3>
      <p className="text-sm mt-1 ml-3 text-gray-500">{description}</p>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow ml-3 mb-3">${price}</div>
        <button onClick={addProduct} 
        className="bg-emerald-400 text-white px-3 rounded-xl mb-3 mr-3">+</button>
      </div>
    </div>
  );
};
