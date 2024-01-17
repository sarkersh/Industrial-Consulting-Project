import React, { useState, useEffect } from 'react';
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import EditAdvanceSettings from "../components/EditAdvanceSettings";
import NewAdvanceSettings from "../components/NewAdvanceSettings";
import axios from "axios";
import DeleteRow from "../../../../utils/DeleteRow.tsx";

const AdminAdvanceSettingsPage: React.FC = () => {
  const table_header: string[] = [
    "mac",
    "vlan_tag",
    "priority_tag",
    "pc_vlan_tag",
    "pc_priority_tag",
    "host_name",
    "bg_label",
    "long_label",
    "edit",
    "delete",
  ];



  //Firebase Stuff
  const [advanceSettings, setAdvanceSettings] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/advanceSettings/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setAdvanceSettings(response.data);

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
        <RecordCount table_name="advance_settings" />
        <NewAdvanceSettings getAllData={getAllData} />
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
          {advanceSettings.map((ele, index) => (
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
                  {ele.vlan_tag}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.priority_tag}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.pc_vlan_tag}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.pc_priority_tag}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.host_name}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.bg_label}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.long_label}
                </td>


                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditAdvanceSettings data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow  id={ele.mac} apiUrl = "advanceSettings/delete" getAllData={getAllData}/>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAdvanceSettingsPage;
