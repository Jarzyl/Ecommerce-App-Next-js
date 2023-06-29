import { useContext, useState } from "react";
import Image from "next/image";
import { CartContext } from "./CartContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LikesContext } from "./LikeContext";

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  picture: string;
  category: string;
}

export default function ProductCart({
  _id,
  name,
  price,
  description,
  picture,
}: ProductProps) {
  const { addProduct } = useContext(CartContext);
  const { addLike, removeLike, likedProducts } = useContext(LikesContext);
  const [isLiked, setIsLiked] = useState(likedProducts.includes(_id));

  function addToLikes() {
    if (!isLiked) {
      toast.success(
        <div className="flex justify-center">
          <span className="text-green-500">Product added to favorites</span>
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
      addLike(_id);
    } else {
      toast.error(
        <div className="flex justify-center">
          <span className="text-red-500">Product removed from favorites</span>
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
      removeLike(_id);
    }
    setIsLiked(!isLiked);
  }

  function addToCart() {
    addProduct(_id);
  }

  return (
    <div className="w-40 md:w-52 xl:w-60 rounded-xl shadow-sm shadow-slate-300 ">
      <div className="p-2 h-48 bg-gray-100 rounded-t-xl">
        <div className="flex justify-end">
          {isLiked ? (
            <AiFillHeart
              size={25}
              className="absolute cursor-pointer text-red-500"
              onClick={addToLikes}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              className="absolute cursor-pointer"
              onClick={addToLikes}
            />
          )}
        </div>
        <Image
          src={picture}
          alt="product photo"
          className="object-contain max-h-full max-w-full"
          width={200}
          height={200}
        />
      </div>
      <div className="px-3 pb-2">
        <h3 className="text-lg text-left text-black font-bold mt-1">{name}</h3>
        <p className="text-sm mt-1 text-gray-500">{description}</p>
        <div className="flex mt-2">
          <div className="text-lg font-medium grow text-gray-800">{price}$</div>
          <BsCart
            onClick={addToCart}
            className="text-gray-600 cursor-pointer"
            size={25}
          />
        </div>
      </div>
    </div>
  );
}