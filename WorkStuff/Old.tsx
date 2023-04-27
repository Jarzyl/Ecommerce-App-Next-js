import { useContext, useState } from "react";
import { ProductsContext } from "./ProductsConxtext";
import Image from "next/image";

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  category: string;
}

export default function Product({ _id, name, price, description, picture }: ProductProps) {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  
  function addProduct(): void {
    setSelectedProducts(prev => [...prev, _id]);
  }

  // function removeProduct(): void {
  //   setSelectedProducts(prev => prev.filter(id => id = _id));
  // } // pozwala wyczyścić cały koszyk np

  return (
    <div className="w-44 md:w-52 xl:w-60 border-2 rounded-sm">
      <div className="p-2 h-48 bg-white">
      <Image src={picture} alt="" className="object-contain max-h-full max-w-full" width={200} height={200} />
        </div>
        <h3 className="font-bold text-lg text-left ml-3">{name}</h3>
        <p className="text-sm mt-1 ml-3 text-gray-500">{description}</p>
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow ml-3 mb-3">${price}</div>
            <button onClick={addProduct} 
            className="bg-indigo-400 text-white  w-7 h-7 rounded-lg mb-3 mr-3">+</button>
      </div>
    </div>
  );
};
