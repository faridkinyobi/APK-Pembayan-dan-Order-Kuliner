import React from "react";

export default function CardOrderList({ props }) {
  const { name, status, jumlahItem, nomer, id } = props;
  return (
    <>
      <div className="px-3 py-2 w-52 bg-white rounded-lg shadow-md space-y-3">
        <div className=" text-left">
          <div className=" flex justify-between text-center items-center">
            <h2 className="font-bold text-lg capitalize">{name}</h2>
            <p>#{id}</p>
          </div>
          <div className="flex flex-row space-x-3">
            <p>{jumlahItem} Items</p>
            <p>Table {nomer} </p>
          </div>
        </div>
        <p className="bg-yellow-500 text-center rounded-xl text-white">{status}</p>
      </div>
    </>
  );
}
