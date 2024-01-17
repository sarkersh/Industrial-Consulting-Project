import React from "react";

interface RecordCountProps {
  table_name: string;
  recordCount: number;
}

const RecordCount: React.FC<RecordCountProps> = ({ table_name, recordCount }) => {
  return (
    <div className="bg-white w-fit shadow-lg p-2">
      <table>
        <tbody>
          <tr className="">
            <td className="border border-gray-300 px-4 py-2 text-left font-semibold">
              Table
            </td>
            <td className="border border-gray-300 px-4 py-2 text-left">
              {table_name}
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300 px-4 py-2 text-left font-semibold">
              Record
            </td>
            <td className="border border-gray-300 px-4 py-2 text-left">{recordCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordCount;
