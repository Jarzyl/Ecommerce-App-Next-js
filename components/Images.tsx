import React from 'react';
import Image from 'next/image';
import monitor from '../public/pictures/monitor.webp';
import laptop from '../public/pictures/laptop.png';
import chair from '../public/pictures/chair2.png';
import keybord from '../public/pictures/keybord.jpg';
import lamp from '../public/pictures/lamp1.webp';
import desk from '../public/pictures/desk1.1.jpg';
import Link from 'next/link';

export default function Images() {
  return (
    <>
      <div className="grid md:flex md:flex-row md:justify-center md:items-center mx-auto gap-1 md:gap-1 md:w-full text-white">
      <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5 ">
          <Link className="relative xl:h-60 md:h-52  border-2" href='/Category'>
            <Image src={desk} alt="photo 1" width={450} height={200} className="object-contain max-h-full max-w-full" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Desk</span>
            </div>
          </Link>
          <div className="relative xl:h-60 md:h-52 border-2 mt-1 overflow-hidden">
            <Image src={monitor} alt="photo 2" width={400} height={200} className="object-contain max-h-full max-w-full"/>
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Monitor</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5">
          <div className="relative xl:h-60 md:h-52 border-2">
            <Image src={laptop} alt="photo 3" width={450} height={200} className="object-contain max-h-full max-w-full"/>
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Laptop</span>
            </div>
          </div>
          <div className="relative xl:h-60 md:h-52 border-2 mt-1">
            <Image src={chair} alt="photo 4" width={450} height={200} className="object-contain max-h-full max-w-full"/>
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Chair</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5">
          <div className="relative xl:h-60 md:h-52  border-2">
            <Image src={keybord} alt="photo 5" width={450} height={200} className="object-contain max-h-full max-w-full"/>
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Keybord</span>
            </div>
          </div>
          <div className="relative xl:h-60 md:h-52  border-2 mt-1">
            <Image src={lamp} alt="photo 6" width={350} height={200} className="object-contain max-h-full max-w-full"/>
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Lamp</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
