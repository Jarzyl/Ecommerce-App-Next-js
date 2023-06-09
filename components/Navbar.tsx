import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { CartContext } from "./CartContext";
import { BsCart, BsSearch, BsPerson, BsTrash3 } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import Image from "next/image";
import logo from '../public/logo1.png';
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
}

export default function Navbar() {
    const {selectedProducts, addProduct, deleteProduct, removeProduct, clearCart} = useContext(CartContext);
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
        deleteProduct(id);
    }

    function removeProd(product: Product) {
      removeProduct(product._id, selectedProducts.filter(id => id === product._id).length);
    }
    
    let total = 0;
        for (const _id of selectedProducts) {
            const price = products.find(p => p._id === _id)?.price || 0;
            total += price;
    }

    return (
        <nav className="sticky top-0 bg-white p-5 w-full flex justify-end md:justify-center items-center text-gray-400 h-16 z-50 max-w-7xl mx-auto">
          <Link href='/' className="hidden md:flex items-center">
      <Image src={logo} alt="logo" width={50} height={50}/>
      <h1 className="text-xl text-sky-500">E-Shop</h1>
  </Link>
  <ul className='hidden text-xl md:flex xl:flex flex-1 justify-center font-medium mr-10'>
    <Link href={"/"}>
      <div
        className={
          (path === "/" ? "text-black mr-6" : "") +
          " flex justify-center items-center mr-6"}>
        <span>Home</span>
      </div>
    </Link>
    <Link href={"/Products"}>
      <div
        className={
          (path === "/Products" ? "text-black mr-6" : "") +
          " flex justify-center items-center mr-6"}>Products
      </div>
    </Link>
    <Link href={"/Contact"}>
      <div
        className={
          (path === "/Contact" ? "text-black mr-6" : "") +
          " flex justify-center items-center mr-6"}>Contact
      </div>
    </Link>
  </ul>
  <ul className="hidden md:flex justify-end items-center">
      <BsSearch size={20} className="mr-2"/>
      <AiOutlineHeart size={20} className="mr-2"/>
      <div onClick={handleCart} className="relative flex justify-center items-center cursor-pointer">
      <BsCart size={20} className="mr-3"/>
      <span className="absolute top-0 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full">{selectedProducts.length}</span>
    </div>
    <BsPerson size={20} className="mr-2"/>
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
      <div className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          
        <div className={ nav
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
      <div className={ cart ? ' fixed right-0 top-0 w-full h-screen bg-black/70' : ''}>

        <div className={ cart
              ? 'fixed right-0 top-0 w-[100%] md:w-[35%] xl:w-[26%] h-screen bg-white p-6 ease-in duration-500 overflow-y-scroll'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500 overflow-y-scroll'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div className="text-xl text-sky-500 font-bold">
                <p>Your products: {selectedProducts.length}</p>
              </div>
              <div className="flex justify-center items-center text-center text-black">
              <BsTrash3 size={20} />
              <button onClick={clearCart} className="font-bold ml-1"
              >Clear cart</button>
            </div>
              <div onClick={handleCart} className='rounded-full bg-gray-200 shadow-md p-2.5 cursor-pointer'><AiOutlineClose className="text-sky-500"/>
              </div>
              </div>
              <div className="grid w-72 xl:w-80">
            <div className=" justify-center items-center">
            {!selectedProducts?.length && ( <>
            <p className="text-xl font-medium mt-10 text-center">Your cart is empty</p>
            <div className="flex justify-center items-center text-center mt-16">
            <div className="bg-sky-500 rounded-lg border-2 w-52 cursor-pointer">
                <Link href='/Products' className="text-black font-medium">Discover our products!</Link>
                </div>
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
        <div key={product._id} className="flex items-center justify-between mb-3">
          <div className="grid items-center">
            <Image src={product.picture} alt="product photo" className="object-contain max-h-full max-w-full mr-3" width={90} height={50} />
            <p className="text-gray-500 font-bold">{product.name}</p>
          </div>
          <div className="grid">
          <div className="bg-white text-black w-20 border-2 border-gray-100 rounded-lg flex justify-center">
            <button onClick={() => addLess(product._id)} className="text-slate-700 w-3 mr-2">-</button>
            {selectedProducts.filter(id => id === product._id).length}
            <button onClick={() => addMore(product._id)} className="text-slate-700 w-3 ml-2">+</button>
          </div>
          <div className="flex items-center mt-3 text-black">
            <BsTrash3 size={20} />
            <button onClick={() => removeProd(product)} className="font-bold ml-1">Remove</button>
          </div>
          </div>
          <p className="font-bold text-black">
            {selectedProducts.filter(id => id === product._id).length * product.price}$
          </p>
        </div>))}
        <div className="border mb-2"></div>
      <div className="flex items-center justify-between font-bold">
        <p className="text-xl">Total</p>
        <p className="text-sky-500 text-xl xl:text-2xl">{total}$</p>
        <div></div>
      </div>
      <div className="flex justify-center items-center text-center mt-16">
            <button className="bg-sky-500 rounded-lg w-36 cursor-pointer">
              <Link href='/Cart' className="text-black font-bold">Go to Cart</Link>
              </button>
              </div>
          </div>
            </>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
