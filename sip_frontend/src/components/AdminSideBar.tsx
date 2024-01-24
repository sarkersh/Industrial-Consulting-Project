import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Logout from "./Logout.tsx";


interface SidebarItem {
  name: string;
  path: string;
}

const AdminSideBar: React.FC = () => {

  const [token, setToken] = useState(null);
  const navigate = useNavigate();


  const handleToken = (newtoken) => {
    setToken(newtoken);
  }


  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if the token is present in localStorage
    if(!token || token === null){
      navigate("/");
    }

  })


  const sidebarArray: SidebarItem[] = [
    { name: "Account Settings", path: "/admin/account_settings" },
    { name: "Advanced Settings", path: "/admin/advance_settings" },
    { name: "Audio Settings", path: "/admin/audio_settings" },
    { name: "Device Admin", path: "/admin/device_admin" },
    { name: "Feature_settings", path: "/admin/feature_settings" },
    { name: "MPK Details", path: "/admin/mpk_details" },
    { name: "Pone Macs", path: "/admin/phone_macs" },
    { name: "SIP Server", path: "/admin/sip_server" },
    { name: "Web Seervices", path: "/admin/web_services" },
  ];

  return (
    <div className="w-60 bg-slate-950 h-screen overflow-hidden flex flex-col justify-normal items-center overflow-y-auto">
      <div className="text-2xl font-serif text-slate-100 flex justify-center items-center p-12 border-2 border-transparent border-b-slate-500">
        <Link to={"/"}>
          <h2 className="text-2xl">G3T SIP</h2>
          <h3>Home Page</h3>
        </Link>
      </div>
      <div className="mt-5 text-xl text-white">
        {sidebarArray.map((ele, index) => (
            <div
                className="p-3 flex justify-start items-center m-5 bg-slate-500 bg-opacity-5 border-b-2 border-slate-950 hover:border-white transition-all duration-400 ease-in-out hover:bg-slate-900 cursor-pointer"
                key={index}
                onClick={() => {
                  navigate(ele.path);
                }}
            >
              <p>{ele.name}</p>
            </div>
        ))}
        <div className="flex justify-center items-center mt-8">
          <Logout handleToken={handleToken}/>
        </div>
      </div>

    </div>
  );
};

export default AdminSideBar;
