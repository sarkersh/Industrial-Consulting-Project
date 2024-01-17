// Import React and Tailwind CSS
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import {FaRegEdit} from "react-icons/fa";


// Define the interface for the form data
interface FormData {
    id: string;
    model_id: string;
    mac: string;
    account_active: number;
    account_name: string;
    sip_server: string;
    sip_user: string;
    auth_id: string;
    auth_password: string;
    acc_name: string;
    voicemail_id: string;
    cf_created: string;
    date_created: string;
    flag: number;
}

// Define the interface for the component props
interface Props {
    data: FormData; // The initial form data passed as props
    getAllData: any
}

// Define the component function
const FormComponent: React.FC<Props> = ({ data, getAllData }) => {
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
        fetch('http://localhost:3000/accountSettings/update/' + formData.id, {
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
                                <h3 className="text-3xl font-semibold">Form</h3>
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
                                            <label htmlFor="model_id"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Model ID
                                            </label>
                                            <input
                                                type="text"
                                                id="model_id"
                                                name="model_id"
                                                value={formData.model_id}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="account_active"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Account Active
                                            </label>
                                            <input
                                                type="text"
                                                id="account_active"
                                                name="account_active"
                                                value={formData.account_active}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="account_name"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Account Name
                                            </label>
                                            <input
                                                type="text"
                                                id="account_name"
                                                name="account_name"
                                                value={formData.account_name}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="sip_server"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                SIP Server
                                            </label>
                                            <input
                                                type="text"
                                                id="sip_server"
                                                name="sip_server"
                                                value={formData.sip_server}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="sip_user"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                SIP User
                                            </label>
                                            <input
                                                type="text"
                                                id="sip_user"
                                                name="sip_user"
                                                value={formData.sip_user}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="auth_id"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Auth ID
                                            </label>
                                            <input
                                                type="text"
                                                id="auth_id"
                                                name="auth_id"
                                                value={formData.auth_id}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="auth_password"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Auth Password
                                            </label>
                                            <input
                                                type="password"
                                                id="auth_password"
                                                name="auth_password"
                                                value={formData.auth_password}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="acc_name"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Account Name
                                            </label>
                                            <input
                                                type="text"
                                                id="acc_name"
                                                name="acc_name"
                                                value={formData.acc_name}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="voicemail_id"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Voicemail ID
                                            </label>
                                            <input
                                                type="text"
                                                id="voicemail_id"
                                                name="voicemail_id"
                                                value={formData.voicemail_id}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="cf_created"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                CF Created
                                            </label>
                                            <input
                                                type="text"
                                                id="cf_created"
                                                name="cf_created"
                                                value={formData.cf_created}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="date_created"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Date Created
                                            </label>
                                            <input
                                                type="text"
                                                id="date_created"
                                                name="date_created"
                                                value={formData.date_created}
                                                onChange={handleChange}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="flag"
                                                   className="block text-gray-700 text-sm font-bold mb-2">
                                                Flag
                                            </label>
                                            <input
                                                type="text"
                                                id="flag"
                                                name="flag"
                                                value={formData.flag}
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
                                            Submit
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
export default FormComponent;



