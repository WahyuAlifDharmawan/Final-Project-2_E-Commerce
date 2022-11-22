import React from "react";

const RekapPage = () => {
  return (
    <div>
      <div className="flex justify-center font-serif">
      <table className="table-zebra w-11/12 mx-12 my-20">
        <thead className="border border-solid border-black">
          <tr>
            <th className="px-4 py-2 text-lg">Products</th>
            <th className="px-4 py-2 text-lg">Price</th>
            <th className="px-4 py-2 text-lg">Sold</th>
            <th className="px-4 py-2 text-lg">Total</th>
          </tr>
        </thead>
      </table>
    </div>
    </div>
  );
};

export default RekapPage;
