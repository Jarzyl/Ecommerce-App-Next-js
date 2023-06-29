import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import CustomHead from "../Layout/CustomHead";
import Layout from "../Layout/Layout";

export default function OrderCanceled() {
  return (
    <>
      <CustomHead title="Ecommerce Shop | Order" icon="/shop.png" />
      <Layout>
        <div className="grid w-[330px] md:w-[550px] h-full mx-auto border-2 border-gray-200 rounded-lg justify-center mt-28 font-medium p-2">
          <div className="grid justify-center text-center mx-auto">
            <MdOutlineCancel size={40} className="text-red-500 mx-auto mt-3" />
            <h1 className="text-2xl text-gray-700 font bold mt-1">
              Payment canceled!
            </h1>
            <h2 className="text-sm text-gray-400 mt-2 mb-2">
              Your payment has not been processed. Try again.
            </h2>
            <hr className="w-[300px] md:w-[520px]" />
          </div>
          <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-44 h-10 mt-5 mb-4 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
            <Link href="/">Go back to shop</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
