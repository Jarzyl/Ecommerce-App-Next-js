import React from 'react'
import Image from 'next/image'
import welcome from '../public/pictures/er.jpg'
import Link from 'next/link'

export default function Images() {
  return (
    <>
      <div className="grid md:flex md:flex-row md:justify-center md:items-center mx-auto gap-1 md:gap-1 md:w-full text-white">
      <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5 ">
          <Link className="relative" href='/Category'>
            <Image src={welcome} alt="photo 1" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Desk</span>
            </div>
          </Link>
          <div className="relative mt-1">
            <Image src={welcome} alt="photo 2" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Monitor</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5">
          <div className="relative">
            <Image src={welcome} alt="photo 3" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Laptop</span>
            </div>
          </div>
          <div className="relative mt-1">
            <Image src={welcome} alt="photo 4" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Chair</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-72 mx-auto md:mx-0 md:w-1/5">
          <div className="relative">
            <Image src={welcome} alt="photo 5" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Keybord</span>
            </div>
          </div>
          <div className="relative mt-1">
            <Image src={welcome} alt="photo 6" width={350} height={200} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-1">
              <span className="">Lamp</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
