import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { CartContext } from "./CartContext";
import { BsCart } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from "next/image";
import logo from '../public/logo1.png'

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
}

export default function Navbar() {
    const {selectedProducts, addProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState(false);
    const router = useRouter();
    const path = router.pathname;

    const handleNav = () => {
      setNav(!nav);
    };

    const handleCart = () => {
      setCart(!cart);
    };

    useEffect(() => {
      if (selectedProducts.length > 0) {
          axios.post('/api/cart', {ids:selectedProducts})
          .then(response => {
              setProducts(response.data);
          })
      } else {
          setProducts([]);
      }
  }, [selectedProducts]);

    function addMore(id: string) {
        addProduct(id);
    }

    function addLess(id: string) {
        removeProduct(id);
    }

    let total = 0;
        for (const _id of selectedProducts) {
            const price = products.find(p => p._id === _id)?.price || 0;
            total += price;
    }

    return (
        <nav className="sticky top-0 bg-white p-5 w-full flex border-t border-gray-200 justify-end md:justify-center items-center text-gray-400 shadow-md h-16 z-50">
          <ul className="hidden md:flex items-center">
      <Image src={logo} alt="logo" width={50} height={50}/>
  </ul>
  <ul className='hidden text-xl xl:text-2xl md:flex xl:flex flex-1 justify-center font-medium'>
    <Link href={"/"}>
      <div
        className={
          (path === "/" ? "text-indigo-400 mr-6" : "") +
          " flex justify-center items-center mr-6"}>
        <span>Home</span>
      </div>
    </Link>
    <Link href={"/Products"}>
      <div
        className={
          (path === "/Products" ? "text-indigo-400 mr-6" : "") +
          " flex justify-center items-center mr-6"}>Products
      </div>
    </Link>
    <Link href={"/Contact"}>
      <div
        className={
          (path === "/Contact" ? "text-indigo-400 mr-6" : "") +
          " flex justify-center items-center mr-6"}>Contact
      </div>
    </Link>
  </ul>
  <ul className="hidden md:flex justify-end items-center">
      <div onClick={handleCart} className="relative flex justify-center items-center cursor-pointer">
      <BsCart size={25} className="mr-2"/>
      <span className="absolute top-0 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full">{selectedProducts.length}</span>
    </div>
  </ul>
      
      {/* Hamburger and Cart Icon */}
      <div className="md:hidden flex-1">
      <Image src={logo} alt="logo" width={50} height={50} className=""/>
      </div>
      <div onClick={handleCart} className="md:hidden relative flex justify-center items-center cursor-pointer">
      <BsCart size={25} className="mr-2"/>
      <span className="absolute top-0 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-300 transform translate-x-1/2 -translate-y-1/2 bg-indigo-400 rounded-full">{selectedProducts.length}</span>
    </div>
      <div className='md:hidden justify-end hover:scale-105 duration-200 ml-2' onClick={handleNav}><AiOutlineMenu size={25}/>
          </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>

        {/* Side Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[100%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between text-indigo-400'>
              <div onClick={handleNav} className='rounded-full bg-gray-100 shadow-md p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-3 flex flex-col text-center'>
            <ul className='uppercase text-indigo-400 font-medium'>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Products'>Products</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cart */}
      {/* Overlay */}
      <div
        className={
          cart ? ' fixed right-0 top-0 w-full h-screen bg-black/70' : ''
        }>

        {/* Side Menu */}
        <div
          className={
            cart
              ? 'fixed right-0 top-0 w-[100%] md:w-[35%] lg:w-[30%] xl:w-[25%] h-screen bg-white p-10 ease-in duration-500 overflow-y-scroll'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500 overflow-y-scroll'}>
          <div>
            <div className='flex w-full items-center justify-between text-indigo-300 '>
              <div className="text-xl md:text-2xl text-indigo-400 font-bold">
                <p>Your products: {selectedProducts.length}</p>
              </div>
              <div onClick={handleCart} className='rounded-full bg-gray-100 shadow-md p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
              </div>
              <div className="grid w-72 xl:w-80">
            <div className=" justify-center items-center">
            {!selectedProducts?.length && (
            <>
            <p className="text-xl font-medium mt-10 text-center">Your cart is empty</p>
            <div className="flex justify-center items-center text-center mt-16">
            <div className="bg-indigo-400 rounded-lg border-2 w-52 cursor-pointer">
                <Link href='/Products' className="text-white font-medium">Discover our products!</Link>
                </div>
                </div>
                </>
            )}
    {products && products.length > 0 && (
    <>
    <table className="w-full mt-10">
    <thead>
    <tr className="text-indigo-400">
  <th className="flex">Product</th>
  <th className="w-1/3">Quantity</th>
  <th>Price</th>
</tr>
    </thead>
    <tbody>
        {products.map((product: Product) => (
        <tr key={product._id}>
            <td className="text-gray-500 font-bold">{product.name}
            <img src={product.picture} alt="product photo" className="object-contain max-h-full max-w-full mb-3" width={90} height={50} />
                </td>
            <td>
                <button 
                onClick={() => addLess(product._id)}
                className="bg-indigo-400 text-white w-6 h-6 rounded-lg mr-2">-</button>
            {selectedProducts.filter(id => id === product._id).length}
                <button 
                onClick={() => addMore(product._id)}
                className="bg-indigo-400 text-white w-6 h-6 rounded-lg ml-2">+</button>
            </td>
            <td className="font-medium">
            {selectedProducts.filter(id => id === product._id).length * product.price}$
            </td>
            </tr>  
            ))}
            <tr className="font-bold">
                <td></td>
                <td>Total</td>
                <td className="text-indigo-400">{total}$</td>
                </tr>
            </tbody>
            </table>
          <div className="grid justify-center items-center">
            <div className="flex justify-center items-center text-center mt-16">
              <div className="bg-indigo-400 rounded-lg border-2 w-36 cursor-pointer">
              <button onClick={clearCart} className="text-white font-medium"
              >Clear cart</button>
              </div>
            </div>
          <div className="flex justify-center items-center text-center mt-4">
            <button className="bg-indigo-400 rounded-lg border-2 w-36 cursor-pointer">
              <Link href='/Cart' className="text-white font-medium">Go to checkout</Link>
              </button>
              </div>
              </div>
            </>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
