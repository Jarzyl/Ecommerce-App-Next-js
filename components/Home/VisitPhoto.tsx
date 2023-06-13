import Image from "next/image";
import office from '../../public/pictures/homeoffice.jpg';

export default function VisitPhoto() {
  return (
    <>
    <div className='max-w-xs md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mt-6 flex mx-auto items-center justify-center text-center text-black'>
                <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold'>Transform Your Work and Living Space with Style, Comfort and Functionality</h1>
        </div>
    <div className='relative max-w-xs h-[300px] md:max-w-3xl lg:max-w-4xl md:h-[450px] xl:h-[550px] xl:max-w-5xl mx-auto mt-3 md:mt-6'>
        <Image src={office} alt='Office image' fill quality={100} className="rounded-2xl"/>
    </div>
    </>
  );
};