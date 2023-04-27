import Head from "next/head";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    picture: string;
}

export default function CartPage() {
    const {selectedProducts, addProduct, removeProduct} = useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const router = useRouter();
    const { success, canceled } = router.query;

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
        removeProduct(id);
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
            <div className="grid text-center justify-center items-center mt-28">
              <h1 className="text-2xl text-green-500 mb-10">Thanks for your order!</h1>
              <p className="text-2xl text-green-500">We will email you when your order will be sent.</p>
            </div>
          </Layout>
        );
      }
    
      if (canceled) {
        return (
          <Layout>
            <div className="grid text-center justify-center items-center mt-28">
              <h1 className="text-2xl text-red-500 mb-10">Payment canceled!</h1>
              <p className="text-2xl text-red-500">Your payment has not been processed. Try again.</p>
            </div>
          </Layout>
        );
      }

    return (
        <>
            <Head>
            <title>Ecommerce App | Cart</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" type="image/jpg" href=""/>
            </Head>
            <Layout>
        <div className="w-full bg-white h-full justify-center items-center mt-20">
            <div className="grid md:grid-cols-2">
            <div className="flex justify-center items-center">
            {!selectedProducts?.length && (<h1>Your cart is empty</h1>)}
    {products && products.length > 0 && (
    <table className="w-80">
    <thead>
    <h2 className="mb-3">Cart</h2>
    <tr>
        <th className="">Product</th>
        <th className="">Quantity</th>
        <th className="">Price</th>
    </tr>
    </thead>
    <tbody>
        {products.map((product: Product) => (
        <tr key={product._id}>
            <td>{product.name}
                <Image src={product.picture} alt="" className="object-contain max-h-full max-w-full" width={150} height={100} />
                </td>
            <td>
                <button 
                onClick={() => addLess(product._id)}
                className="bg-indigo-400 text-white  w-7 h-7 rounded-lg mr-2">-</button>
            {selectedProducts.filter(id => id === product._id).length}
                <button 
                onClick={() => addMore(product._id)}
                className="bg-indigo-400 text-white  w-7 h-7 rounded-lg ml-2">+</button>
            </td>
            <td className="mt-3">
            {selectedProducts.filter(id => id === product._id).length * product.price}$
            </td>
            </tr>  
            ))}
            <tr>
                <td></td>
                <td></td>
                <td>{total}$</td>
                </tr>
            </tbody>
            </table>
        )}
        </div>
        {!!selectedProducts.length && (
        <div className="flex justify-center items-center mx-auto w-full">
            <div className="flex flex-col">
            <h2>Order information</h2>
            <div className="flex flex-col mt-5">
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            name="name"
            onChange={ev => setName(ev.target.value)} 
            className="border-2 py-2 my-1 rounded-xl"/>
            <input 
            type="email" 
            placeholder="Email"
            value={email}
            name="email"
            onChange={ev => setEmail(ev.target.value)}
            className="border-2 py-2 my-1 rounded-xl"/>
            <div className="flex">
            <input 
            type="text" 
            placeholder="City"
            value={city}
            name="city"
            onChange={ev => setCity(ev.target.value)}
            className="border-2 py-2 my-1 rounded-xl mr-2"/>
            <input 
            type="text" 
            placeholder="Postal Code"
            value={postalCode}
            name="postalcode"
            onChange={ev => setPostalCode(ev.target.value)}
            className="border-2 py-2 my-1 rounded-xl"/>
            </div>
            <input 
            type="text" 
            placeholder="Street Address"
            value={streetAddress}
            name="address"
            onChange={ev => setStreetAddress(ev.target.value)}
            className="border-2 py-2 my-1 rounded-xl"/>
            <input 
            type="text" 
            placeholder="Country"
            value={country}
            name="country"
            onChange={ev => setCountry(ev.target.value)}
            className="border-2 py-2 my-1 rounded-xl"/>
            </div>
            <div className="mt-3 bg-indigo-300 border-2 rounded-md">
            <button 
            onClick={goToPayment}>Continue to payment</button>
            </div>
            </div>
            </div>
            )}
        </div>
        </div>
        </Layout>
        </>
    );
};