import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { addItem } from "../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Product({product}) {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
 
  const handleClick = () => {
    dispatch(addItem({ item: product, type: "inc" }));
    setShowModal(!showModal);
    setTimeout(function () {
      setShowModal(false);
    }, 1000);
  };

  return (
    <div className="bg-white text-gray-700  h-[15rem] shadow-lg rounded-md p-2 hover:shadow-gray-400 relative">
      <img
        src={product.img}
        alt=""
        className="rounded-[100%] w-[90%] align-center h-[8rem] object-cover m-auto"
      />
      <div className="flex items-center justify-center gap-3 p-3">
        <span className="text-xl">{product.title}</span>
        <span className="text-blue-700 text-xl font-bold">
          {product.price} birr
        </span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center">
          <FavoriteBorderIcon
            fontSize="medium"
            className=" text-main cursor-pointer"
          />
        </div>
        <div className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center">
          <Link to={`/food/${product._id}`}>
            <VisibilityIcon
              fontSize="medium"
              className=" text-main cursor-pointer"
            />
          </Link>
        </div>
        <div
          onClick={() => handleClick()}
          className="rounded-[100%] w-[3rem]  h-[3rem] object-cover m-auto hover:bg-gray-200 flex justify-center items-center"
        >
          <AddShoppingCartIcon
            fontSize="medium"
            className=" text-main cursor-pointer"
          />
        </div>
      </div>

      {showModal && (
        <div className="bg-white text-bold rounded-lg absolute text-center text-green-700 p-4 left-[30px] top-[10px]  shadow-lg shadow-gray-900">
          Item added to Cart
        </div>
      )}
    </div>
  );
}

export default Product;
