import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import RecordCount from "../../../../components/RecordCount";
import MacFilter from "../../../../components/MacFilter";

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

  const table_body: (string | number)[] = [
    "000B8292EEF2",
    0,
    0,
    0,
    0,
    "VoIP-2111993",
    0,
    1,
  ];

  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <RecordCount table_name="advance_settings" />
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
            <tr>
              {table_body.map((ele, index) => (
                <td
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  {ele}
                </td>
              ))}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAdvanceSettingsPage;
