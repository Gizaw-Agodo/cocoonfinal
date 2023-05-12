import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import BlenderIcon from "@mui/icons-material/Blender";
import SearchIcon from "@mui/icons-material/Search";
import  { useEffect, useState } from "react";
import Product from "../product/Product";
import { getProducts } from "../../api";
import React from "react";

function Menu() {

   const [filter, setFilter] = useState("");
   const [products, setProducts] = useState([]);

   useEffect(() => {
     getProducts(filter).then((productset) => setProducts(productset));
   }, [filter]);

  return (
    <div className="py-2 my-28 px-10 ">
      {/* search and our menu */}
      <div className="flex flex-col-reverse md:flex-row md:justify-start items-center ">
        <div className="relative flex items-center justify-between">
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="search for food"
              autoComplete="false"
              className=" m-2 px-4 w-80 py-1 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </form>
          <SearchIcon className="w-5 h-5 absolute ml-3 right-4 cursor-pointer" />
        </div>
        <h3 className="font-Pacifico font-bold text-4xl md:ml-64">our Menu</h3>
      </div>

      {/* catagories and menu */}
      <div className="flex flex-col justify-around md:flex-row md:justify-around gap-5 ">
        <div className="flex flex-row justify-around py-2  md:flex-col   md:h-full">
          <button
            onClick={() => setFilter("")}
            className="m-2 py-2  w-56  font-bold  text-white hover:ring-gray-500 rounded-2xl  ring-2 ring-gray-300 bg-main"
          >
            <span>All</span>
          </button>
          <button
            onClick={() => setFilter("JUICE")}
            className="m-2 py-2  w-56 flex gap-6 items-center justify-center  font-bold  text-blue-700 hover:ring-gray-500 rounded-2xl  ring-2 ring-gray-300 "
          >
            <BlenderIcon className="text-main" />
            <span>Juice</span>
          </button>
          <button
            onClick={() => setFilter("PIZZA")}
            className="m-2 py-2  w-56 flex gap-6 items-center justify-center font-bold  text-blue-700 hover:ring-gray-500 rounded-2xl  ring-2 ring-gray-300 "
          >
            <LocalPizzaIcon className="text-main" />
            <span>Pizza</span>
          </button>
          <button
            onClick={() => setFilter("BURGER")}
            className="m-2 py-1 md:py-2 flex gap-6 items-center justify-center w-56  font-bold  text-blue-700 hover:ring-gray-500 rounded-2xl  ring-2 ring-gray-300 "
          >
            <LunchDiningIcon className="text-main" />
            <span>Burgur</span>
          </button>
        </div>

        <div className="bg-bgMain flex justify-center p-3 mx-2 md:w-[70vw] gap-10 flex-wrap">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
