import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-xl font-bold">
        Click on One of the link to got to the page
      </h1>
      <ul className="mt-16">
        <li
          onClick={() => {
            navigate("/admin/account_settings");
          }}
          className="cursor-pointer m-2"
        >
          /admin/account_settings
        </li>
        <li
          onClick={() => {
            navigate("/dashboard/configuration/account_settings");
          }}
          className="cursor-pointer m-2"
        >
          /dashboard/configuration/account_setting_page
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
