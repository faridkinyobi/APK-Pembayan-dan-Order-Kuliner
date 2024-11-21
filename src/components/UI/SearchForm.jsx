import React from "react";

export default function SearchForm() {
  return (
    <div className="md:space-x-2 space-x-0">
      <input
        type="text"
        className=" border-2 md:w-96 max-w-96 ps-3 py-2 rounded-sm my-2 md:my-0"
        placeholder="kaywords"
      ></input>
      <button className="bg-orange-400 py-2 px-4 rounded-sm font-medium text-white ring-orange-800 hover:ring-2 transition-all delay-100 ease-in-out">
        Search
      </button>
    </div>
  );
}
