import React from "react";

const MacFilter: React.FC = () => {
  return (
    <div className="bg-white w-fit shadow-lg p-2">
      <div className="border border-gray-300 px-1 py-2 text-left font-semibold">
        <p>Filter by MAC address</p>
      </div>
      <div>
        <select className="border border-gray-300 px-4 py-2 bg-slate-300 text-black text-center">
          <option value="default">Select MAC Address</option>
        </select>
      </div>
    </div>
  );
};

export default MacFilter;
