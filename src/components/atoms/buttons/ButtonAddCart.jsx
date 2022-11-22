import React from "react";

const ButtonAddCart = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
      >
        Add Cart
      </button>
    </div>
  );
};

export default ButtonAddCart;
