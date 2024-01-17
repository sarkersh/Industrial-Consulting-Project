
import React, { useState, useEffect } from 'react';
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import EditDeviceAdmin from "../components/EditDeviceAdmin";
import NewDeviceAdmin from "../components/NewDeviceAdmin";
import DeleteRow from "../../../../utils/DeleteRow";

import axios from "axios";

const AdminDeviceAdmin: React.FC = () => {
  const table_header: string[] = ["mac", "admin_pass", "edit", "delete"];

  //Firebase Stuff
  const [adminDevices, setAdminAdevces] = useState([]);
  

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/deviceAdmin/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setAdminAdevces(response.data);

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
  //}, [category, keyword, location, shop]);


  console.log("Admin Devices:", adminDevices);

  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <RecordCount table_name="device_admin" />
        <NewDeviceAdmin getAllData={getAllData}/>
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
          {adminDevices.map((ele, index) => (
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

                {ele.admin_pass}

              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <EditDeviceAdmin data={ele} getAllData={getAllData} />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <DeleteRow id={ele.mac} apiUrl="deviceAdmin/delete" getAllData={getAllData} />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDeviceAdmin;
