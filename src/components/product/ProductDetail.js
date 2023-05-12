import { addItem } from "../../redux/features/cartSlice";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../api";
import React from "react";


function ProductDetail() {

  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState();
  const productId = useLocation().pathname.split("/")[2];

   // handling adding item
   const dispatch = useDispatch();
     const handleClick = () => {
       dispatch(addItem({ item: product, type: "inc" }));
        setShowModal(!showModal);
       setTimeout(function () {
         setShowModal(false);
       }, 1000);
     };

  // geting product detail 
   useEffect(() => {
     getProduct(productId).then((item) => {
       setProduct(item);
      });
    }, [productId]);


  return (
    <div className="py-36 px-10  bg-bgMain  mt-16 flex flex-col md:flex-row gap-6">
      <div className="bg-white text-gray-700 w-[90%] md:w-[50%] h-[80vh] shadow-lg rounded-[100%] p-6 shadow-gray-400 flex flex-col  items-center gap-4 ">
        <img
          src={product?.img}
          alt=""
          className="rounded-[100%] w-[90%] md:w-[80%]  h-[25rem] object-cover m-auto"
        />
      </div>

      {/* product description */}
      <div className="bg-white md:my-8 text-gray-700 w-full h-[25rem] shadow-lg rounded-md p-6 hover:shadow-gray-400 flex flex-col  gap-4 md:w-[50%] lg:w-[35%] md:ml-10">
        <span className="text-2xl font-bold">{product?.title}</span>
        <span className="text-xl font-bold">Description </span>
        <span className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          et, ipsam explicabo porro, illo unde hic veritatis omnis voluptatibus
          recusandae adipisci obcaecati
        </span>
        <span className="text-xl font-bold text-main">
          Price :{product?.price} birr{" "}
        </span>
        <button
          onClick={handleClick}
          className="m-2 ml-10 mt-[1rem] bg-main py-2  w-56 flex gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl  r "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
