
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import React, {useEffect, useState} from "react";

import EditMpkDetails from "../components/EditMpkDetails";
import NewMpkDetails from "../components/NewMpkSettings";
import DeleteRow from "../../../../utils/DeleteRow";

import axios from "axios";

const AdminMPKSettingsPage: React.FC = () => {
  const tableHeader = [
    "id",
    "mac",
    "mode",
    "account",
    "mpk_description",
    "mpk_value",
    "edit",
    "delete",
  ];
  
  const [mpkSettings, setMpkSettings] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/mpkDetails/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setMpkSettings(response.data);

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
        <RecordCount table_name="mpk_details" />
        <NewMpkDetails getAllData={getAllData} />
        <MacFilter />
      </div>
      <div className="mt-16 bg-white p-4 overflow-x-auto shadow-xl">
        <table className="w-full min-w-full">
          <thead>
            <tr>
              {tableHeader.map((ele, index) => (
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
          {mpkSettings.map((ele, index) => (
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
                  {ele.mac}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.mode}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.account}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.mpk_description}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.mpk_value}
                </td>


                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditMpkDetails data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow  id={ele.id} apiUrl = "mpkDetails/delete" getAllData={getAllData}/>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMPKSettingsPage;
