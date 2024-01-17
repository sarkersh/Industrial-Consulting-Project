import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Login from "./LoginForm.tsx";
import Signup from "./SignUp.tsx";
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
    { name: "account_settings", path: "/admin/account_settings" },
    { name: "advanced_settings", path: "/admin/advance_settings" },
    { name: "audio_settings", path: "/admin/audio_settings" },
    { name: "device_admin", path: "/admin/device_admin" },
    { name: "feature_settings", path: "/admin/feature_settings" },
    { name: "mpk_details", path: "/admin/mpk_details" },
    { name: "phone_macs", path: "/admin/phone_macs" },
    { name: "sip_server", path: "/admin/sip_server" },
    { name: "web_services", path: "/admin/web_services" },
  ];

  return (
    <div className="w-60 bg-slate-950 h-screen overflow-hidden flex flex-col justify-normal items-center overflow-y-auto">
      <div className="text-3xl font-serif text-slate-100 flex justify-center items-center p-12 border-2 border-transparent border-b-slate-500">
        <h1>G3T SIP</h1>
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
