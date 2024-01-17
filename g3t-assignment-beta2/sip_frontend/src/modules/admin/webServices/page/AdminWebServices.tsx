import React, {useEffect, useState} from "react";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import DeleteRow from "../../../../utils/DeleteRow";
import NewWebService from "../components/NewWebServices";
import EditWebServices from "../components/EditWebServices";

import axios from "axios";



const AdminWebServicesPage: React.FC = () => {
  const table_header: string[] = [
    "mac",
    "weather_update",
    "currency_exchange",
    "connection_type",
    "firmware_upgrade",
    "edit",
    "delete",
  ];
  
  const [webServices, setWebServices] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/webServices/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setWebServices(response.data);

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
        <RecordCount table_name="web_services" />
        <NewWebService getAllData={getAllData}/>
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
          {webServices.map((ele, index) => (
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
                  {ele.weather_update}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.currency_exchange}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.connection_type}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.firmware_upgrade}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-center">
                  <EditWebServices data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow id={ele.mac} apiUrl="webServices/delete" getAllData={getAllData}/>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminWebServicesPage;
