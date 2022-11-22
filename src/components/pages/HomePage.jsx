import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Products } from "../../features/fakestore/fakeStoreSlice";
import Card from "../molekuls/Card";
import { addItems } from "../../features/fakestore/fakeStoreSlice";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.entities);
  // let location = useLocation();
  // const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);

  // console.log(allProducts);
  const handleToAdd = (item, product) => {
    if (!localStorage.getItem("user")) {
      navigate(`/login`, { replace: location });
    } else {
      dispatch(addItems(item));
      alert("Berhasil Disimpan");
      // dispatch(addToCart(product));
    }
  };

  return (
    <>
      <div className="">
        <div className="text-center p-6 text-4xl font-serif">
          <h1>Products</h1>
        </div>
        <hr />
        <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
          {allProducts.map((product) => {
            return (
              <div key={product?.id}>
                <Card
                  // key={indey}
                  img={product?.image}
                  title={product?.title}
                  category={product?.category}
                  desc={product?.description.substr(0, 100) + "..."}
                  detailClick={() =>
                    navigate(`/product/${product?.id}`, { replace: true })
                  }
                  addClick={() => handleToAdd(product)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
