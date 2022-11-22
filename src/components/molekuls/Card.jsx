import React from "react";
import ButtonAddCart from "../atoms/buttons/ButtonAddCart";
import ButtonDetails from "../atoms/buttons/ButtonDetails";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col py-2 px-6 rounded-md border border-black h-full m-auto">
        <img className="h-40 w-32" src={props.img} alt="image" />
        <p>{props.title}</p>
        <p className="bg-black text-white p-1 w-24 text-xs text-center rounded-lg">
          {props.category}
        </p>
        <p>{props.desc}</p>
        <div className="flex flex-row gap-2 mt-4">
          <ButtonDetails onClick={props.detailClick} />
          <ButtonAddCart onClick={props.addClick} />
        </div>
      </div>
    </>
  );
};

export default Card;
