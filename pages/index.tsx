import { useState } from "react";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from "../pages/api/products";
import Layout from "@/components/Layout/Layout";
import ProductCart from "@/components/Products/ProductCart";
import TopCategories from "@/components/Home/TopCategories";
import VisitPhoto from "@/components/Home/VisitPhoto";
import ChooseUs from "@/components/Home/ChooseUs";
import { BsSearch } from "react-icons/bs";
import CustomHead from "@/components/Layout/CustomHead";
import { Product } from "@/components/Types/Product";

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [phrase, setPhrase] = useState<string>("");

  const categoriesNames = Array.from(new Set(products.map((p) => p.category)));

  let filteredProducts = products;

  if (phrase) {
    filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(phrase.toLowerCase()) ||
        p.category.toLowerCase().includes(phrase.toLowerCase())
    );
  }

  return (
    <>
      <CustomHead title="Ecommerce Shop" icon="/shop.png" />
      <Layout>
        <VisitPhoto />
        <TopCategories />
        <div
          id="next"
          className="items-center justify-center mx-auto grid mt-10 md:mt-20 xl:mt-28"
        >
          <h2 className="text-3xl xl:text-5xl justify-center flex mb-10">
            Products
          </h2>
          <div className="flex justify-center items-center bg-gray-100 rounded-xl border-2 border-gray-400">
            <BsSearch size={30} className="pl-2 mx-2 text-sky-500" />
            <input
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              type="text"
              placeholder="Search lamp, mouse..."
              className="bg-gray-100 w-52 lg:w-80 py-3 px-5 rounded-xl text-sky-500 border-gray-100 focus:outline-none focus:placeholder-black"
            />
          </div>
        </div>
        <div className="items-center justify-center mx-auto grid">
          {categoriesNames.map((categoryName) => (
            <div key={categoryName}>
              {filteredProducts.find((p) => p.category === categoryName) && (
                <div>
                  <h2 className="text-2xl capitalize py-2 mt-5 px-1 text-black font-medium">
                    {categoryName}
                  </h2>
                  <hr className="w-full mx-auto mb-4 h-0.5 bg-black"></hr>
                  <div className="grid grid-cols-2 gap-3 lg:gap-5 lg:flex">
                    {filteredProducts
                      .filter((p) => p.category === categoryName)
                      .map((product) => (
                        <div className="mx-auto" key={product.name}>
                          <ProductCart
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            category={product.category}
                            picture={product.picture}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <ChooseUs />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}