import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "./CartContext";

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  category: string;
}

export default function ProductCart({ _id, name, price, description, picture }: ProductProps) {
    const {removeProduct} = useContext(CartContext);
    const {addProduct} = useContext(CartContext);
    function addToCart() {
      addProduct(_id);
    }

  return (
    <div className="w-44 md:w-52 xl:w-60 border-2 rounded-sm">
      <div className="p-2 h-48 bg-white">
      <Image src={picture} alt="product photo" 
        className="object-contain max-h-full max-w-full" 
        width={200} height={200}/>
        </div>
        <h3 className="text-lg text-left ml-3 text-black">{name}</h3>
        <p className="text-sm mt-1 ml-3 text-gray-500">{description}</p>
        <div className="flex mt-2">
          <div className="text-xl font-medium grow ml-3 mb-3 text-indigo-400">{price}$</div>
            <button onClick={addToCart} 
            className="bg-indigo-400 text-white w-6 h-6 rounded-lg mr-2">+</button>
            <button onClick={() => removeProduct(_id)} 
            className="bg-indigo-400 text-white w-6 h-6 rounded-lg mr-2">-</button>
      </div>
    </div>
  );
};
