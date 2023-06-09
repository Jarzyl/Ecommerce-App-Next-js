import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { BsInstagram, BsFacebook, BsTwitter, BsArrowUp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const socialLinks = [
    {
      icon: <BsTwitter size={20} />,
      url: "https://twitter.com/?lang=en",
      label: "Twitter",
    },
    {
      icon: <BsFacebook size={20} />,
      url: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: <BsInstagram size={20} />,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: <AiOutlineMail size={20} />,
      url: "mailto:e-shop@gmail.com",
      label: "E-mail",
    },
  ];

  return (
    <footer className="bg-white text-center lg:text-left mt-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-center border-b p-3  lg:justify-end mx-10">
        <div className="mr-12 hidden lg:block">
          <p className="text-slate-400 text-xl md:text-xl xl:text-2xl">
            Stay in contact with us:
          </p>
        </div>
        <div className="flex justify-center text-sky-500">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 hover:scale-125 duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="px-10 pt-3 text-left">
        <div className="grid md:grid-cols-5 gap-5 md:gap-32">
          <div className="md:w-40 lg:w-56">
            <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">
              E-Shop
            </p>
            <p className=" text-slate-400 text-sm xl:text-md ml-0 md:ml-1 text-center md:text-left">
              Transform your workspace with our premium office supplies. Shop
              now for top-quality office furniture, stationery, and accessories
              to create an efficient and stylish office environment.
            </p>
          </div>
          <div className="text-slate-400 text-center md:text-left">
            <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">
              Company
            </p>
            <div className="text-sm xl:text-lg ml-0 md:ml-1">
              <p className="mb-2">
                <Link href="#!">About</Link>
              </p>
              <p className="mb-2">
                <Link href="#!">Our store</Link>
              </p>
              <p className="mb-2">
                <Link href="#!">Catalogue</Link>
              </p>
              <p className="mb-2">
                <Link href="/Contact">Contact</Link>
              </p>
            </div>
          </div>
          <div className="text-slate-400 text-center md:text-left">
            <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">
              Products
            </p>
            <div className="text-sm xl:text-lg ml-0 md:ml-1">
              <p className="mb-2">
                <Link href="#!">Desks</Link>
              </p>
              <p className="mb-2">
                <Link href="#!">Chairs</Link>
              </p>
              <p className="mb-2">
                <Link href="#!">Laptops</Link>
              </p>
              <p className="mb-2">
                <Link href="#!">All</Link>
              </p>
            </div>
          </div>
          <div className="text-slate-400">
            <p className="mb-3 text-xl xl:text-2xl flex justify-center font-semibold md:justify-start text-black">
              Contact
            </p>
            <p className="mb-4 text-sm xl:text-lg text-center md:text-left flex items-center justify-center md:justify-start">
              1234 1st Ave
              <br />
              Seattle, WA 98101
            </p>
            <p className="text-sm xl:text-lg flex items-center justify-center md:justify-start">
              {" "}
              999-888-444
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-3 md:mt-6">
            <div className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer bg-black">
              <ScrollLink
                to="top"
                smooth={true}
                duration={500}
                className="block"
              >
                <BsArrowUp size={25} className="text-sky-500" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b p-3 mx-10"></div>
      <div className="pt-6 pb-4 text-sm grid md:flex justify-center md:justify-between font-bold">
        <p className="text-gray-600 ml-0 md:ml-10">
          Copyright © 2023 | Bartosz Jarzyło | All Rights Reserved
        </p>
        <p className="text-black mt-3 md:mt-0 mr-0 md:mr-10">
          {" "}
          Privacy Policy | Terms & Conditions | Cookie Policy
        </p>
      </div>
    </footer>
  );
}
