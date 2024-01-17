import React, {useEffect, useState} from "react";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import EditSipServer from "../components/EditSipServer";
import NewSipServer from "../components/NewSipServer";
import DeleteRow from "../../../../utils/DeleteRow";

import axios from "axios";

const AdminSipServerPage: React.FC = () => {
  const table_header: string[] = [
    "id",
    "sip_ip",
    "server_type",
    "edit",
    "delete",
  ];
  //const table_body: (string | number)[] = [1, "voip.office.org", "N"];

  const [sipServer, setSipServer] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/sipServer/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setSipServer(response.data);

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
        <RecordCount table_name="sip_server" recordCount={sipServer.length} />
        <NewSipServer getAllData={getAllData}/>
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

          {sipServer.map((ele, index) => (
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
                  {ele.sip_ip}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.server_type}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditSipServer data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow  id={ele.id} apiUrl = "sipServer/delete" getAllData={getAllData}/>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSipServerPage;
