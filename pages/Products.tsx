import Head from "next/head";
import { useState } from "react";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from './api/products'
import Layout from "@/components/Layout/Layout";
import ProductCart from "@/components/Products/ProductCart";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  picture: string;
}

interface CategoryProps {
  products: Product[];
}

export default function Category({ products }: CategoryProps) {
  const [phrase, ] = useState<string>('');
  const [category, setCategory] = useState<string>('all');

  const categoriesNames = ['all', 'desks', 'chairs', 'lamps', 'laptops', 'monitors', 'keybords', 'mouses'];

  let filteredProducts = products;

  if (phrase) {
    filteredProducts = products.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()));
  };

  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  };

  return (
    <>
      <Head>
        <title>Ecommerce Shop | Products</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" type="image/png" href="/shop.png"/>
      </Head>
      <Layout>
        <div className="w-full mx-auto mt-10">
          <div className="bg-white">
            <div className="w-full mx-auto py-6">
              <h1 className="text-3xl xl:text-5xl font-bold text-black text-center">Top Product Collection<br/> for Your Office</h1>
            </div>
            <div className="items-center justify-center mx-auto flex">
            <div className="grid grid-cols-4 md:flex">
            {categoriesNames.map(categoryName => (
                <button key={categoryName}
                    className={`text-lg mr-2 mb-3 lg:mr-4 border-4 border-gray-100 h-10 w-20 rounded-xl bg-gray-100 text-black capitalize p-0.5 ${category === categoryName ? 'font-bold bg-sky-500 border-sky-500' : ''}`}
                    onClick={() => setCategory(categoryName)}>{categoryName}
                </button>))}
          </div>
            </div>
            <div className="items-center justify-center mx-auto grid mt-4 md:mt-8">
              {filteredProducts.length === 0 && (
                <p className="text-gray-400 text-center py-8">
                  No products found for the selected category and search phrase.
                </p>)}
              {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          {filteredProducts.find(p => p.category === categoryName) && (
            <div>
              <div className="grid grid-cols-2 gap-3 lg:gap-5 py-2 lg:flex">
                {filteredProducts.filter(p => p.category === categoryName).map(product => (
                  <div className="mx-auto" key={product.name}>
                    <ProductCart key={product._id}
                      _id={product._id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                      picture={product.picture}/>
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

