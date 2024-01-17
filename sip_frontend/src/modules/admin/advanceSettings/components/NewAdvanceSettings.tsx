
import React, {useState} from "react";
import axios from "axios";

interface FormData {
    mac: string;
    vlan_tag: string;
    priority_tag: string;
    pc_vlan_tag: string;
    pc_priority_tag: string;
    host_name: string;
    bg_label: string;
    long_label: string;
}

// Define the interface for the component props
interface Props {
    getAllData: any
}

const NewAdvanceSettings: React.FC<Props> = ({ getAllData}) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        mac: "",
        vlan_tag: "",
        priority_tag: "",
        pc_vlan_tag: "",
        pc_priority_tag: "",
        host_name: "",
        bg_label: "",
        long_label: "",
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
                "http://localhost:3000/advanceSettings/create",
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
                New Advance Settings
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-4 rounded-md shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">New Advance Settings</h3>
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
                                    <label htmlFor="vlan_tag" className="text-gray-600 text-sm">
                                        VLAN Tag
                                    </label>
                                    <input
                                        type="text"
                                        id="vlan_tag"
                                        name="vlan_tag"
                                        value={formData.vlan_tag}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="priority_tag"
                                        className="text-gray-600 text-sm"
                                    >
                                        Priority Tag
                                    </label>
                                    <input
                                        type="text"
                                        id="priority_tag"
                                        name="priority_tag"
                                        value={formData.priority_tag}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="pc_vlan_tag"
                                        className="text-gray-600 text-sm"
                                    >
                                        PC VLAN Tag
                                    </label>
                                    <input
                                        type="text"
                                        id="pc_vlan_tag"
                                        name="pc_vlan_tag"
                                        value={formData.pc_vlan_tag}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="pc_priority_tag"
                                        className="text-gray-600 text-sm"
                                    >
                                        PC Priority Tag
                                    </label>
                                    <input
                                        type="text"
                                        id="pc_priority_tag"
                                        name="pc_priority_tag"
                                        value={formData.pc_priority_tag}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="host_name" className="text-gray-600 text-sm">
                                        Host Name
                                    </label>
                                    <input
                                        type="text"
                                        id="host_name"
                                        name="host_name"
                                        value={formData.host_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="bg_label" className="text-gray-600 text-sm">
                                        BG Label
                                    </label>
                                    <input
                                        type="text"
                                        id="bg_label"
                                        name="bg_label"
                                        value={formData.bg_label}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="long_label" className="text-gray-600 text-sm">
                                        Long Label
                                    </label>
                                    <input
                                        type="text"
                                        id="long_label"
                                        name="long_label"
                                        value={formData.long_label}
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

export default NewAdvanceSettings;
