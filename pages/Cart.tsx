import { CartContext } from "@/components/CartContext";
import Layout from "@/components/Layout";
import { useContext } from "react";


export default function CartPage() {
        const {selectedProducts} = useContext(CartContext);


    return (
        <>
        <Layout>

        <div className="w-full bg-white h-full flex justify-center items-center mt-20">
            <h1>Test cart</h1>
            {!selectedProducts?.length && (
                    <div>Your cart is empty</div>
                )}


        </div>
        </Layout>
        </>
    );
};