// NewAudioSettings.tsx
import React, { useState } from "react";
import axios from "axios";

interface FormData {
    mac: string;
    fcodec: string;
    scodec: string;
    tcodec: string;
    handsetgain: string;
}

interface Props {
    getAllData: any
}


const NewAudioSettings: React.FC<Props> = ({ getAllData }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        mac: "",
        fcodec: "",
        scodec: "",
        tcodec: "",
        handsetgain: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/audioSettings/create",
                formData
            );
            if(response.data){
                getAllData();
            }
            setShowModal(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => setShowModal(true)}
            >
                New Audio Settings
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-4 rounded-md shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">New Audio Settings</h3>
                            <button
                                className="text-gray-400 hover:text-gray-600"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="mac" className="text-gray-600 text-sm">
                                        MAC
                                    </label>
                                    <input
                                        type="text"
                                        id="mac"
                                        name="mac"
                                        value={formData.mac}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="fcodec" className="text-gray-600 text-sm">
                                        FCodec
                                    </label>
                                    <input
                                        type="text"
                                        id="fcodec"
                                        name="fcodec"
                                        value={formData.fcodec}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="scodec" className="text-gray-600 text-sm">
                                        SCodec
                                    </label>
                                    <input
                                        type="text"
                                        id="scodec"
                                        name="scodec"
                                        value={formData.scodec}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="tcodec" className="text-gray-600 text-sm">
                                        TCodec
                                    </label>
                                    <input
                                        type="text"
                                        id="tcodec"
                                        name="tcodec"
                                        value={formData.tcodec}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="handsetgain"
                                        className="text-gray-600 text-sm"
                                    >
                                        Handset Gain
                                    </label>
                                    <input
                                        type="text"
                                        id="handsetgain"
                                        name="handsetgain"
                                        value={formData.handsetgain}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-md ml-4"
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

export default NewAudioSettings;
