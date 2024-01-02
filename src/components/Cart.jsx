import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let cartTotal = cartItems.reduce((sum, el) => (sum += el.price), 0);
  return (
    <div className="h-full p-12 px-24 flex justify-between gap-4 w-full">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold my-2">Cart Items</h1>
        <div className="flex flex-col gap-4">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div
                  className="flex gap-4 items-center justify-center border p-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    className="h-20 w-20"
                    alt={item.title}
                  />
                  <div className="flex-1">{item.title}</div>
                  <div>{item.price}</div>
                  {/* <div>{item.title}</div> */}
                  <div>
                    <button
                      className="border bg-red-300 p-1 px-3 font-bold rounded-full"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No Items in cart</div>
          )}
        </div>
      </div>
      <div className="border p-4 flex-col flex-1 text-right w-1/3">
        <h1 className="font-bold text-xl">Cart Total</h1>
        <h1 className="font-bold">Total: {cartTotal.toFixed()}</h1>
      </div>
    </div>
  );
};

export default Cart;
