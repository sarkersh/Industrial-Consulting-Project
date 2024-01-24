import React, { useState } from 'react';
import Select from 'react-select';


// Define the type for the file options
type FileOption = {
    label: string;
    value: string;
};

// Define some sample file options
const fileOptions: FileOption[] = [
    { label: 'File 1', value: 'file1.xml' },
    { label: 'File 2', value: 'file2.xml' },
    { label: 'File 3', value: 'file3.xml' },
];

// Define the type for the form props
type FormProps = {
    // The URL of the Node.js API endpoint to download the file
    downloadUrl: string;
};

// Define the form component
const Form: React.FC<FormProps> = ({ downloadUrl }) => {
    // Define the state for the selected file option
    const [selectedFile, setSelectedFile] = useState<FileOption | null>(null);

    //const downloadUrl1 = downloadUrl ||  "http://localhost:3000/download/";


    // Define the handler for the form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default browser behavior
        event.preventDefault();

        // Check if there is a selected file
        if (selectedFile) {

            // Send a GET request to the download URL with the file value as a query parameter
            fetch(`${downloadUrl}?file=${selectedFile.value}`)
                .then((response) => {
                    // Check if the response is OK
                    if (response.ok) {
                        // Get the blob from the response
                        return response.blob();
                    } else {
                        // Throw an error with the status text
                        throw new Error(response.statusText);
                    }
                })
                .then((blob) => {
                    // Create a URL for the blob
                    const url = URL.createObjectURL(blob);

                    // Create a link element with the URL and the download attribute
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = selectedFile.value;

                    // Append the link to the document body and click it
                    document.body.appendChild(link);
                    link.click();

                    // Remove the link from the document body and revoke the URL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                })
                .catch((error) => {
                    // Handle the error
                    console.error(error);
                    alert('Something went wrong. Please try again.');
                });
        } else {
            // Alert the user to select a file
            alert('Please select a file to download.');
        }
    };

    // Return the JSX for the form
    return (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Download File 444</h1>
            <Select
                options={fileOptions}
                value={selectedFile}
                onChange={setSelectedFile}
                placeholder="Select a file"
                className="w-64 mb-4"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Download
            </button>
        </form>

    );
};

export default Form;
