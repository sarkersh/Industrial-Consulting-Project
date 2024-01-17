// Import React and Tailwind CSS
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import {FaRegEdit} from "react-icons/fa";

// Define the interface for the form data
interface FormData {
    mac: string;
    weather_update: string;
    currency_exchange: string;
    connection_type: string;
    firmware_upgrade: string;
}

// Define the interface for the component props
interface Props {
    data: FormData; // The initial form data passed as props
    getAllData: any
}

// Define the component function
const EditWebServices: React.FC<Props> = ({ data, getAllData }) => {
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
        fetch('http://localhost:3000/webServices/update/' + formData.mac, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
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
                                <h3 className="text-3xl font-semibold">Edit Web Services</h3>
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
                                        <div className="col-span-2">
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
                                            <label htmlFor="weather_update"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Weather Update
                                            </label>
                                            <input
                                                type="text"
                                                id="weather_update"
                                                name="weather_update"
                                                value={formData.weather_update}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="currency_exchange"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Currency Exchange
                                            </label>
                                            <input
                                                type="text"
                                                id="currency_exchange"
                                                name="currency_exchange"
                                                value={formData.currency_exchange}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="connection_type"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Connection Type
                                            </label>
                                            <input
                                                type="text"
                                                id="connection_type"
                                                name="connection_type"
                                                value={formData.connection_type}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="firmware_upgrade"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Firmware Upgrade
                                            </label>
                                            <input
                                                type="text"
                                                id="firmware_upgrade1"
                                                name="firmware_upgrade"
                                                value={formData.firmware_upgrade}
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
export default EditWebServices;
