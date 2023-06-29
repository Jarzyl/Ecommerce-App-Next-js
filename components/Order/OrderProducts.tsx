import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { CartContext } from "@/components/Products/CartContext";
import { useShopService } from "../Products/ShopService";
import { Product } from "@/components/Types/Product";

export default function OrderProducts() {
  const { selectedProducts } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const { total } = useShopService();

  useEffect(() => {
    if (selectedProducts.length > 0) {
      axios.post("/api/cart", { ids: selectedProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [selectedProducts]);

  return (
    <>
      {products && products.length > 0 && (
        <>
          <div className="flex justify-between font-bold text-gray-700 mt-2">
            {" "}
            Your products
          </div>
          {products.map((products: Product) => (
            <div
              key={products._id}
              className="flex items-center justify-between mb-3"
            >
              <div className="grid md:flex items-center">
                <Image
                  src={products.picture}
                  alt="products photo"
                  className="object-contain max-h-full max-w-full mr-3"
                  width={70}
                  height={50}
                />
                <p className="text-gray-500 text-base">{products.name}</p>
              </div>
              <p className="font-bold text-gray-700">
                {selectedProducts.filter((id) => id === products._id).length *
                  products.price}
                $
              </p>
            </div>
          ))}
          <hr className="w-[300px] md:w-[520px] mb-3" />
          <div className="text-lg md:text-xl">
            <div className="text-gray-400">
              <div className="flex justify-between mb-3">
                <p className="text-gray-600">Subtotal</p>{" "}
                <p className="font-bold text-gray-700">{total}$</p>
              </div>
              <hr className="w-[300px] md:w-[520px] mb-3" />
              <div className="flex justify-between mb-3">
                <p>Applied discount code</p>{" "}
                <div className="bg-gray-200 border h-7 items-center justify-center flex rounded-lg p-1 text-base font-bold text-gray-600">
                  0% OFF
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <p>Discount</p> <p className="text-gray-300">-0$</p>
              </div>
              <div className="flex justify-between mb-3">
                <p>Shipment cost</p> <p className="text-gray-300">0$</p>
              </div>
              <hr className="w-[300px] md:w-[520px] mb-3" />
              <div className="flex justify-between text-gray-700">
                <p>Grand Total</p> <p className="font-bold">{total}$</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-52 h-10 mt-5 mb-4 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
            <Link href="/">Continue shopping</Link>
          </div>
        </>
      )}
    </>
  );
}