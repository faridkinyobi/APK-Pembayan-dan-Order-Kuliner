import React from "react";
import axios from "axios";
import ShoppingCart from "./ShoppingCart";

export default function ShoppingList({ data, FechData, setNumber, number }) {
  const handleDelet = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/keranjangs/${id}`);
      FechData();
    } catch (error) {
      console.log(error);
    }
  };
  const handlePlus = (index) => {
    setNumber((prev) => ({ ...prev, [index]: (prev[index] || 1) + 1 }));
  };
  const handleMin = (index) => {
    setNumber((prev) => ({
      ...prev,
      [index]: Math.max((prev[index] || 1) - 1, 0),
    }));
  };

  return (
    <div className="overflow-y-scroll h-full md:h-[20rem] lg:h-full mx-4  OverLis ">
      {data.map((items, index) => {
        return (
          <div key={index}>
            <ShoppingCart
              img={items.gambar}
              title={items.nama}
              price={items.harga * number[index] || items.harga}
              num={number[index] || 1}
              handlePlus={() => handlePlus(index, items.id)}
              handleMin={() => handleMin(index, items.id)}
              handleDelet={() => handleDelet(items.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
