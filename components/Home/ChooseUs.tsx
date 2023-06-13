import Image from 'next/image';
import { BsShieldFillCheck } from 'react-icons/bs';
import { MdPriceCheck } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import deliver from '../../public/pictures/delivery.webp';

export default function ChooseUs() {
  return (
    <>
    <div id="" className='grid lg:flex justify-center lg:justify-between mt-10 md:mt-32 xl:mt-40 max-w-[400px] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto mb-8 px-6 md:px-0'>
      <h3 className="text-2xl md:text-3xl text-black text-left font-bold mb-3 lg:mb-0">Why<br/> Choose Us</h3>
      <p className='text-xl text-gray-400 w-full md:w-[420px] mt-3 mb-3 md:mt-0 lg:mb-0'>We strive to provide our customers with the best possible shopping experience</p>
      <div className='justify-center flex h-20 w-30'>
        <div className=' w-44 h-24 bg-gray-200 rounded-full'>
        <Image alt='whyus' src={deliver} width={140} className='object-cover rounded-full mx-auto mt-2'/>
        </div>
        </div>
      </div>
      
      <div className='grid lg:flex justify-center lg:justify-between max-w-[400px] md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto'>
        <div className='grid mt-6 mb-6'>
            <div className='flex justify-center'>
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 duration-200">
                <BsShieldFillCheck size={23} className='text-sky-500'/>
                </div>
                <p className='text-xl font-bold ml-3'>2 Years Warranty</p>
            </div>
            <div className='w-72'>
                <p className='ml-24 text-gray-400 text-sm'>
                We Stand behind the quality of our products and offer a warranty on all our furniture piecies. Rest easy knowing that your investment is protected.</p></div>
        </div>
        <div className='grid mt-6 mb-6'>
            <div className='flex justify-center'>
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 duration-200">
                <MdPriceCheck size={23} className='text-sky-500'/>
                </div>
                <p className='text-xl font-bold ml-3'>Affordable Price</p>
            </div>
            <div className='w-72'>
                <p className='ml-24 text-gray-400 text-sm'>
                We believe that quality furniture and office accessorises should be accesible to everyone. That`s why we offer a wide range of products at affordable prices.</p></div>
        </div>
        <div className='grid mt-6 mb-6'>
            <div className='flex justify-center'>
                <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 duration-200">
                <FaShippingFast size={23} className='text-sky-500'/>
                </div>
                <p className='text-xl font-bold ml-6'>Free Shipping</p>
            </div>
            <div className='w-72'>
                <p className='ml-24 text-gray-400 text-sm'>
                We really understand our customers, so we wiil free shipping cost to any location quickly and safely. Enjoy free shiping on all orders.</p></div>
        </div>
      </div>
    </>
  );
};
