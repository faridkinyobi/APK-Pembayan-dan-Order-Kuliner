import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";
export default function MenuList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    FechData();
  }, []);

  const FechData = async () => {
    const res = await axios.get("http://localhost:4000/products");
    setData(res.data);
  };

  const handleKeranjang = async (id) => {
    try {
      const res = await axios.get("http://localhost:4000/keranjangs");
      const check = res.data.some((items) => items.id === id);

      console.log("check", check);
      if (!check) {
        const result = await axios.get(`http://localhost:4000/products/${id}`);

        await axios.post("http://localhost:4000/keranjangs", result.data);
        window.location.reload();
      } else {
        alert("data sudah di masukan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" md:max-w-[95%] lg:max-w-[90%] mx-auto ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 overflow-y-scroll md:max-h-[50rem] lg:max-h-[25rem] OverLis">
        {data.map((items, index) => {
          return (
            <div key={index} onClick={() => handleKeranjang(items.id)}>
              <MenuCard
                img={items.gambar}
                titel={items.nama}
                price={items.harga}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
