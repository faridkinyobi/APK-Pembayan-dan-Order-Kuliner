import React from "react";
// import Image from '../../Img/assets'
export default function MenuCard({ img, titel, price }) {
  return (
    <div className="flex flex-col items-center rounded-lg text-center py-6 px-2  cursor-pointer bg-white shadow-lg hover:scale-95 hover:shadow-lg hover:shadow-neutral-500 transition-all delay-100 ease-in-out hover:rounded-none">
      <img
        src={`./assets/${img}`}
        width={400}
        height={140}
        alt="Logo"
        className="max-h-40 md:w-60 object-contain rounded-md"
      />

      <h1 className="font-bold text-lg capitalize">{titel}</h1>
      <h1 className="font-semibold text-lg">
        Rp.<strong>{price}</strong>
      </h1>
    </div>
  );
}
