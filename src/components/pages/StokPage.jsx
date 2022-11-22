import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Products } from "../../features/fakestore/fakeStoreSlice";

const StokPage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.entities);
  const [stock, setStock] = useState(20);

  useEffect(() => {
    dispatch(Products());
  }, [dispatch]);

  const handleChange = (e) => {
    setStock(e.target.value);
  };

  const handleToUpdate = () => {
    alert("Stock terupdate");
  };

  return (
    <>
      <div className="flex justify-center ">
        <table className="table-zebra w-11/12 mx-12 my-20">
          <thead className="border border-solid border-black">
            <tr>
              <th className="px-4 py-2 text-lg">Products</th>
              <th className="px-4 py-2 text-lg">Stock</th>
              <th className="px-4 py-2 text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => {
              return (
                <tr key={product?.id}>
                  <td className="text-center">
                    <div className="flex p-4">
                      <img
                        className="w-32 text-center"
                        src={product?.image}
                        alt=""
                      />
                      <div className="px-6 py-2 text-left">
                        <strong>{product?.title}</strong>
                        <p>{product?.description}</p>
                        <p className="mt-4 bg-black text-white p-1 w-24 text-xs text-center rounded-lg">
                          {product?.category}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <input
                      type="number"
                      name="stock"
                      onChange={handleChange}
                      value={stock}
                      className="text-center"
                    />
                  </td>
                  <td className="text-center">
                    <button
                      className="p-2 bg-blue-500 rounded-lg text-white"
                      onClick={() => handleToUpdate()}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StokPage;
