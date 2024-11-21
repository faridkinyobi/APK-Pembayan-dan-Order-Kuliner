import React from "react";

export default function ShoppingForm({
  handleSubmit,
  keranjang,
  handleChange,
}) {
  return (
    <div className="flex flex-col space-y-2 mx-4 my-3">
      <h2 className="text-xl font-medium">Customer Informasi</h2>
      <form  className=" space-y-1 ">
        <input
          placeholder="Customer Name"
          type="text"
          name="name"
          value={keranjang.name}
          onChange={handleChange}
          className="ps-2 px-2 py-1 w-full border-2 rounded-lg text-base  placeholder:font-light"
        />
        <input
          placeholder="Table Number "
          type="number"
          min={1}
          name="nomer"
          value={keranjang.nomer}
          onChange={handleChange}
          className="ps-2 px-2 py-1 w-full border-2 rounded-lg text-base  placeholder:font-light"
        />
      </form>
    </div>
  );
}
