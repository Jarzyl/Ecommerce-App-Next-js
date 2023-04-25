import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer () {
    return (
      <footer className="bg-neutral-200 dark:bg-slate-200 text-indigo-300 dark:text-teal-500 text-center">
        <div className="container px-4 py-3 mx-auto">
        <div className="flex justify-center">
          <div className="grid">
          Get a 10% discount on your first purchase by subscribing to the newsletter!
          <input type="text" placeholder="your email" className="w-40 justify-center items-center mx-auto mt-4"/> 
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <ul className="grid grid-cols-2 md:flex">
            <li className="mr-6">About</li>
            <li className="mr-6">Our store</li>
            <li className="mr-6">FAQ</li>
            <li className="mr-6">News</li>
            <li className="mr-6">Careers</li>
          </ul>
        </div>
      </div>
        <hr className="w-1/2 mx-auto h-0.5 bg-gray-300"></hr>
      <div className="bg-neutral-200 dark:bg-slate-200 text-indigo-300 dark:text-teal-500 pt-2 pb-2 text-center xl:text-lg"> Copyright © 2023 | Bartosz Jarzyło | All Rights Reserved
      </div>
    </footer>    
  );
};

export default Footer;