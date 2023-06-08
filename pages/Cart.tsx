import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import { BsTrash3 } from 'react-icons/bs';
import Link from "next/link";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    picture: string;
}

export default function CartPage() {
    const {selectedProducts, addProduct, deleteProduct, removeProduct, clearCart} = useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const router = useRouter();
    const {success, canceled} = router.query;

    useEffect(() => {
        if (selectedProducts.length > 0) {
            axios.post('/api/cart', {ids:selectedProducts})
            .then(response => {
                setProducts(response.data);
            })
        } else {
            setProducts([]);
        }
    }, [selectedProducts]);

    function addMore(id: string) {
        addProduct(id);
    }

    function addLess(id: string) {
        deleteProduct(id);
    }

    function removeProd(product: Product) {
        removeProduct(product._id, selectedProducts.filter(id => id === product._id).length);
      }

    async function goToPayment() {
        const response = await axios.post('/api/checkout', {
        name,email,city,postalCode,streetAddress,country,
        selectedProducts,
        });
        if (response.data.url) {
        window.location = response.data.url;
        }
    }

    let total = 0;
        for (const _id of selectedProducts) {
            const price = products.find(p => p._id === _id)?.price || 0;
            total += price;
    }

    if (success) {
        return (
        <Layout>
            <div className="grid text-center justify-center items-center mt-28 font-medium">
            <h1 className="text-2xl text-green-500 mb-10">Thanks for your order!</h1>
            <p className="text-2xl text-green-500">We will email you when your order will be sent.</p>
            </div>
        </Layout>
        );
    }
        
    if (canceled) {
        return (
        <Layout>
            <div className="grid text-center justify-center items-center mt-28 font-medium">
            <h1 className="text-2xl text-red-500 mb-10">Payment canceled!</h1>
            <p className="text-2xl text-red-500">Your payment has not been processed. Try again.</p>
            </div>
        </Layout>
        );
    }

    return (
        <>
            <Head>
            <title>Ecommerce Shop | Cart</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" type="image/png" href="/shop.png"/>
            </Head>
            <Layout>
        <div className="max-w-[400px] md:max-w-[1100px] mx-auto bg-white justify-center items-center mt-6">
            <div className="grid md:flex">
            
            {!selectedProducts?.length && (
            <h1 className="text-xl font-medium mt-10 text-center text-red-500">Your cart is empty!</h1>)}
    {products && products.length > 0 && (
    <>
        <div className="w-[330px] md:w-[700px] mx-auto">
        <div className="flex justify-between">
            <p className="text-3xl md:text-4xl xl:text-5xl text-black font-bold mt-8 mb-6">Cart</p>
            <div className="flex justify-center items-center text-center text-black mt-2">
              <BsTrash3 size={15} />
              <button onClick={clearCart} className="text-md md:text-lg font-bold ml-2"
              >Clear cart</button>
            </div>
        </div>
          <div className="flex justify-between uppercase mb-3 text-gray-300 text-base md:text-xl">
          <p>Product</p>
          <p className="ml-4 md:ml-12">Quantity</p>
          <p>Price</p>
          </div>
          <div className="border"></div>
      {products.map((product: Product) => (
        <div key={product._id} className="flex items-center justify-between mb-3">
            <div className="grid xl:flex items-center">
          <div className="relative h-[100px] w-[120px] lg:h-[180px] lg:w-[180px]">
            <Image src={product.picture} alt="product photo" fill className="object-cover" /></div>
            <p className="text-gray-500 font-bold w-28">{product.name}</p>
          </div>
          <div className="grid mr-6 md:mr-12 xl:mr-44">
          <div className="bg-white text-black w-20 border-2 border-gray-100 rounded-lg flex justify-center">
            <button onClick={() => addLess(product._id)} className="text-slate-700 w-3 mr-2">-</button>
            {selectedProducts.filter(id => id === product._id).length}
            <button onClick={() => addMore(product._id)} className="text-slate-700 w-3 ml-2">+</button>
          </div>
          <div className="flex items-center mt-3 ml-1 text-black">
            <BsTrash3 size={15} />
            <button onClick={() => removeProd(product)} className="text-sm font-bold ml-2">Remove</button>
          </div>
          </div>
          <p className="font-bold text-black">
            {selectedProducts.filter(id => id === product._id).length * product.price}$
          </p>
        </div>))}
          </div>
            </>)}
        <div className="bg-white w-72 h-48 xl:h-56 xl:w-80 border-2 border-gray-100 rounded-lg mx-auto mt-10 text-lg md:text-xl xl:text-2xl">
            <div className="p-3 text-gray-400">
            <div className="flex justify-between mb-2">
            <p>Subtotal</p> <p className="font-bold text-black">{total}$</p>
            </div>
            <div className="flex justify-between mb-2">
            <p>Discount</p> <p className="text-gray-300">0$</p>
            </div>
            <div className="border w-64 mx-auto mb-2"></div>
            <div className="flex justify-between text-black">
            <p>Grand Total</p> <p className="font-bold">{total}$</p>
            </div>
            </div>
        <div className="flex justify-center bg-black text-white w-52 mt-2 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
            <Link href='/Checkout'>Checkout now</Link>
        </div>
        </div>
        </div>
        </div>
        </Layout>
        </>
    );
};