import React, {useEffect, useState} from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import NewFeatureSettings from "../components/NewFeatureSettings";
import EditFeatureSettings from "../components/EditFeatureSettings";

import axios from "axios";

const AdminFeatureSettingsPage: React.FC = () => {
  const table_header: string[] = [
    "mac",
    "a_transfer",
    "enable_cf",
    "fs_date",
    "rc_dnd",
    "disable_call_waiting",
    "dnd_on",
    "VPK_transfer",
    "cf_on",
    "cf_off",
    "incoming_call_popup",
    "edit",
    "delete",
  ];


  //Firebase Stuff
  const [featureSettings, setFeatureSettings] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/featureSettings/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setFeatureSettings(response.data);

    } catch (error: any) {
      // Handle the error
      console.error("Error:", error.message);
    }
    // Close the popup

  };

  useEffect(() => {

    getAllData();    

  }, []);



  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <RecordCount table_name="feature_settings" />
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
          {featureSettings.map((ele, index) => (
              <tr>

                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.mac}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.a_transfer}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.enable_cf}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.fs_date}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.rc_dnd}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.disable_call_waiting}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.dnd_on}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.VPK_transfer}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.cf_on}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.cf_off}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.incoming_call_popup}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white p-2 rounded-md">
                    <FaRegEdit/>
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-red-500 text-white p-2 rounded-md">
                    <AiOutlineDelete/>
                  </button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeatureSettingsPage;
