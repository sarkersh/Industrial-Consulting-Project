import React, { useState } from 'react';
import axios from 'axios';

// Define the type for the file list props
type FileListProps = {
    // The URL of the Node.js API endpoint to get the file list
    apiUrl: string;
};

// Define the file list component
const FileList: React.FC<FileListProps> = ({ apiUrl }) => {
    // Define the state for the file list
    const [fileList, setFileList] = useState<string[]>([]);

    // Define the handler for the button click
    const handleClick = async () => {
        try {
            // Send a GET request to the API URL
            const response = await axios.get(apiUrl);

            // Check if the response data is an array of strings
            if (Array.isArray(response.data) && response.data.every((item) => typeof item === 'string')) {
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

    // Return the JSX for the component
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">File List</h1>
            <button
                type="button"
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Fetch File List
            </button>
            {fileList.length > 0 && (
                <ul className="list-disc">
                    {fileList.map((file) => (
                        <li key={file}>{file}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileList;
