import React from "react";
import ConfigurationTopBar from "../components/ConfigurationTopBar";
import { Outlet } from "react-router-dom";
import ConfigurationBottomBar from "../components/ConfigurationBottomBar";

const ConfigurationLayout: React.FC = () => {
  return (
    <div className="bg-white rounded-md m-5 flex flex-col h-4/5 overflow-hidden">
      <div className="shadow-lg">
        <ConfigurationTopBar />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="">
          <Outlet />
        </div>
      </div>
      <div>
        <ConfigurationBottomBar />
      </div>
    </div>
  );
};

export default ConfigurationLayout;
