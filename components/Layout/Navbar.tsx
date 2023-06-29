import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { CartContext } from "../Products/CartContext";
import { BsCart, BsSearch, BsPerson, BsTrash3, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart, AiOutlineMail} from "react-icons/ai";
import logo from "../../public/logo1.png";
import { LikesContext } from "../Products/LikeContext";
import { useShopService } from "@/components/Products/ShopService";
import { Product } from "@/components/Types/Product";

export default function Navbar() {
  const { selectedProducts, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  const { addMore, addLess, removeProd, total } = useShopService();
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const { likedProducts } = useContext(LikesContext);

  const handleNav = () => { setNav((prev) => !prev) };

  const handleCart = () => { setCart((cart) => !cart) };

  useEffect(() => {
    if (selectedProducts.length > 0) {
      axios.post("/api/cart", { ids: selectedProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [selectedProducts]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/Products", label: "Products" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white p-5 md:p-1 w-full flex justify-end md:justify-center items-center text-gray-400 h-16 z-50 max-w-7xl mx-auto">
      <Link href="/" className="hidden md:flex items-center">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-xl text-sky-500">E-Shop</h1>
      </Link>
      <ul className="hidden text-xl md:flex xl:flex flex-1 justify-center font-medium">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className={`ml-10 ${path === item.href ? "text-black" : ""}`}
          >
            <Link href={item.href}>
              <div className="flex justify-center items-center mr-3">
                {item.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex justify-end items-center">
        <BsSearch size={25} className="mr-3 cursor-pointer" />
        <div className="relative flex justify-center items-center cursor-pointer">
          <AiOutlineHeart size={25} className="mr-3 cursor-pointer" />
          <span className="absolute top-0 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">
            {likedProducts.length}
          </span>
        </div>
        <div
          onClick={handleCart}
          className="relative flex justify-center items-center cursor-pointer"
        >
          <BsCart size={25} className="mr-3" />
          <span className="absolute top-0 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">
            {selectedProducts.length}
          </span>
        </div>
        <BsPerson size={25} className="cursor-pointer" />
      </ul>

      {/* Hamburger and Cart Icon */}
      <div className="md:hidden flex-1">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className="text-xl text-sky-500">E-Shop</h1>
        </Link>
      </div>
      <div className="md:hidden flex">
        <BsSearch size={20} className="mr-3" />
        <div className="relative flex justify-center items-center cursor-pointer">
          <AiOutlineHeart size={20} className="mr-3" />
          <span className="absolute top-0 right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">
            {likedProducts.length}
          </span>
        </div>
        <div
          onClick={handleCart}
          className="md:hidden relative flex justify-center items-center"
        >
          <BsCart size={20} className="mr-3" />
          <span className="absolute bottom-1 right-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">
            {selectedProducts.length}
          </span>
        </div>
        <BsPerson size={20} />
        <div
          className="md:hidden justify-end hover:scale-105 duration-200 ml-2"
          onClick={handleNav}
        >
          <AiOutlineMenu size={20} />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between text-sky-500">
              <div
                onClick={handleNav}
                className="rounded-full bg-gray-200 shadow-md p-2.5 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-col text-center">
            <ul className="uppercase text-gray-400 font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.href}
                  onClick={() => setNav(false)}
                  className="py-3"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="mb-2" />
          <div className="grid items-center justify-center mx-10">
            <p className="text-gray-400 text-xl mb-3">
              Stay in contact with us:
            </p>
            <div className="flex justify-center text-sky-500">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                className="mx-2 hover:scale-125 duration-300"
              >
                <BsTwitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="mx-2 hover:scale-125 duration-300"
              >
                <BsFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="mx-2 hover:scale-125 duration-300"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="mailto:shop@gmail.com"
                target="_blank"
                className="mx-2 hover:scale-125 duration-300"
              >
                <AiOutlineMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cart */}
      <div
        className={
          cart ? " fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            cart
              ? "fixed left-0 right-0 md:left-auto top-0  w-auto h-screen bg-white p-6 ease-in duration-500 overflow-y-scroll"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500 overflow-y-scroll"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="text-xl text-sky-500 font-bold">
              <p>Your products: {selectedProducts.length}</p>
            </div>
            {products && products.length > 0 && (
              <>
                <div className="flex justify-center items-center text-center text-black">
                  <BsTrash3 size={20} />
                  <button onClick={clearCart} className="font-bold ml-1">
                    Clear cart
                  </button>
                </div>
              </>
            )}
            <div
              onClick={handleCart}
              className="rounded-full bg-gray-200 shadow-md p-2.5 cursor-pointer"
            >
              <AiOutlineClose className="text-sky-500" />
            </div>
          </div>
          <div className="grid">
            <div className=" justify-center items-center">
              {!selectedProducts?.length && (
                <>
                  <p className="text-xl font-medium mt-10 text-center">
                    Your cart is empty
                  </p>
                  <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-60 h-12 mt-24 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
                    <Link href="/Products">Discover our products!</Link>
                  </div>
                </>
              )}

              {products && products.length > 0 && (
                <>
                  <div className="w-[310px] md:w-[300px] xl:w-[370px] mt-4">
                    <div className="flex justify-between uppercase mb-3">
                      <p>Product</p>
                      <p className="ml-8">Quantity</p>
                      <p>Price</p>
                    </div>
                    <div className="border"></div>
                    {products.map((product: Product) => (
                      <div
                        key={product._id}
                        className="flex items-center justify-between mb-3"
                      >
                        <div className="grid items-center">
                          <Image
                            src={product.picture}
                            alt="product photo"
                            className="object-contain max-h-full max-w-full mr-3"
                            width={90}
                            height={50}
                          />
                          <p className="text-gray-500 font-bold mt-3">
                            {product.name}
                          </p>
                        </div>
                        <div className="grid">
                          <div className="bg-white text-black w-20 border-2 border-gray-100 rounded-lg flex justify-center">
                            <button
                              onClick={() => addLess(product._id)}
                              className="text-slate-700 w-3 mr-2"
                            >
                              -
                            </button>
                            {
                              selectedProducts.filter(
                                (id) => id === product._id
                              ).length
                            }
                            <button
                              onClick={() => addMore(product._id)}
                              className="text-slate-700 w-3 ml-2"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center mt-3 text-black">
                            <BsTrash3 size={20} />
                            <button
                              onClick={() => removeProd(product)}
                              className="font-bold ml-1"
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
                    <div className="border mb-2"></div>
                    <div className="flex items-center justify-between font-bold">
                      <p className="text-xl">Total</p>
                      <p className="text-sky-500 text-xl xl:text-2xl">
                        {total}$
                      </p>
                      <div></div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-52 h-10 mt-24 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
                    <Link href="/Cart">Go to Cart</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}