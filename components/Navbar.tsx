import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
// import {ProductsContext} from "./ProductsContext";
import { BsCart } from 'react-icons/bs'

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  // const {selectedProducts} = useContext(ProductsContext);
  return (
    <nav className="sticky top-0 bg-white p-5 w-full flex border-t border-gray-200 justify-center items-center space-x-12 text-gray-400">
      <Link href={"/"}>
        <div
          className={
            (path === "/" ? "text-emerald-500" : "") +
            " flex justify-center items-center"
          }
        >
          <BsCart size={25} className="mr-10"/>
          <span>Home</span>
        </div>
      </Link>
      <Link href={"/checkout"}>
        <div
          className={
            (path === "/checkout" ? "text-emerald-500" : "") +
            " flex justify-center items-center"
          }
        >
          <BsCart size={25}/>
          {/* <span>Cart {selectedProducts.length}</span> */}
        </div>
      </Link>
    </nav>
  );
}
