import React from "react";
import ButtonAddCart from "../atoms/buttons/ButtonAddCart";
import ButtonBackHome from "../atoms/buttons/ButtonBackHome";

const CardDetail = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-32 h-40 md:h-40 object-cover md:w-40 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={props.img}
            alt="image"
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.desc}</p>
            <p className="text-gray-600 text-xs">{props.category}</p>
            <h3>${props.price}</h3>
            <div className="flex flex-row gap=2 mt-4">
              <ButtonAddCart onclick={props.addClick} />
              {/* <BUttonBacktoHome onclick={props.backhomeClick} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
