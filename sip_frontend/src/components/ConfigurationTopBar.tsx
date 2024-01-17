import React from "react";
import { Link } from "react-router-dom";

const ConfigurationTopBar: React.FC = () => {
  return (
    <div className="">
      <ul className="flex justify-evenly items-center border-b-2 border-slate-600 py-5 text-xl font-semibold">
        <li><Link to={"/dashboard/configuration/account_settings"}>Account Settings</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Audio Settings</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Feature Settings</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Programmable Keys</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Advance Settings</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Web Service</Link></li>
        <li><Link to={"/dashboard/configuration/account_settings"}>Device Admin</Link></li>
      </ul>
    </div>
  );
};

export default ConfigurationTopBar;
