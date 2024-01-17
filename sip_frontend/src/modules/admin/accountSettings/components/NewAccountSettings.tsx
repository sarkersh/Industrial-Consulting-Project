// NewAccountSettings.tsx
import React, {useState} from "react";
import axios from "axios";
//import { useNavigate } from 'react-router-dom';

interface FormData {

    model_id: string;
    mac: string;
    account_active: boolean;
    account_name: string;
    sip_server: string;
    sip_user: string;
    auth_id: string;
    auth_password: string;
    acc_name: string;
    voicemail_id: string;
    cf_created: boolean;
    date_created: string;
    flag: string;
}

// Define the interface for the component props
interface Props {
    getAllData: any ;
}

const NewAccountSettings: React.FC<Props> = ({ getAllData}) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({

        model_id: "",
        mac: "",
        account_active: false,
        account_name: "",
        sip_server: "",
        sip_user: "",
        auth_id: "",
        auth_password: "",
        acc_name: "",
        voicemail_id: "",
        cf_created: false,
        date_created: "",
        flag: "",
    });
    //const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3000/accountSettings/create",
                formData
            )

            if(response.data){
                getAllData()
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
                New Account Settings
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-4 rounded-md shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">New Account Settings</h3>
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
                                    <label htmlFor="model_id" className="text-gray-600 text-sm">
                                        Model ID
                                    </label>
                                    <input
                                        type="text"
                                        id="model_id"
                                        name="model_id"
                                        value={formData.model_id}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
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
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="account_active"
                                        name="account_active"
                                        checked={formData.account_active}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <label
                                        htmlFor="account_active"
                                        className="text-gray-600 text-sm ml-2"
                                    >
                                        Account Active
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="account_name" className="text-gray-600 text-sm">
                                        Account Name
                                    </label>
                                    <input
                                        type="text"
                                        id="account_name"
                                        name="account_name"
                                        value={formData.account_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="sip_server" className="text-gray-600 text-sm">
                                        SIP Server
                                    </label>
                                    <input
                                        type="text"
                                        id="sip_server"
                                        name="sip_server"
                                        value={formData.sip_server}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="sip_user" className="text-gray-600 text-sm">
                                        SIP User
                                    </label>
                                    <input
                                        type="text"
                                        id="sip_user"
                                        name="sip_user"
                                        value={formData.sip_user}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="auth_id" className="text-gray-600 text-sm">
                                        Auth ID
                                    </label>
                                    <input
                                        type="text"
                                        id="auth_id"
                                        name="auth_id"
                                        value={formData.auth_id}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="auth_password"
                                        className="text-gray-600 text-sm"
                                    >
                                        Auth Password
                                    </label>
                                    <input
                                        type="password"
                                        id="auth_password"
                                        name="auth_password"
                                        value={formData.auth_password}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="acc_name" className="text-gray-600 text-sm">
                                        Acc Name
                                    </label>
                                    <input
                                        type="text"
                                        id="acc_name"
                                        name="acc_name"
                                        value={formData.acc_name}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="voicemail_id" className="text-gray-600 text-sm">
                                        Voicemail ID
                                    </label>
                                    <input
                                        type="text"
                                        id="voicemail_id"
                                        name="voicemail_id"
                                        value={formData.voicemail_id}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="cf_created"
                                        name="cf_created"
                                        checked={formData.cf_created}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <label
                                        htmlFor="cf_created"
                                        className="text-gray-600 text-sm ml-2"
                                    >
                                        CF Created
                                    </label>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="date_created"
                                        className="text-gray-600 text-sm"
                                    >
                                        Date Created
                                    </label>
                                    <input
                                        type="date"
                                        id="date_created"
                                        name="date_created"
                                        value={formData.date_created}
                                        onChange={handleChange}
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="flag" className="text-gray-600  text-sm"> Flag </label>
                                    <input 
                                        type= "text" 
                                        id="flag" 
                                        name="flag" 
                                        value={formData.flag} 
                                        onChange={handleChange} 
                                        className="border border-gray-300 px-2 py-1 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required />
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => setShowModal(false)} > Cancel
                        </button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md ml-4" >
                            Submit
                        </button>
                </div>
                        </form>
                    </div>
                </div>
            )}
</div> );
};

export default NewAccountSettings;