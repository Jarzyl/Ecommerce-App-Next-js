import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "@/components/Products/CartContext";
import Layout from "@/components/Layout/Layout";
import ShippingOption from "@/components/Order/ShippingOption";
import Order from "@/components/Order/Order";
import CustomHead from "@/components/Layout/CustomHead";
import InputField from "@/components/Order/InputField";
import { useShopService } from "@/components/Products/ShopService";
import { Product } from "@/components/Types/Product";
import OrderCanceled from "@/components/Order/OrderCanceled";

export default function CartPage() {
  const { selectedProducts } = useContext(CartContext);
  const {total} = useShopService(); 
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (selectedProducts.length > 0) {
      axios.post("/api/cart", { ids: selectedProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [selectedProducts]);

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      selectedProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  if (success) {
    return <Order />
  }

  if (canceled) {
    return <OrderCanceled/>
  }

  return (
    <>
      <CustomHead title="Ecommerce Shop | Checkout" icon="/shop.png" />
      <Layout>
        <div className="max-w-[400px] md:max-w-3xl lg:max-w-4xl xl:max-w-[1100px] mx-auto bg-white justify-center items-center mt-6">
          <div className="flex justify-start ml-8">
            <p className="text-3xl md:text-4xl xl:text-5xl text-black font-bold mt-8 mb-6">
              Checkout
            </p>
          </div>
          <div className="grid md:flex">
            {selectedProducts.length > 0 && (
              <>
                <div className="w-[300px] md:w-[450px] xl:w-[700px] h-full mx-auto border-2 border-gray-200 rounded-xl p-2 ">
                  <div className="flex flex-col mt-2 w-[280px] md:w-[400px] xl:w-[660px] mx-auto">
                    <p className="text-lg font-bold mb-2 text-gray-700">
                      Type shipping country
                    </p>
                    <InputField
                      type="text"
                      placeholder="Enter your country"
                      value={country}
                      name="country"
                      onChange={(ev) => setCountry(ev.target.value)}
                      label=""
                    />
                    <hr className="w-[280px] md:w-[400px] xl:w-[660px] my-3" />
                    <p className="text-lg font-bold mb-2 text-gray-700">
                      Shipping address
                    </p>
                    <InputField
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      name="name"
                      onChange={(ev) => setName(ev.target.value)}
                      label="Full name *"
                    />
                    <InputField
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      name="email"
                      onChange={(ev) => setEmail(ev.target.value)}
                      required
                      label="Email address *"
                    />
                    <InputField
                      type="number"
                      placeholder="Enter your phone number (digits only)"
                      value={phone}
                      name="phone"
                      onChange={(ev) => setPhone(ev.target.value)}
                      label="Phone number *"
                    />
                    <p className="font-semibold text-black/60 mt-2">
                      City & Postal Code *
                    </p>
                    <div className="grid md:flex">
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={(ev) => setCity(ev.target.value)}
                        className="border py-2 my-1 p-2 mr-3 w-[200px] md:w-[190px] xl:w-[340px] rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                        name="postalcode"
                        onChange={(ev) => setPostalCode(ev.target.value)}
                        className="border py-2 my-1 p-2 w-[200px] md:w-[200px] xl:w-[340px] rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500"
                        required
                      />
                    </div>
                    <InputField
                      type="text"
                      placeholder="Street Address"
                      value={streetAddress}
                      name="address"
                      onChange={(ev) => setStreetAddress(ev.target.value)}
                      label="Street name and house number *"
                    />
                  </div>
                  <div className="grid w-[280px] md:w-[400px] xl:w-[660px] mx-auto mt-3">
                    <hr className="w-[280px] md:w-[400px] xl:w-[660px] mb-4" />
                    <p className="text-lg font-bold mb-2 text-gray-700">
                      Shipping method
                    </p>
                    <ShippingOption
                      title="Free shipping"
                      duration="5-7 business days"
                      price="0$"
                    />
                    <ShippingOption
                      title="Regular shipping"
                      duration="3-4 business days"
                      price="7.50$"
                    />
                    <ShippingOption
                      title="Express shipping"
                      duration="1-2 business days"
                      price="17.50$"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Empty */}
            <div className="grid justify-center items-center mt-10 md:mt-0">
              {!selectedProducts?.length && (
                <h1 className="text-xl font-medium mt-10 text-center text-red-500">
                  Your cart is empty!
                </h1>
              )}

              {/* Your order*/}
              {products && products.length > 0 && (
                <>
                  <div className="w-[300px] md:w-[310px] lg:w-[350px] border-2 border-gray-200 p-4 rounded-xl md:mb-80">
                    <div className="flex justify-between font-bold text-gray-700">
                      Your Order
                    </div>
                    <hr className="w-[270px] md:w-[275px] lg:w-[315px] mt-2" />
                    {products.map((product: Product) => (
                      <div
                        key={product._id}
                        className="flex items-center justify-between mb-3"
                      >
                        <div className="grid md:flex items-center">
                          <Image
                            src={product.picture}
                            alt="product photo"
                            className="object-contain max-h-full max-w-full mr-3"
                            width={70}
                            height={50}
                          />
                          <p className="text-gray-500 text-base mt-4">
                            {product.name}
                          </p>
                        </div>
                        <p className="font-bold text-black">
                          {selectedProducts.filter((id) => id === product._id)
                            .length * product.price}
                          $
                        </p>
                      </div>
                    ))}
                    <hr className="w-[270px] md:w-[275px] lg:w-[315px] mt-2" />
                    <div className="grid justify-start mx-auto mt-3">
                      <p className="text-gray-700 text-base font-bold mb-3">
                        Discount Code
                      </p>
                      <div className="flex justify-start">
                        <input
                          type="text"
                          placeholder="Add discount code"
                          name="discount code"
                          className="border-2 bg-gray-100 py-2 p-2 h-12 rounded-lg w-44 lg:w-56 mr-1 focus:outline-none focus:border-black focus:placeholder-sky-500"
                        />
                        <div className="flex justify-center bg-gray-100 border-2 text-gray-700 w-20 ml-1 h-12 rounded-lg cursor-pointer hover:bg-sky-500 duration-200 font-bold hover:border-sky-500">
                          <button>Apply</button>
                        </div>
                      </div>
                      <div className="flex justify-start text-center mt-4 mb-1">
                        <p className="text-gray-700 font-bold text-sm mr-1">
                          New customer?
                        </p>
                        <p className="text-gray-700 text-sm">
                          <span className="underline">Sign up</span> to get
                          better offer{" "}
                        </p>
                      </div>
                    </div>
                    <hr className="w-[270px] md:w-[275px] lg:w-[315px] mt-2 mb-2" />
                    <div className="text-lg md:text-xl xl:text-2xl">
                      <div className="text-gray-400">
                        <div className="flex justify-between mb-3">
                          <p>Subtotal</p>{" "}
                          <p className="font-bold text-black">{total}$</p>
                        </div>
                        <div className="flex justify-between mb-3">
                          <p>Discount</p> <p className="text-gray-300">-0$</p>
                        </div>
                        <div className="flex justify-between mb-3">
                          <p>Shipment cost</p>{" "}
                          <p className="text-gray-300">0$</p>
                        </div>
                        <hr className="w-[270px] md:w-[275px] lg:w-[315px] mt-2" />
                        <div className="flex justify-between text-gray-700 mt-3">
                          <p>Grand Total</p>{" "}
                          <p className="font-bold">{total}$</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-52 h-10 mt-4 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
                      <button onClick={goToPayment}>Continue to payment</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
