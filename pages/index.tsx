import Head from "next/head";
import { useState } from "react";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from '../pages/api/products'
import Layout from "@/components/Layout";
import ProductCart from "@/components/ProductCart";
import Link from "next/link";
import Image from "next/image";
import office from '../public/pictures/homeoffice.jpg';
import { BsArrowDown } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import TopCategories from "@/components/TopCategories";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [phrase, setPhrase] = useState<string>('');

  const categoriesNames = Array.from(new Set(products.map(p => p.category)));

  let filteredProducts = products;

  if (phrase) {
    filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(phrase.toLowerCase()) || 
      p.category.toLowerCase().includes(phrase.toLowerCase())
    );    
  };

  return (
    <>
      <Head>
        <title>Ecommerce Shop</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" type="image/png" href="/shop.png"/>
      </Head>
      <Layout>
      <div className='relative max-w-xs h-[470px] md:max-w-5xl md:h-[430px] xl:max-w-5xl xl:h-[600px] mx-auto mt-6'>
      <Image src={office} alt='Office image' fill quality={100} className="rounded-3xl"
      />
      <div className='absolute top-10 left-0 w-full h-full flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl'>Make Your Room Comfortable & Useful</h1>
          <h2 className="text-xl mt-4">With a focus on design and functionality, Beasts offers <br/> a balance between comfort and practicality</h2>
          <Link href='/Products' className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2 bg-blue-300 border-blue-300 rounded-lg hover:scale-110 duration-200'>Shop Now</Link>
          <div className="flex justify-center mt-6 md:mt-20 xl:mt-48">
          <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
            <ScrollLink to="next" smooth={true} duration={500} className="block">
              <BsArrowDown size={30} color="white"/>
            </ScrollLink>
          </div>
        </div>
        </div>
      </div>
    </div>
      <div className="w-full mx-auto">
  <div className="bg-white">
    {/* <div className="w-3/5 mx-auto py-4">
      <h3 className="md:text-2xl font-medium text-indigo-400 text-center mt-6">Work more efficiently and comfortably with our products! We offer a wide range of furniture and accessories to organize your home office, such as ergonomic chairs, comfortable desks, stylish lamps, as well as high-quality laptops, monitors, mice, and keyboards. Ensure your health and comfort while working from home by choosing our products. Check out our offer today!</h3>
    </div> */}
      <TopCategories/>
    <div className="items-center justify-center mx-auto grid mt-6 md:mt-12 xl:mt-16">
      <h2 className="text-3xl xl:text-5xl justify-center flex mb-10">Products</h2>
    <input 
  value={phrase} 
  onChange={e => setPhrase(e.target.value)} 
  type="text" 
  placeholder="Search lamp, mouse ..." 
  className="bg-gray-100 w-60 py-3 px-5 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300" />
      </div>
      <div className="items-center justify-center mx-auto grid">
      {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          {filteredProducts.find(p => p.category === categoryName) && (
            <div>
              <h2 className="text-2xl capitalize py-2 mt-5 px-1 text-indigo-400 font-medium">{categoryName}</h2>
              <hr className="w-full mx-auto mb-4 h-0.5 bg-indigo-300"></hr>
              <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-5 lg:flex">
                {filteredProducts.filter(p => p.category === categoryName).map(product => (
                  <div className="mx-auto" key={product.name}>
                    <ProductCart
                      key={product._id}
                      _id={product._id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                      picture={product.picture} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      </div>
  </div>
</div>

      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
