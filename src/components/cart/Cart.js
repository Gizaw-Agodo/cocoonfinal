import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleCeckout } from "../../api";
import CartItem from './CartItem';

function Cart() {

  const { orders, totalPrice } = useSelector((state) => state.cart);
  console.log(orders);
  const dispatch = useDispatch();
 
  const handleCheckout = ()=>{
        handleCeckout(orders)
    }
  return (
    <div className="mt-28">
      <div className="text-center font-Pacifico font-bold text-4xl ">
        your cart Items
      </div>
      {orders.length !== 0 ? (
        <div className="py-4 px-10  bg-bgMain m-3 mx-5 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full justify-start gap-4  md:w-[60%] h-full">
            {orders.map((order, index) => (
              <CartItem key={index} order={order} />
            ))}
          </div>
          <div className="bg-white text-gray-700 w-full h-[25rem] shadow-lg rounded-md p-6 hover:shadow-gray-400 flex flex-col  items-center gap-4 md:w-[30%] md:ml-10">
            <span className="text-2xl font-bold">Order Summery</span>
            <span class="h-[1.5px] w-60 bg-gray-400 "></span>
            <span className="text-xl">Subtotal : {totalPrice} Birr</span>
            <span class="h-[1.5px] w-60 bg-gray-400 "></span>
            <span className="text-xl">
              Discount : {totalPrice * 0.05} Birr{" "}
            </span>
            <span class="h-[1.5px] w-60 bg-gray-400 "></span>
            <span className="text-xl font-bold">
              Total: {totalPrice - totalPrice * 0.05}
            </span>
            <span class="h-[1.5px] w-60 bg-gray-400 "></span>

            <button
              onClick={handleCheckout}
              className="m-2 mt-10 bg-main py-2  w-56 flex gap-6 items-center justify-center  font-bold  text-white hover:ring-gray-500 rounded-2xl  r "
            >
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center m-auto mt-[97px] font-bold text-xl ">
          no Cart Item
        </div>
      )}
    </div>
  );
}

export default Cart