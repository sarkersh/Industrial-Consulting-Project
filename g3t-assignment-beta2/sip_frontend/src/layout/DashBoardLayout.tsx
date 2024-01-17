import React from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-normal items-center">
        <div className="">
          <SideBar />
        </div>
        <div className="col-span-4 bg-slate-300 h-screen w-screen">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
