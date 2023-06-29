import { useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { CartContext } from "@/components/Products/CartContext";
import { Product } from "@/components/Types/Product";

export const useShopService = () => {
    const { selectedProducts, addProduct, deleteProduct, removeProduct } =
        useContext(CartContext);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (selectedProducts.length > 0) {
            axios.post("/api/cart", { ids: selectedProducts }).then((response) => {
        setProducts(response.data);
        });
        } else {
            setProducts([]);
        }
    }, [selectedProducts]);

    const addMore = (id: string) => {addProduct(id)};

    const addLess = (id: string) => {deleteProduct(id)};

    const removeProd = (product: Product) => {
        removeProduct(product._id, selectedProducts.filter((id) => id === product._id).length)
    };

    const total = useMemo(() => {
        return selectedProducts.reduce((acc, _id) => {
            const price = products.find((p) => p._id === _id)?.price || 0;
        return acc + price;
        }, 0);
    }, [selectedProducts, products]);

    return { addMore, addLess, removeProd, total };
}