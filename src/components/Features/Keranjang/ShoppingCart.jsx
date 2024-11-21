import React from "react";

export default function ShoppingCart({
  img,
  title,
  price,
  num,
  handlePlus,
  handleMin,
  handleDelet,
}) {
  return (
    <div className="flex flex-row justify-around items-center py-2 border-b-2">
      <img
        src={`./assets/${img}`}
        width={90}
        height={20}
        alt="Logo"
        className=" object-contain rounded-md"
      />
      <div className="space-y-2">
        <div className="flex">
          <p className="text-lg font-medium truncate w-28">{title}</p>
          <p className=" text-lg ">Rp.{price}</p>
        </div>
        {/* button min and plus */}
        <div className="flex justify-around space-x-2 items-center text-center ">
          <button
            onClick={handleMin}
            className=" text-lg px-3  bg-slate-200 hover:bg-slate-300 rounded-lg font-bold transition-all duration-75 ease-linear ring-slate-600 hover:ring-1"
          >
            -
          </button>
          <p className="text-lg">{num}</p>
          <button
            onClick={handlePlus}
            className=" text-lg px-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-white font-bold transition-all duration-75 ease-linear ring-blue-800 hover:ring-1"
          >
            +
          </button>
          <img
            onClick={() => handleDelet()}
            width={28}
            src="./Vector.png"
            alt="s"
            className=" cursor-pointer bg-neutral-200 hover:bg-neutral-300 p-1 rounded-lg transition-all duration-75 ease-linear ring-neutral-400 hover:ring-1"
          />
        </div>
      </div>
    </div>
  );
}
