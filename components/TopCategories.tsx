import Link from 'next/link';
import Image from 'next/image';
import monitor from '../public/pictures/monitor.jpg';
import laptop from '../public/pictures/laptop.webp';
import desk from '../public/pictures/desk.webp';
import lamp from '../public/pictures/lamp.jpg';
import { BsArrowUpRight } from 'react-icons/bs';

export default function TopCategories() {
  return (
    <>
    <div id="next" className='grid md:flex justify-between mt-6 md:mt-20 xl:mt-24 max-w-[400px] md:max-w-[1100px] mx-auto mb-8 px-6 md:px-0'>
      <h3 className="text-2xl md:text-3xl text-black text-left font-bold">Top<br/> Categories</h3>
      <p className='text-xl text-gray-400 w-full md:w-[420px] mt-3 mb-3 md:mt-0 md:mb-0'>we offer a wide variety of office products to suit your unique style and needs</p>
      <div className='justify-center flex h-12 w-30'>
      <Link href='/Products' className='py-2 px-4 text-md xl:text-xl text-black border-2 border-black rounded-xl flex'>Discover More
      <BsArrowUpRight size={20} className='ml-2'/>
        </Link>
        </div>
      </div>
      <div className="grid md:flex text-white max-w-7xl mx-auto justify-center items-center">
      <div className="flex flex-col w-[300px] md:w-[550px] md:mr-3 z-50">
          <div className="relative h-[200px] md:h-[400px] hover:scale-105 duration-200">
            <Image src={desk} alt="photo 1" fill className="object-cover rounded-3xl"/>
            <div className="absolute bottom-6 left-2 p-1 flex">
              <p className="font-bold text-3xl">Desk</p>
              <Link href='/Products' className='ml-2'>
                <BsArrowUpRight size={30}/>
              </Link>
            </div>
          </div> 
        </div>
        <div className="flex flex-col w-[300px] md:w-[550px]">
          <div className="relative h-[200px] mt-3 md:mt-0 hover:scale-105 duration-200">
            <Image src={monitor} alt="photo 3" fill className="object-cover rounded-3xl"/>
            <div className="absolute bottom-6 left-2 p-1 flex">
              <p className="font-bold text-3xl">Monitor</p>
              <Link href='/Products' className='ml-2'>
                <BsArrowUpRight size={30}/>
              </Link>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-3 mx-auto mt-3'>
          <div className="relative h-[200px] md:h-[190px] w-[300px] md:w-[267px] hover:scale-105 duration-200">
            <Image src={laptop} alt="photo 4" fill className="object-cover rounded-3xl"/>
            <div className="absolute bottom-6 left-2 p-1 flex">
              <p className="font-bold text-3xl">Laptop</p>
              <Link href='/Products' className='ml-2'>
                <BsArrowUpRight size={30}/>
              </Link>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[190px] w-[300px] md:w-[267px] hover:scale-105 duration-200">
            <Image src={lamp} alt="photo 4" fill className="object-cover rounded-3xl"/>
            <div className="absolute bottom-6 left-2 p-1 flex">
              <p className="font-bold text-3xl">Lamp</p>
              <Link href='/Products' className='ml-2'>
                <BsArrowUpRight size={30}/>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
