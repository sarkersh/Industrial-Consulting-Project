import React from "react";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp.tsx";
import {Link} from "react-router-dom";


const HomePage: React.FC = () => {


  return (
      <div>

          <div className="grid grid-cols-1 gap-1 h-1/3">
              <div className="p-4 flex justify-center items-center" style={{height: "50px"}}>
                  <LoginForm/>
                  <span style={{width: "10px"}}></span>
                  <Signup/>

              </div>
          </div>

          <div className="grid grid-cols-1 gap-1 h-1/3">
              <div className="grid grid-cols-1 gap-1 h-1/3">
                  <div className="p-4 flex justify-center items-center" style={{height: "50px"}}>
                      <h1 className="text-xl font-bold">
                          Click on One of the link to got to the page
                      </h1>

                  </div>
              </div>

              <div className="grid grid-cols-2 gap-4">

                  <div className="bg-gray-50 p-4 flex justify-center items-center">
                      <button className="text-white bg-red-500 px-4 py-2 rounded">
                          <Link to={"/admin/account_settings"}>Admin</Link>
                      </button>
                  </div>
                  <div className="bg-gray-50 p-4 flex justify-center items-center">
                      <button className="text-white bg-blue-500 px-4 py-2 rounded">
                          <Link to={"/dashboard/configuration/account_settings"}>Configuration</Link>
                      </button>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default HomePage;
