import React, { useEffect, useState } from "react";
import CardOrderList from "./CardOrderList";
import axios from "axios";

export default function Orderlist() {
  const [keranjang, setKeranjang] = useState([]);
  
  const FetchData = async () => {
    const res = await axios.get("http://localhost:4000/pesanans");
    setKeranjang(res.data);
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div
      className="OverLis w-full flex items-center overflow-x-scroll max-w-[95%] ml-auto"
      // ref={scrollContainerRef}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUpOrLeave}
      // onMouseLeave={handleMouseUpOrLeave}
    >
      {keranjang.map((items, index) => {
        return (
          <div className="flex items-center gap-5 " key={index}>
            <CardOrderList props={items} />
          </div>
        );
      })}
    </div>
  );
}
