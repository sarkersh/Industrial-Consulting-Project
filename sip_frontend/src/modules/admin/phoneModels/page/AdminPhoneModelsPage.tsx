import React, {useEffect, useState} from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import NewPhoneModel from "../components/NewPhoneModel";
import EditPhoneModel from "../components/EditPhoneModel";
import DeleteRow from "../../../../utils/DeleteRow";
import axios from "axios";


const AdminPhoneModelsPage: React.FC = () => {
  const table_header: string[] = [
    "id",
    "phone_name",
    "mp_keys",
    "common",
    "edit",
    "delete",
  ];
  //const table_body: (string | number)[] = [1, "GXP-2130", 1, 1];

  const [phoneModels, setPhoneModels] = useState([]);

  const getAllDeviceAdmin = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/phoneModels/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setPhoneModels(response.data);

    } catch (error: any) {
      // Handle the error
      console.error("Error:", error.message);
    }
    // Close the popup

  };

  useEffect(() => {

    getAllDeviceAdmin();
    //advancedDeviceAdminSearch()

  }, []);




  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <RecordCount table_name="phone_macs" />
        <NewPhoneModel />
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
          {phoneModels.map((ele, index) => (
            <tr>

                <td
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.id}
                </td>

              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  <FaRegEdit />
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-red-500 text-white p-2 rounded-md">
                  <AiOutlineDelete />
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

export default AdminPhoneModelsPage;
