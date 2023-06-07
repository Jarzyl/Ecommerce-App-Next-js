import { useContext, useState } from "react";
import Image from "next/image";
import { CartContext } from "./CartContext";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  category: string;
}

export default function ProductCart({ _id, name, price, description, picture }: ProductProps) {
    const {addProduct} = useContext(CartContext);
    const [isLiked, setIsLiked] = useState(false);
    function addToCart() {
      addProduct(_id);
    };

    const handleLike = () => {
      if (!isLiked) {
        toast.success(
          <div className="flex justify-center">
            <span className="text-green-500">Product added to favorites</span>
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
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">Product removed from favorites</span>
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
      }
      setIsLiked(!isLiked);
    };

  return (
    <div className="w-44 md:w-52 xl:w-60 rounded-xl border-4 md:border-8 border-white shadow-md shadow-slate-300 md:hover:scale-110 duration-200">
      <div className="p-2 h-48 bg-gray-100 rounded-t-xl">
        <div className="flex justify-end"> 
        {isLiked ? (
        <AiFillHeart size={25} className="absolute cursor-pointer text-red-500"
          onClick={handleLike}/>
      ) : (
        <AiOutlineHeart size={25} className="absolute cursor-pointer"
          onClick={handleLike}/>
      )}
        </div>
      <Image src={picture} alt="product photo" 
        className="object-contain max-h-full max-w-full" 
        width={200} height={200}/>
        </div>
        <h3 className="text-lg text-left ml-3 text-black font-bold mt-1">{name}</h3>
        <p className="text-sm mt-1 ml-3 text-gray-500">{description}</p>
        <div className="flex mt-2">
          <div className="text-lg font-medium grow ml-3 mb-3 text-blue-500">{price}$</div>
              <BsCart onClick={addToCart} className="text-blue-500 mr-2 cursor-pointer" size={25}/>
      </div>
    </div>
  );
};
