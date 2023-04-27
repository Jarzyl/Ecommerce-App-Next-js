import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { BsCart } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const {selectedProducts} = useContext(CartContext);

  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCart = () => {
    setCart(!cart);
  };

    return (
        <nav className="sticky top-0 bg-white p-5 w-full flex border-t border-gray-200 justify-end md:justify-center items-center text-gray-400 shadow-md h-16 z-50">
  <ul className='hidden text-lg xl:text-2xl md:flex xl:flex flex-1 justify-center ml-16'>
    <Link href={"/"}>
      <div
        className={
          (path === "/" ? "text-indigo-400 mr-6" : "") +
          " flex justify-center items-center mr-6"}>
        <span>Home</span>
      </div>
    </Link>
    <Link href={"/Category"}>
      <div
        className={
          (path === "/Category" ? "text-indigo-400 mr-6" : "") +
          " flex justify-center items-center mr-6"}>Category
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
      <span className="absolute top-0 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-300 transform translate-x-1/2 -translate-y-1/2 bg-indigo-400 rounded-full">{selectedProducts.length}</span>
    </div>
  </ul>
      
      {/* Hamburger and Cart Icon */}
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
              ? 'fixed left-0 top-0 w-[100%] md:w-[45%] h-screen bg-white dark:bg-white p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between text-indigo-300 dark:text-teal-500'>
              <div onClick={handleNav} className='rounded-full bg-gray-100 dark:bg-slate-200 shadow-md dark:shadow-teal-500 p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-3 flex flex-col text-center'>
            <ul className='uppercase text-indigo-300 dark:text-teal-500'>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Category'>Category</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Contact'>Contact</Link>
              </li>
            </ul>
            <div className='pt-14'>
              <p className='uppercase tracking-widest text-indigo-300 dark:text-teal-500'>
                Stay in Touch</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] text-indigo-300 dark:text-teal-500'>
                <Link href='mailto:electronics.shop@gmail.com'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full bg-gray-100 dark:bg-slate-200 shadow-md dark:shadow-teal-500 p-2.5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                </Link>
              </div>
            </div>
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
              ? 'fixed right-0 top-0 w-[100%] md:w-[25%] h-screen bg-white dark:bg-white p-10 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between text-indigo-300 dark:text-teal-500'>
              <div className="text-xl md:text-2xl text-gray-400 font-bold">
                <h1>Your Cart {selectedProducts.length}</h1>
              </div>
              <div onClick={handleCart} className='rounded-full bg-gray-100 dark:bg-slate-200 shadow-md dark:shadow-teal-500 p-2.5 cursor-pointer'><AiOutlineClose/>
              </div>
              <div className="bg-blue-500">
              <Link href='/Cart'>click</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
