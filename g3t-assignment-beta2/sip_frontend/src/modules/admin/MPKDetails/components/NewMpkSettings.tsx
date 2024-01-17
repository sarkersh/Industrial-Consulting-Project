// NewMpkSettings.tsx
import React, { useState } from "react";
import axios from "axios";

interface FormValues {
    //id: string;
    mac: string;
    mode: string;
    account: string;
    mpk_description: string;
    mpk_value: string;
}

interface Props {
    getAllData: any
}


const NewMpkSettings: React.FC<Props> = ({getAllData}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        //id: "",
        mac: "",
        mode: "",
        account: "",
        mpk_description: "",
        mpk_value: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/mpkDetails/create", formValues);

            //alert("Record created successfully");

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
                New MPK Settings
            </button>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg max-w-md">
                        <h1 className="text-lg font-bold mb-2">New MPK Settings</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {/*<div className="flex flex-col">
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
                                </div>*/}
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
                                    <label htmlFor="mode" className="text-gray-600">
                                        Mode
                                    </label>
                                    <input
                                        type="text"
                                        id="mode"
                                        name="mode"
                                        value={formValues.mode}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="account" className="text-gray-600">
                                        Account
                                    </label>
                                    <input
                                        type="text"
                                        id="account"
                                        name="account"
                                        value={formValues.account}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="mpk_description" className="text-gray-600">
                                        MPK Description
                                    </label>
                                    <input
                                        type="text"
                                        id="mpk_description"
                                        name="mpk_description"
                                        value={formValues.mpk_description}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="mpk_value" className="text-gray-600">
                                        MPK Value
                                    </label>
                                    <input
                                        type="text"
                                        id="mpk_value"
                                        name="mpk_value"
                                        value={formValues.mpk_value}
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

export default NewMpkSettings;
