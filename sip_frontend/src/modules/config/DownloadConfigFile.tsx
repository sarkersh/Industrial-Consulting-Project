import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  FaDownload } from 'react-icons/fa';


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



    // Define the handler for downloading a file
    const handleDownload = async (file: string) => {

        const downloadUrl =  "http://localhost:3000/api/config/download/"
        try {
            // Send a GET request to the API URL with the file name as a query parameter
            const response = await axios.get(`${downloadUrl}?file=${file}`, {
                responseType: 'blob',
            });

            // Check if the response is OK
            if (response.status === 200) {
                // Get the blob from the response
                const blob = response.data;

                // Create a URL for the blob
                const url = URL.createObjectURL(blob);

                // Create a link element with the URL and the download attribute
                const link = document.createElement('a');
                link.href = url;
                link.download = file;

                // Append the link to the document body and click it
                document.body.appendChild(link);
                link.click();

                // Remove the link from the document body and revoke the URL
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
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
                            <div className="col-span-1 text-right">
                                <FaDownload
                                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                    onClick={() => handleDownload(file)}
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
