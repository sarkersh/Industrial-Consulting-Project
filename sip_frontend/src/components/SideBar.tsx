import React from "react";
import { MdDashboard, MdOutlineCreateNewFolder } from "react-icons/md";
import { FiWifi } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiServerless } from "react-icons/si";
import { Link } from "react-router-dom";

interface SidebarItem {
  icon: JSX.Element;
  name: string;
  path: string;
}

const SideBar: React.FC = () => {
  const sidebarArray: SidebarItem[] = [
    {
      icon: <MdDashboard />,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FiWifi />,
      name: "Live Report",
      path: "/dashboard/live_server",
    },
    {
      icon: <MdOutlineCreateNewFolder />,
      name: "New Configuration",
      path: "/dashboard/configuration/account_setting_page",
    },
    {
      icon: <FaRegEdit />,
      name: "Edit Configuration",
      path: "/dashboard/edit_configuration",
    },
    {
      icon: <RiDeleteBin6Line />,
      name: "Delete Configuration",
      path: "/dashboard/delete_configuration",
    },
    {
      icon: <SiServerless />,
      name: "Change SIP Server",
      path: "/dashboard/change_sip_server",
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen w-64 font-serif shadow-2xl shadow-white ">
      <div className="text-slate-100 font-serif text-2xl h-32 text-center flex justify-center items-center border-b-2 border-slate-700">
        <h1 className="text-3xl ">G3T SIP</h1>
      </div>
      <div className="p-5  font-sans py-8">
        {sidebarArray.map((ele, index) => (
          <Link key={index} to={ele.path}>
            <div className="cursor-pointer text-xl py-3 flex justify-start items-center gap-3">
              {ele.icon}
              <p className="">{ele.name}</p>
            </div>
          </Link>
        ))}
        <div className="flex justify-center items-center mt-8">
          <button className="cursor-pointer w-full py-3 rounded-lg text-xl bg-red-700 text-white mt-5">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
