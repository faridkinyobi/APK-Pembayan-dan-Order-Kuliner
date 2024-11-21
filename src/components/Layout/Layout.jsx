import React, { useRef, useEffect, useState, useCallback } from "react";
import ShoppingList from "../Features/Keranjang/ShoppingList";
import axios from "axios";
import ShoppingForm from "../Features/Keranjang/ShoppingForm";
// import Es from "../../Img/esteh-preview1.png";
export default function Layout({ children }) {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState({});
  // console.log(data);
  // const scrollContainerRef = useRef(null);
  const [keranjang, setKeranjang] = useState({
    name: "",
    nomer: "",
    status: "pending",
    jumlahItem: 0,
    total: 0,
    data: [],
  });
  // console.log("data",keranjang)
  // console.log("keranjang",keranjang)
  const total = data.reduce((acc, item, index) => {
    return acc + item.harga * (number[index] || 1);
  }, 0);
  console.log(keranjang);
  // console.log(keranjang);
  // const handleMouseDown = (e) => {
  //   const container = scrollContainerRef.current;
  //   container.isDragging = true;
  //   container.startX = e.pageX - container.offsetLeft;
  //   container.scrollLeftStart = container.scrollLeft;
  // };

  // const handleMouseMove = (e) => {
  //   const container = scrollContainerRef.current;
  //   if (!container.isDragging) return;
  //   const x = e.pageX - container.offsetLeft;
  //   const walk = (x - container.startX) * 2; // Kecepatan scroll
  //   container.scrollLeft = container.scrollLeftStart - walk;
  // };

  // const handleMouseUpOrLeave = () => {
  //   const container = scrollContainerRef.current;
  //   container.isDragging = false;
  // };

  const FetchData = useCallback(async () => {
    const res = await axios.get("http://localhost:4000/keranjangs");
    setData(res.data);
    setKeranjang((prevKeranjang) => ({
      ...prevKeranjang,
      jumlahItem: res.data.length,
      data: res.data.map((items, index) => ({
        ...items,
        jumlah: number[index] || 1,
      })),
    }));
  }, [number]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeranjang((keranjang) => ({
      ...keranjang,
      [name]: value,
      total: total,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (keranjang.name || keranjang.jumlah) {
        await axios.post("http://localhost:4000/pesanans", keranjang);
        const ids = data.map((items) => items.id);

        for (const id of ids) {
          await axios.delete(`http://localhost:4000/keranjangs/${id}`);
        }
        FetchData();
        alert("sukses");
      } else {
        alert("customer name end tabel name harus di isi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return (
    <div className="flex h-full md:h-screen  bg-neutral-100">
      <div className="md:w-[60%] lg:w-[70%] space-y-3 md:h-screen">{children}</div>
      {/* keranjang */}
      <div className="md:w-[40%] lg:w-[30%] border-l-2 border-neutral-400 shadow-md bg-white  flex flex-col  justify-between">
        {/* form end list order */}
        {/* form Order */}
        <ShoppingForm
          handleSubmit={handleSubmit}
          keranjang={keranjang}
          handleChange={handleChange}
        />

        {/* Card list order */}
        <ShoppingList
          data={data}
          FechData={FetchData}
          number={number}
          setNumber={setNumber}
        />

        {/* ringkasan pesanan */}
        <div className="mx-4 my-4 md:mb-6 pb-10 space-y-3 ">
          <h3 className="text-xl font-medium">Order summary</h3>
          <div className="flex justify-between bg-slate-100 px-3 py-1 rounded-xl">
            <div>
              <h4 className="text-lg font-medium">Jumlah</h4>
              <h4 className="text-lg font-medium">Total</h4>
            </div>
            <div className="text-lg">
              <p>
                {data.length} <strong>Item</strong>
              </p>
              <p>
                <strong>Rp.</strong>
                {total}
              </p>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className=" w-full py-3 px-9  bg-blue-500  font-medium rounded-lg text-neutral-50 ring-blue-800 hover:ring-2 transition-all delay-100 ease-in-out"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
