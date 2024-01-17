// Import React and Tailwind CSS
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import {FaRegEdit} from "react-icons/fa";

// Define the interface for the form data
interface FormData {
    id: string;
    mac: string;
    mode: string;
    account: string;
    mpk_description: string;
    mpk_value: string;
}

// Define the interface for the component props
interface Props {
    data: FormData; // The initial form data passed as props
    getAllData: () => void; // A function to fetch all data from the API after updating a record
}

// Define the component function
const EditMpkDetails: React.FC<Props> = ({ data, getAllData }) => {
    // Use state hooks to store the form data and the modal visibility
    const [formData, setFormData] = useState<FormData>(data);
    const [showModal, setShowModal] = useState<boolean>(false);

    // Define a function to handle the input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Get the name and value of the input
        const { name, value } = e.target;

        // Update the form data state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Define a function to handle the form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default behavior of the form
        e.preventDefault();

        // Call the API to update the record in the database
        fetch('http://localhost:3000/mpkDetails/update/' + formData.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Do something with the response data
                if(data){
                    getAllData();
                }
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });

        // Close the modal
        setShowModal(false);
    };

    // Return the JSX element
    return (
        <div className="container mx-auto p-4">
            {/* The button to open the modal */}

            <button className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => setShowModal(true)}
            >
                <FaRegEdit/>
            </button>

            {/* The modal */}
            {showModal ? (
                <>
                    {/* The modal backdrop */}
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        {/* The modal content */}
                        <div
                            className="relative w-auto max-w-3xl mx-auto my-6 bg-white border-0 rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* The modal header */}
                            <div
                                className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font-semibold">Edit MPK Details</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                  <span
                      className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                                </button>
                            </div>
                            {/* The modal body */}
                            <div className="relative p-6 flex-auto">
                                {/* The form */}
                                <form onSubmit={handleSubmit}>
                                    {/* The form fields */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-1">
                                            <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">
                                                ID
                                            </label>
                                            <input
                                                type="text"
                                                id="id"
                                                name="id"
                                                value={formData.id}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                disabled
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="mac" className="block text-gray-700 text-sm font-bold mb-2">
                                                MAC
                                            </label>
                                            <input
                                                type="text"
                                                id="mac"
                                                name="mac"
                                                value={formData.mac}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                disabled
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="mode"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Mode
                                            </label>
                                            <input
                                                type="text"
                                                id="mode"
                                                name="mode"
                                                value={formData.mode}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="account"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Account
                                            </label>
                                            <input
                                                type="text"
                                                id="account"
                                                name="account"
                                                value={formData.account}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="mpk_description"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                MPK Description
                                            </label>
                                            <input
                                                type="text"
                                                id="mpk_description"
                                                name="mpk_description"
                                                value={formData.mpk_description}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="mpk_value"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                MPK Value
                                            </label>
                                            <input
                                                type="text"
                                                id="mpk_value"
                                                name="mpk_value"
                                                value={formData.mpk_value}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                    </div>
                                    {/* The form button */}
                                    <div
                                        className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            type="submit"
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

// Export the component
export default EditMpkDetails;
