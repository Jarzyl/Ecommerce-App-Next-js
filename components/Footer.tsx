import Link from "next/link";
import { useState, useRef } from 'react'

function Footer () {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  function handleSubscribe() {
    const emailInputValue = emailInputRef.current?.value;
    if (!emailInputValue) {
      alert('Please enter a valid e-mail address!');
      return;
    }
    alert(`Check your e-mail: ${emailInputValue} and redeem the code!`);
    setIsSubscribed(true);
    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    }
  }

    return (
      <footer className="bg-gray-100 dark:bg-slate-200 text-indigo-400 dark:text-teal-500 text-center">
        <div className="container px-4 py-8 mx-auto">
        <div className="flex justify-center">
  <div className="text-xl xl:text-3xl flex flex-col items-center">
    <div className="self-start">
      Get a 10% discount on your first purchase by subscribing to the newsletter!
    </div>
        <div className="grid gap-2 md:flex items-center mt-5 md:mt-10">
          <input
            type="email"
            placeholder="your.email@xyz.com"
            ref={emailInputRef}
            className="w-60 mx-2 text-lg focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300 rounded-lg px-2"
          />
          <div>
          <button
            type="submit"
            onClick={handleSubscribe}
            className="text-lg w-32 h-8 font-bold text-white bg-indigo-400 rounded-lg hover:bg-indigo-500 focus:outline-none mx-2">Subscribe!
          </button>
          </div>
        </div>
      </div>
    </div>
        
      </div>
      <div className="bg-gray-100 text-lg">
      <div className="flex justify-center mt-0 md:mt-3 pb-4 text-left">
          <ul className="grid grid-cols-2 md:flex">
            <li className="md:mr-6 cursor-pointer">About</li>
            <li className="md:mr-6 cursor-pointer">Our store</li>
            <li className="md:mr-6 cursor-pointer">FAQ</li>
            <li className="md:mr-6 cursor-pointer">News</li>
            <li className="md:mr-6 cursor-pointer">Careers</li>
            <Link href='/Contact'>Contact</Link>
          </ul>
        </div>
        <hr className="w-1/2 mx-auto h-0.5 bg-indigo-300"></hr>
      <div className=" dark:bg-slate-200 text-indigo-400 dark:text-teal-500 pt-2 pb-2 text-center text-base"> Copyright © 2023 | Bartosz Jarzyło | All Rights Reserved
      </div>
      </div>
    </footer>    
  );
};

export default Footer;