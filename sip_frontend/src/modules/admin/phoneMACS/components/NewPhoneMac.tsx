// NewPhoneMac.tsx
import React, { useState } from "react";
import axios from "axios";

interface FormValues {
    //id: string;
    model_id: string;
    model_mac: string;
}
interface Props {
    getAllData: any
}

const NewPhoneMac: React.FC<Props> = ({getAllData}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        //id: "",
        model_id: "",
        model_mac: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/deviceAdmin/create", formValues);
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
                New Phone Mac
            </button>
            {showPopup && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg max-w-md">
                        <h1 className="text-lg font-bold mb-2">New Phone Mac</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">

                                <div className="flex flex-col">
                                    <label htmlFor="model_id" className="text-gray-600">
                                        Model ID
                                    </label>
                                    <input
                                        type="text"
                                        id="model_id"
                                        name="model_id"
                                        value={formValues.model_id}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 rounded"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="model_mac" className="text-gray-600">
                                        Model MAC
                                    </label>
                                    <input
                                        type="text"
                                        id="model_mac"
                                        name="model_mac"
                                        value={formValues.model_mac}
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

export default NewPhoneMac;
