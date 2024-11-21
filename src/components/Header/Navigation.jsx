import React from "react";
// import { IconName } from "react-icons/sl";
export default function Navigation() {
  return (
    <div className=" border-b-2 border-neutral-400 shadow-sm bg-white">
      <div className="flex justify-between items-center py-2 max-w-[90%] mx-auto ">
        <h1 className="font-bold text-lg uppercase">GredResto</h1>
        <nav >
          <ul className="flex  flex-1 space-x-3 text-base font-medium text-neutral-700">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Order list</a>
            </li>
            <li>
              <a href="/">History</a>
            </li>
            <li>
              <a href="/">Bills</a>
            </li>
          </ul>
        </nav>
        <p className="w-8 h-8 border-2 border-neutral-800 rounded-full text-center justify-center font-extrabold text-2xl flex text-orange-400">G</p>
      </div>
    </div>
  );
}
