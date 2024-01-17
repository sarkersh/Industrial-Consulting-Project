import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const TopBar: React.FC = () => {
  return (
    <div className="grid grid-cols-12 m-auto ml-5 mt-3">
      <div className="col-span-4 text-5xl py-3 flex justify-normal text-gray-500 items-center gap-3 cursor-pointer">
        <MdDashboard />
        <p>Dashboard</p>
      </div>
      <div className="bg-slate-800 col-span-8 mr-10 my-auto">
        <form className="w-full flex justify-normal items-center">
          <input
            type="text"
            className="w-full p-3 bg-slate-200"
            placeholder="Phone Model MAC Address Search"
          />
          <button className="p-3 text-xl h-full bg-slate-200 border-2">
            <IoSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopBar;
