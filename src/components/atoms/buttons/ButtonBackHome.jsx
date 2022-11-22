import React from "react";

const ButtonBackHome = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ButtonBackHome;
