import React from "react";

const ButtonDetails = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Detail
      </button>
    </div>
  );
};

export default ButtonDetails;
