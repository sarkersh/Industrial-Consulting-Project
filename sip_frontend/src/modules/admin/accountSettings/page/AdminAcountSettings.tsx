import React, { useState, useEffect } from 'react';

import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import EditAccountSettingsPopup from "../components/EditAccountSettings";
import NewAccountSettings from "../components/NewAccountSettings";
import DeleteRow from "../../../../utils/DeleteRow";
import axios from "axios";


const AdminAccountSettingsPage: React.FC = () => {
  const table_header: string[] = [
    "id",
    "model_id",
    "mac",
    "account_active",
    "account_name",
    "sip_server",
    "sip_user",
    "auth_id",
    "auth_password",
    "acc_name",
    "voicemail_id",
    "cf_created",
    "date_created",
    "flag",
    "edit",
    "delete",
  ];


  //Firebase Stuff
  const [accountSettings, setAccountSettings] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/accountsettings/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setAccountSettings(response.data);

    } catch (error: any) {
      // Handle the error
      console.error("Error:", error.message);
    }
    // Close the popup

  };

  useEffect(() => {

    getAllData();
    //advancedDeviceAdminSearch()

  }, []);


  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <RecordCount table_name="account_settings" recordCount={accountSettings.length} />
        <NewAccountSettings getAllData={getAllData} />
        <MacFilter />
      </div>
      <div className="mt-16 bg-white p-4 overflow-x-auto shadow-xl">
        <table className="w-full min-w-full">
          <thead>
            <tr>
              {table_header.map((ele, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {accountSettings.map((ele, index) => (
              <tr>

                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.id}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.model_id}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.mac}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.account_active}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.account_name}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.sip_server}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.sip_user}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.auth_id}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.auth_password}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.acc_name}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.voicemail_id}
                </td>

                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.cf_created}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.date_created}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.flag}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditAccountSettingsPopup data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow id={ele.id} apiUrl={"accountSettings/delete"} getAllData={getAllData} />
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAccountSettingsPage;
