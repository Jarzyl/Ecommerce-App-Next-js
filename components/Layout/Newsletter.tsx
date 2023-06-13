import Image from 'next/image';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newsletter from '../../public/pictures/news.jpg';

export default function Newsletter () {
  const [, setIsSubscribed] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  function handleSubscribe() {
    const emailInputValue = emailInputRef.current?.value;
    if (!emailInputValue) {
      toast.error(
        <div className="flex justify-center">
          <span className="text-red-500">Please enter a valid e-mail address!</span>
        </div>,
      {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
    toast.success(
      <div className="flex justify-center">
          <span className="text-green-500">Check your e-mail: 
          {emailInputValue} and register</span>
        </div>,
      {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
    setIsSubscribed(true);
    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    };
  };
  
    return (
      <>
      <div className='relative max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-[300px] mx-auto mt-16 md:mt-48 mb-10 md:mb-20'>
        <div className='bg-black' style={{ opacity: 0.3 }}>
      <Image src={newsletter} alt='Office image' fill quality={100} className="object-cover rounded-3xl"
      />
      </div>
      <div className='absolute top-4 left-0 w-full h-full flex flex-col items-center justify-center'>
        <div className='text-center text-black'>
          <p className='text-2xl md:text-4xl xl:text-5xl font-bold'>Subscribe and Earn 20% Off</p>
          <p className="text-base md:text-xl mt-4">Discover new arrivals and inspiration, plus get 20% off your<br/> first order on full-priced items.</p>
        </div>
        <div className="grid gap-2 md:flex items-center mt-5 md:mt-10 text-xl">
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailInputRef}
            className="w-60 h-12 mx-2 text-lg focus:outline-none focus:placeholder-blue-300 rounded-lg px-2 mb-2 md:mb-0"
          />
          <div className='flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-28 h-12 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200'>
          <button
            type="submit"
            onClick={handleSubscribe}
            >Subscribe!
          </button>
          </div>
        </div>
      </div>
    </div>
    </>    
  );
};