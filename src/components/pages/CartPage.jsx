import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItems,
  // increment,
  // decrement,
  // incrementByAmount,
} from "../../features/fakestore/fakeStoreSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // const [incrementAmount, setIncrementAmount] = useState(1);
  // const addValue = Number(incrementAmount) || 1;

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
    alert("Data berhasil di hapus");
  };

  const handleToCheckout = () => {
    alert("Item Checkout");
  };

  console.log(cartItems);

  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">
        <h1>Cart Page</h1>
      </div>
      <hr />
      <div className="p-6">
        <table className="w-full">
          <thead className="border-b-2 border-gray-200">
            <tr className="text-left bg-gray-400">
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index, total) => {
              return (
                // <div key={index}>
                <tr key={product?.id}>
                  <td className="pr-4">{product?.title}</td>
                  <td className="pr-4">${product?.price}</td>
                  <td className="pr-4">
                    <p id="increment">{product?.cartQuantity}</p>
                    {/* <input
                      type="number"
                      // id="number"
                      // name="number"
                      // onChange={product?.cartQuantity += 1}
                      value={product?.cartQuantity}
                    /> */}
                  </td>
                  <td className="pr-4">
                    ${product?.price * product?.cartQuantity}
                  </td>
                  <td>
                    <button onClick={() => handleToRemove(product)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
                // </div>
              );
            })}
            <tr>
              <th>Total</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button
          className="p-2 bg-green-700 text-white rounded-lg"
          onClick={() => handleToCheckout()}
        >
          Checkout
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CartPage;
