import React from "react";

const ConfigurationBottomBar: React.FC = () => {
  return (
    <div className="bg-slate-700 py-2 text-white text-xl flex justify-between items-center px-10 mt-2 shadow-2xl z-10">
      <div>New Configuration</div>
      <div>
        <button className="bg-slate-900 px-5 py-3 rounded-xl">
          Create Configuration File
        </button>
      </div>
    </div>
  );
};

export default ConfigurationBottomBar;
