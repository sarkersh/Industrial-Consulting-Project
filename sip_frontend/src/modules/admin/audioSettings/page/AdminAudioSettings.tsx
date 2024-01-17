import React, {useEffect, useState} from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";
import EditAudioSettings from "../components/EditAudioSettings";
import NewAudioSettings from "../components/NewAudioSettings";
import DeleteRow from "../../../../utils/DeleteRow";

import axios from "axios";

const AdminAudioSettings: React.FC = () => {
  const table_header: string[] = [
    "mac",
    "fcodec",
    "scodec",
    "tcodec",
    "handsetgain",
    "edit",
    "delete",
  ];


  const [audioSettings, setAudioSettings] = useState([]);

  const getAllData = async () => {

    // Prevent default behavior
    //event.preventDefault();
    // Validate username, email and password
    // Make an api call to the endpoint with username, email and password
    try {
      const response = await axios.get(
          "http://localhost:3000/audioSettings/read",
          {

          }
      );

      // Handle the response
      //console.log("Response:", response.data);
      setAudioSettings(response.data);

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
        <RecordCount table_name="audio_settings" />
        <NewAudioSettings getAllData={getAllData} />
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
          {audioSettings.map((ele, index) => (
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
                  {ele.fcodec}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.scodec}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.tcodec}
                </td>
                <td
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele.handsetgain}
                </td>

                <td className="border border-gray-300 px-4 py-2 text-center">

                  <EditAudioSettings data={ele} getAllData={getAllData}/>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <DeleteRow id={ele.mac} apiUrl="audioSettings/delete" getAllData={getAllData}  />
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAudioSettings;
