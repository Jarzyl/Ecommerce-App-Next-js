import Head from "next/head";
import { useState } from "react";
import Product from "@/components/Product";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from '../pages/api/products'
import Layout from "@/components/Layout";
import Images from "@/components/Images";

interface Product {
  id: string;
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
  }

  return (
    <>
      <Head>
        <title>Ecommerce App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" type="image/jpg" href=""/>
      </Head>
      <Layout>
      <div className="w-full mx-auto">
  <div className="bg-white">
    <div className="w-full mx-auto py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-300 text-center">Welcome to XYZ store!</h1>
    </div>
    <div className="w-3/5 mx-auto mb-3 md:py-6">
      <h2 className="md:text-2xl font-bold text-indigo-300 text-center">Our company offers products from the following categories</h2>
    </div>
    <Images/>
    <div className="w-3/5 mx-auto py-4">
      <h3 className="md:text-2xl font-bold text-indigo-300 text-center mt-3">With us you will increase the efficiency and quality of work and take care of your health and comfort!</h3>
    </div>
      <div className="mt-1 xl:mt-6">
      <h3 className="text-2xl md:text-3xl text-indigo-300 text-center">Search by product name or category!</h3>
      </div>
    <div className="items-center justify-center mx-auto flex mt-6 md:mt-8 xl:mt-6">
    <input 
  value={phrase} 
  onChange={e => setPhrase(e.target.value)} 
  type="text" 
  placeholder="Search for products..." 
  className="bg-gray-100 w-60 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300" />
      </div>
      <div className="items-center justify-center mx-auto grid">
      {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          {filteredProducts.find(p => p.category === categoryName) && (
            <div>
              <h2 className="text-2xl capitalize py-2 px-1 text-indigo-300">{categoryName}</h2>
              <hr className="w-full mx-auto mb-4 h-0.5 bg-indigo-300"></hr>
              <div className="grid grid-cols-2 gap-2 lg:flex">
                {filteredProducts.filter(p => p.category === categoryName).map(product => (
                  <div className="mx-auto" key={product.name}>
                    <Product
                      key={product.id}
                      _id={product.id}
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
