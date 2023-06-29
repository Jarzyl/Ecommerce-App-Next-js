import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout/Layout";
import { CiCircleCheck } from "react-icons/ci";
import OrderProducts from "./OrderProducts";
import CustomHead from "../Layout/CustomHead";

export default function Order() {
  const [order, setOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("/api/orders");
        const orders = response.data;
        if (orders.length > 0) {
          const lastOrder = orders[orders.length - 1];
          setOrder(lastOrder);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching order:", error);
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, []);

  return (
    <>
      <CustomHead title="Ecommerce Shop | Order" icon="/shop.png" />
      <Layout>
        {isLoading ? (
          <div className="grid justify-center text-center mx-auto text-xl mt-32">
            Loading...
          </div>
        ) : !order ? (
          <div className="grid justify-center text-center mx-auto text-xl mt-32">
            No order available.
          </div>
        ) : (
          <div className="grid w-[330px] md:w-[550px] h-full mx-auto border-2 border-gray-200 rounded-lg justify-center mt-16 font-medium p-2">
            <div className="grid justify-center text-center mx-auto">
              <CiCircleCheck size={40} className="text-teal-500 mx-auto mt-3" />
              <h1 className="text-2xl text-gray-700 font-bold mt-3">
                Thanks for your order!
              </h1>
              <h2 className="text-sm text-gray-400 mt-3 mb-3">
                The order confirmation has been sent to {order.email}
              </h2>
              <hr className="w-[300px] md:w-[520px]" />
            </div>
            <div className="text-left mt-2">
              <p className="text-gray-700 font-semibold text-lg">
                Transaction Date
              </p>
              <p className="text-sm text-gray-400 mt-2 mb-2">
                {new Date(order.createdAt).toLocaleString()}
              </p>
              <hr className="w-[300px] md:w-[520px]" />
            </div>
            <div className="text-left mt-2">
              <p className="text-gray-700 font-semibold text-lg">
                Payment Method
              </p>
              <p className="text-sm text-gray-400 mt-2 mb-2">Card</p>
              <hr className="w-[300px] md:w-[520px]" />
            </div>
            <div className="text-left mt-2">
              <p className="text-gray-700 font-semibold text-lg">
                Shipping Method
              </p>
              <p className="text-sm text-gray-400 mt-2 mb-2">
                Express delivery 1-3 (business days)
              </p>
              <p className="text-gray-700 font-bold uppercase text-sm underline cursor-pointer">
                Track Order
              </p>
              <hr className="w-[300px] md:w-[520px] mt-3" />
            </div>
            <OrderProducts />
          </div>
        )}
      </Layout>
    </>
  );
}
