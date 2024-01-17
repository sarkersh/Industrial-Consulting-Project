// NewWebService.tsx
import React, { useState } from "react";
import axios from "axios";

interface FormValues {
    mac: string;
    weather_update: boolean;
    currency_exchange: boolean;
    connection_type: string;
    firmware_upgrade: string;
}

interface Props {
    getAllData: any
}

const NewWebService:  React.FC<Props> = ({ getAllData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        mac: "",
        weather_update: false,
        currency_exchange: false,
        connection_type: "",
        firmware_upgrade: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
           const response = await axios.post("http://localhost:3000/webServices/create", formValues);

            if(response.data){
                getAllData();
            }
        } catch (error) {
            alert("Something went wrong");
        }


        // Close the modal
        setShowPopup(false);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowPopup(true)}
            >
                New Web Service
            </button>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg max-w-md">
                        <h1 className="text-lg font-bold mb-2">New Web Service</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col">
                                    <label htmlFor="mac" className="text-gray-600">
                                        MAC
                                    </label>
                                    <input
                                        type="text"
                                        id="mac"
                                        name="mac"
                                        value={formValues.mac}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="connection_type" className="text-gray-600">
                                        Connection Type
                                    </label>
                                    <input
                                        type="text"
                                        id="connection_type"
                                        name="connection_type"
                                        value={formValues.connection_type}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="weather_update"
                                        name="weather_update"
                                        checked={formValues.weather_update}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="weather_update" className="text-gray-600">
                                        Weather Update
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="currency_exchange"
                                        name="currency_exchange"
                                        checked={formValues.currency_exchange}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="currency_exchange" className="text-gray-600">
                                        Currency Exchange
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="connection_type" className="text-gray-600">
                                        Firmware Upgrade
                                    </label>
                                    <input
                                        type="text"
                                        id="firmware_upgrade"
                                        name="firmware_upgrade"
                                        value={formValues.firmware_upgrade}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />

                                </div>

                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                                    onClick={() => setShowPopup(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewWebService;
