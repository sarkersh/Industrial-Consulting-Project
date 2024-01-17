// NewPhoneModel.tsx
import React, { useState } from "react";
import axios from "axios";

interface FormValues {
    id: string;
    phone_name: string;
    mp_keys: string;
    common: string;
}

// Define the interface for the component props
interface Props {
    getAllData: any
}
const NewPhoneModel: React.FC<Props> = ({ getAllData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        id: "",
        phone_name: "",
        mp_keys: "",
        common: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/deviceAdmin/create", formValues);
            alert("Record created successfully");
        } catch (error) {
            alert("Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setShowPopup(true)}
            >
                New Phone Model
            </button>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg max-w-md">
                        <h1 className="text-lg font-bold mb-2">New Phone Model</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col">
                                    <label htmlFor="id" className="text-gray-600">
                                        ID
                                    </label>
                                    <input
                                        type="text"
                                        id="id"
                                        name="id"
                                        value={formValues.id}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone_name" className="text-gray-600">
                                        Phone Name
                                    </label>
                                    <input
                                        type="text"
                                        id="phone_name"
                                        name="phone_name"
                                        value={formValues.phone_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="mp_keys" className="text-gray-600">
                                        MP Keys
                                    </label>
                                    <input
                                        type="text"
                                        id="mp_keys"
                                        name="mp_keys"
                                        value={formValues.mp_keys}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="common" className="text-gray-600">
                                        Common
                                    </label>
                                    <input
                                        type="text"
                                        id="common"
                                        name="common"
                                        value={formValues.common}
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

export default NewPhoneModel;
