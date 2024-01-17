// Import React and Tailwind CSS
import React from 'react';
import 'tailwindcss/tailwind.css';
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';

// Define the interface for the component props
interface Props {
    id: string; // The id of the record to delete
    apiUrl: string; // The API URL to delete the record from
}

// Define the component function
const DeleteButton: React.FC<Props> = ({ id , apiUrl  }) => {
    // Define a function to handle the button click
    const handleClick = () => {


        const baseUrl = 'http://localhost:3000/' ;

        //const url = 'http://localhost:3000/sipServer/delete/' + id;
        const url = baseUrl + apiUrl + '/'+ id;

        // Call the API to delete the record with the given id
        axios
            .delete(url)
            .then((response) => {
                // Do something with the response data
                console.log(response.data);
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });
    };

    // Return the JSX element
    return (
        <div className="container mx-auto p-4">
            {/* The button to delete the record */}
            <button
                className="bg-red-500 text-white p-2 rounded-md"
                onClick={handleClick}
            >
                <AiOutlineDelete />
            </button>
        </div>
    );
};

// Export the component
export default DeleteButton;