import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';


// Define the file list component
const FileList: React.FC= () => {


    const apiUrl = "http://localhost:3000/api/config/fileList";

    // Define the state for the file list
    const [fileList, setFileList] = useState<string[]>([]);

    // Define the handler for fetching the file list
    const fetchFileList = async () => {
        try {
            // Send a GET request to the API URL
            const response = await axios.get(apiUrl);

            // Check if the response data is an array of strings
            if (
                Array.isArray(response.data) &&
                response.data.every((item) => typeof item === 'string')
            ) {
                // Set the file list state to the response data
                setFileList(response.data);
            } else {
                // Throw an error with the response data
                throw new Error(JSON.stringify(response.data));
            }
        } catch (error) {
            // Handle the error
            console.error(error);
            alert('Something went wrong. Please try again.');
        }
    };

    // Define the handler for deleting a file
    const handleDelete = async (file: string) => {

        const deleteUrl =  "http://localhost:3000/api/config/delete-file/"
        try {
            // Send a DELETE request to the API URL with the file name as a query parameter
            const response = await axios.delete(`${deleteUrl}?file=${file}`);

            // Check if the response status is 200
            if (response.status === 200) {
                // Remove the file from the file list state
                setFileList(fileList.filter((item) => item !== file));

                // Alert the user that the file was deleted
                alert(`File ${file} deleted successfully.`);
            } else {
                // Throw an error with the response status
                throw new Error(response.status.toString());
            }
        } catch (error) {
            // Handle the error
            console.error(error);
            alert('Something went wrong. Please try again.');
        }
    };



    // Fetch the file list when the component loads
    useEffect(() => {
        fetchFileList();
    }, []);

    // Return the JSX for the component
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4"> Configuration XML Files </h1>
            {fileList.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 border-2 rounded-lg w-1/2 shadow-lg p-4">
                    {fileList.map((file) => (
                        <div
                            key={file}
                            className="grid grid-cols-2 gap-2 items-center col-span-3 border-b-2 py-2"
                        >
                            <div className="col-span-1 text-left">{file}</div>
                            <div className="col-span-1 text-center">
                                <FaTrash
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                    onClick={() => handleDelete(file)}
                                />
                            </div>

                        </div>
                    ))}
                </div>
            ) : (
                <p>No files found.</p>
            )}
        </div>
    );
};

export default FileList;
