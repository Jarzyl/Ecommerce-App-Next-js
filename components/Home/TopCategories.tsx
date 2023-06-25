import Link from "next/link";
import Image from "next/image";
import monitor from "../../public/pictures/monitor.jpg";
import laptop from "../../public/pictures/laptop.webp";
import desk from "../../public/pictures/whyus.webp";
import lamp from "../../public/pictures/lamp.jpg";
import { BsArrowUpRight } from "react-icons/bs";

export default function TopCategories() {
  return (
    <>
      <div
        className="grid md:flex justify-between mt-10 md:mt-32 xl:mt-40 max-w-[400px] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-8 px-6 md:px-0"
      >
        <p className="text-2xl md:text-3xl text-black text-left font-bold">
          Top
          <br /> Categories
        </p>
        <p className="text-xl text-gray-400 w-full md:w-[420px] mt-3 mb-3 md:mt-0 md:mb-0">
          we offer a wide variety of office products to suit your unique style
          and needs
        </p>
        <div className="justify-center flex h-12 w-30">
          <Link
            href="/Products"
            aria-label="Check products"
            className="py-2 mb-1 px-3 text-md xl:text-xl text-black border-2 border-gray-400 rounded-xl flex"
          >
            Discover More
            <BsArrowUpRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="grid md:flex text-white md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto justify-center items-center">
        <div className="flex flex-col w-[300px] md:w-[500px] lg:w-[550px] md:mr-3 z-40">
          <div className="relative h-[200px] md:h-[400px] lg:hover:scale-105 duration-200">
            <Image
              src={desk}
              alt="photo 1"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/5 md:h-1/5 bg-black/50 rounded-b-3xl"></div>
            <div className="absolute bottom-3 left-2 p-1 flex">
              <p className="font-bold text-3xl">Desks</p>
              <Link
                href="/Products"
                aria-label="Check products"
                className="ml-2"
              >
                <BsArrowUpRight size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[300px] md:w-[500px] lg:w-[550px]">
          <div className="relative h-[200px] md:h-[190px] mt-3 md:mt-0 lg:hover:scale-105 duration-200">
            <Image
              src={monitor}
              alt="photo 3"
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/5 md:h-1/3 bg-black/50 rounded-b-3xl"></div>
            <div className="absolute bottom-3 left-2 p-1 flex">
              <p className="font-bold text-3xl">Monitors</p>
              <Link
                href="/Products"
                aria-label="Check products"
                className="ml-2"
              >
                <BsArrowUpRight size={30} />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mx-auto mt-3">
            <div className="relative h-[200px] md:h-[190px] w-[300px] md:w-[190px] lg:w-[217px] xl:w-[267px] lg:hover:scale-105 duration-200">
              <Image
                src={laptop}
                alt="photo 4"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-2/5 md:h-1/3 bg-black/50 rounded-b-3xl"></div>
              <div className="absolute bottom-3 left-2 p-1 flex">
                <p className="font-bold text-3xl">Laptops</p>
                <Link
                  href="/Products"
                  aria-label="Check products"
                  className="ml-2"
                >
                  <BsArrowUpRight size={30} />
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[190px] w-[300px] md:w-[190px] lg:w-[217px] xl:w-[267px] lg:hover:scale-105 duration-200">
              <Image
                src={lamp}
                alt="photo 4"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-2/5 md:h-1/3 bg-black/50 rounded-b-3xl"></div>
              <div className="absolute bottom-3 left-2 p-1 flex">
                <p className="font-bold text-3xl">Lamps</p>
                <Link
                  href="/Products"
                  aria-label="Check products"
                  className="ml-2"
                >
                  <BsArrowUpRight size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
