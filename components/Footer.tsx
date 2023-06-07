import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';

function Footer () {
    return (
      <footer className="bg-white text-center lg:text-left mt-10">
    <div className="flex items-center justify-center border-b-2 p-3  lg:justify-end">
    <div className="mr-12 hidden lg:block">
      <p className="text-slate-400 text-xl md:text-xl xl:text-2xl">Stay in contact with us:</p>
    </div>
    <div className="flex justify-center text-blue-500">
      <a href="https://twitter.com/?lang=en" target="_blank" className="mx-2 hover:scale-125 duration-300"><BsTwitter size={20}/></a>
      <a href="https://www.facebook.com/" target="_blank" className="mx-2 hover:scale-125 duration-300"><BsFacebook size={20}/></a>
      <a href="https://www.instagram.com/" target="_blank" className="mx-2 hover:scale-125 duration-300"><BsInstagram size={20}/></a>
      <a href="mailto:shop@gmail.com" target="_blank" className="mx-2 hover:scale-125 duration-300"><AiOutlineMail size={20}/></a>
    </div>
  </div>
  <div className="mx-6 py-4 text-left">
    <div className="grid gap-5 md:gap-8 md:grid-cols-3 lg:grid-cols-3">
      <div>
        <h6 className="mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl flex items-center justify-center font-semibold md:justify-start text-blue-600"> Shop
        </h6>
        <p className="md:w-80 text-slate-400 xl:text-xl">
        Transform your workspace with our premium office supplies. Shop now for top-quality office furniture, stationery, and accessories to create an efficient and stylish office environment.
        </p>
      </div>
      <div className="text-slate-400 text-center md:text-left">
        <h6 className="mb-3 text-lg md:text-xl lg:text-2xl xl:text-3xl flex justify-center font-semibold md:justify-start text-blue-600">Useful links
        </h6>
        <div className="xl:text-xl">
        <p className="mb-2">
          <Link href="#!">About</Link>
        </p>
        <p className="mb-2">
          <Link href="#!">Our store</Link>
        </p>
        <p className="mb-2">
          <Link href="#!">FAQ</Link>
        </p>
        <p className="mb-2">
          <a href="#!">Privacy Policy</a>
        </p>
        <p>
          <a href="#!">Terms and Conditions</a>
        </p>
        </div>
      </div>
        <div className="text-slate-400">
          <h6 className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl flex justify-center font-semibold md:justify-start text-blue-600">Contact</h6>
          <p className="mb-4 xl:text-xl flex items-center justify-center md:justify-start">
          1234 1st Ave<br/>Seattle, WA 98101
          </p>
          <p className="xl:text-xl flex items-center justify-center md:justify-start"> 999-888-444
          </p>
        </div>
        </div>
      </div>
    <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
        <div className="bg-white pt-2 pb-2 text-center xl:text-lg text-blue-600"> Copyright © 2023 | Bartosz Jarzyło | All Rights Reserved
      </div>
  </footer>
  );
};

export default Footer;