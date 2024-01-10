import React from "react";

const ConfigurationTopBar: React.FC = () => {
  return (
    <div className="">
      <ul className="flex justify-evenly items-center border-b-2 border-slate-600 py-5 text-xl font-semibold">
        <li>Account Settings</li>
        <li>Audio Settings</li>
        <li>Feature Settings</li>
        <li>Programmable Keys</li>
        <li>Advance Settings</li>
        <li>Web Service</li>
        <li>Device Admin</li>
      </ul>
    </div>
  );
};

export default ConfigurationTopBar;
