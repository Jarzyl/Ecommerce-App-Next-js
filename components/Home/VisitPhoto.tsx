import Link from "next/link";
import Image from "next/image";
import office from '../../public/pictures/homeoffice.jpg';
import { BsArrowDown } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

export default function VisitPhoto() {
  return (
    <div className='relative max-w-xs h-[470px] md:max-w-5xl md:h-[430px] xl:max-w-5xl xl:h-[600px] mx-auto mt-6'>
        <Image src={office} alt='Office image' fill quality={100} className="rounded-3xl"/>
        <div className='absolute top-10 left-0 w-full h-full flex items-center justify-center'>
            <div className='text-center text-white'>
                <h1 className='text-3xl md:text-4xl xl:text-5xl'>Make Your Room Comfortable & Useful</h1>
                <h2 className="text-xl mt-4">With a focus on design and functionality, Beasts offers <br/> a balance between comfort and practicality</h2>
                <Link href='/Products' className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2 bg-blue-300 border-blue-300 rounded-lg hover:scale-110 duration-200'>Shop Now</Link>
                <div className="flex justify-center mt-6 md:mt-20 xl:mt-48">
                    <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                        <ScrollLink to="next" smooth={true} duration={400} className="block">
                        <BsArrowDown size={30} color="white"/></ScrollLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};