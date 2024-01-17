import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSideBar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
