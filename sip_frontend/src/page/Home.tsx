import React, {useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp.tsx";
import {Link} from "react-router-dom";
import Logout from "../components/Logout.tsx";


const HomePage: React.FC = () => {

    const [token, setToken] = useState(null);


    const handleToken = (newtoken) => {
        setToken(newtoken);
    }

    console.log("TOKEN", token);


    // render component based on token
    if (!token) {
        // token exists, show content div
        return (
            <div className="grid grid-cols-1 items-center gap-2 h-full">

                <h1 className={"flex justify-center items-center text-3xl mt-10"}>Welcom to G3T</h1>
                <h1 className={"flex justify-center items-center text-2xl"}>SIP Configuration System</h1>

                <div className="p-4 flex justify-center items-center" style={{height: "50px"}}>
                    <LoginForm handleToken={handleToken}/>
                    <span style={{width: "10px"}}></span>
                    <Signup handleToken={handleToken}/>

                </div>
            </div>
        )

    } else {

        return (
            <div>

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
                              <Link to={"/admin/account_settings"}>Admin (CRUD Operations)</Link>
                          </button>
                      </div>
                      <div className="bg-gray-50 p-4 flex justify-center items-center">
                          <button className="text-white bg-blue-500 px-4 py-2 rounded">
                              <Link to={"/dashboard/new_configuration"}>Configuration (XML)</Link>
                          </button>
                      </div>
                  </div>

                    <div className="p-4 flex justify-center items-center" style={{height: "50px"}}>
                        <Logout handleToken={handleToken}/>
                    </div>

              </div>

          </div>
      );
    }
};

export default HomePage;
