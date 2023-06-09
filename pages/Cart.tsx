import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "@/components/Products/CartContext";
import Layout from "@/components/Layout/Layout";
import { BsTrash3 } from "react-icons/bs";
import CustomHead from "@/components/Layout/CustomHead";
import { useShopService } from "@/components/Products/ShopService";
import { Product } from "@/components/Types/Product";

export default function CartPage() {
  const { selectedProducts, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const { addMore, addLess, removeProd, total } = useShopService();

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
      <CustomHead title="Ecommerce Shop | Cart" icon="/shop.png" />
      <Layout>
        <div className="max-w-[400px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto bg-white justify-center items-center mt-6">
          <div className="grid md:flex justify-center text-center">
            {!selectedProducts?.length && (
              <div className="grid">
                <h1 className="text-xl font-medium mt-10 text-center text-red-500 ">
                  Your cart is empty!
                </h1>
                <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-44 h-10 mt-24 mb-4 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
                  <Link href="/">Continue shopping</Link>
                </div>
              </div>
            )}

            {products && products.length > 0 && (
              <>
                <div className="w-[330px] md:w-[500px] xl:w-[700px] mx-auto">
                  <div className="flex justify-between">
                    <p className="text-3xl md:text-4xl xl:text-5xl text-black font-bold mt-8 mb-6">
                      Cart
                    </p>
                    <div className="flex justify-center items-center text-center text-black mt-2">
                      <BsTrash3 size={15} />
                      <button
                        onClick={clearCart}
                        className="text-md md:text-lg font-bold ml-1"
                      >
                        Clear cart
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between uppercase mb-3 text-gray-300 text-base md:text-xl">
                    <p>Product</p>
                    <p className="ml-4 md:ml-12">Quantity</p>
                    <p>Price</p>
                  </div>
                  <div className="border"></div>
                  {products.map((product: Product) => (
                    <div
                      key={product._id}
                      className="flex items-center justify-between mb-7"
                    >
                      <div className="grid xl:flex items-center">
                        <div className="relative h-[130px] w-[120px] lg:h-[190px] lg:w-[190px]">
                          <Image
                            src={product.picture}
                            alt="product photo"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-gray-500 font-bold w-28 mt-4 md:mt-1">
                          {product.name}
                        </p>
                      </div>
                      <div className="grid mr-6 md:mr-12 xl:mr-44">
                        <div className="bg-white text-black w-20 border-2 border-gray-100 rounded-lg flex justify-center">
                          <button
                            onClick={() => addLess(product._id)}
                            className="text-slate-700 w-3 mr-2"
                          >
                            -
                          </button>
                          {
                            selectedProducts.filter((id) => id === product._id)
                              .length
                          }
                          <button
                            onClick={() => addMore(product._id)}
                            className="text-slate-700 w-3 ml-2"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center mt-3 ml-2 text-black">
                          <BsTrash3 size={15} />
                          <button
                            onClick={() => removeProd(product)}
                            className="text-sm font-bold ml-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="font-bold text-black">
                        {selectedProducts.filter((id) => id === product._id)
                          .length * product.price}
                        $
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-white w-72 h-64 md:h-full xl:w-96 border-2 border-gray-100 rounded-lg mx-auto mt-10 text-lg md:text-xl xl:text-2xl ml-6 lg:ml-0 p-2">
                  <div className="p-4 text-gray-400">
                    <div className="flex justify-between mb-4">
                      <p>Subtotal</p>{" "}
                      <p className="font-bold text-black">{total}$</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p>Discount</p> <p className="text-gray-300">0$</p>
                    </div>
                    <div className="border w-64 xl:w-72 mx-auto mb-4"></div>
                    <div className="flex justify-between text-black">
                      <p>Grand Total</p> <p className="font-bold">{total}$</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-52 h-10 mt-2 mb-4 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
                    <Link href="/Checkout">Checkout now</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}