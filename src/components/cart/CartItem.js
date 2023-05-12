import { addItem } from "../../redux/features/cartSlice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import React from "react";

function CartItem({order}) {
    const dispatch = useDispatch();

  return (
    <div className="bg-white text-gray-700 w-full h-[8rem] shadow-lg rounded-md p-1 hover:shadow-gray-400 flex justify-start items-center gap-4 ">
      <div>
        <img
          src={order.item.img}
          alt=""
          className="rounded-[100%] w-[70%]  h-[7rem] object-cover m-auto"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xl">{order.item.title}</span>
        <span className="text-main text-xl font-bold">
          {order.item.price} birr
        </span>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center ml-[7rem]">
        <div className="w-40 flex gap-3 items-center justify-start font-bold  text-white bg-main rounded-2xl ">
          <div
            onClick={() => dispatch(addItem({ item: order.item, type: "dec" }))}
            className="rounded-l-2xl w-[4rem] h-[2.5rem] cursor-pointer hover:bg-blue-400  flex justify-center items-center"
          >
            <RemoveIcon />
          </div>
          <span>{order.quantity}</span>
          <div
            onClick={() => dispatch(addItem({ item: order.item, type: "inc" }))}
            className=" ml-2 rounded-r-2xl w-[4rem] h-[2.5rem] cursor-pointer hover:bg-blue-400  flex justify-center items-center"
          >
            <AddIcon />
          </div>
        </div>
        <span className="text-main  font-bold">
          subtotal : {order.item.price * order.quantity} birr
        </span>
      </div>
    </div>
  );
}

export default CartItem;
