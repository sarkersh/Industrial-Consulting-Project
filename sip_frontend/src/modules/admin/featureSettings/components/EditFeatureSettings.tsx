// Import React and useState hook
import React, { useState } from 'react';

// Define the interface for the form data
interface FormData {
    mac: string;
    a_transfer: boolean;
    enable_cf: boolean;
    fs_date: string;
    rc_dnd: boolean;
    disable_call_waiting: boolean;
    dnd_on: boolean;
    VPK_transfer: boolean;
    cf_on: boolean;
    cf_off: boolean;
    incoming_call_popup: boolean;
}

// Define the interface for the component props
interface Props {
    data: FormData; // The data passed to the component as props
}

// Define the EditFeatureSettings component
const EditFeatureSettings: React.FC<Props> = (props) => {
    // Define the state for the form data
    const [formData, setFormData] = useState<FormData>(props.data);

    // Define the state for the popup visibility
    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    // Define the handler for the button click
    const handleButtonClick = () => {
        // Toggle the popup visibility
        setPopupVisible(!popupVisible);
    };

    // Define the handler for the form change
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Get the name and value of the changed input
        const { name, value } = event.target;

        // Update the form data state
        setFormData({
            ...formData,
            // Use the name as the key and the value as the value
            // For checkbox inputs, use the checked property instead of the value
            [name]: event.target.type === 'checkbox' ? event.target.checked : value,
        });
    };

    // Define the handler for the form submit
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default form behavior
        event.preventDefault();

        // Call the API endpoint with the form data
        fetch(`http://localhost:3000/featureSettings/update/${formData.mac}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                console.log(data);
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });

        // Hide the popup
        setPopupVisible(false);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Render a button that toggles the popup */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleButtonClick}
            >
                Edit Feature Settings
            </button>

            {/* Render a popup window if it is visible */}
            {popupVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg max-w-lg">
                        {/* Render a form with the fields */}
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="mac"
                                >
                                    MAC
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mac"
                                    name="mac"
                                    type="text"
                                    value={formData.mac}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="a_transfer"
                                >
                                    A Transfer
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="a_transfer"
                                    name="a_transfer"
                                    type="checkbox"
                                    checked={formData.a_transfer}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="enable_cf"
                                >
                                    Enable CF
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="enable_cf"
                                    name="enable_cf"
                                    type="checkbox"
                                    checked={formData.enable_cf}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="fs_date"
                                >
                                    FS Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fs_date"
                                    name="fs_date"
                                    type="date"
                                    value={formData.fs_date}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="rc_dnd"
                                >
                                    RC DND
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="rc_dnd"
                                    name="rc_dnd"
                                    type="checkbox"
                                    checked={formData.rc_dnd}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="disable_call_waiting"
                                >
                                    Disable Call Waiting
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="disable_call_waiting"
                                    name="disable_call_waiting"
                                    type="checkbox"
                                    checked={formData.disable_call_waiting}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="dnd_on"
                                >
                                    DND On
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dnd_on"
                                    name="dnd_on"
                                    type="checkbox"
                                    checked={formData.dnd_on}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="VPK_transfer"
                                >
                                    VPK Transfer
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-                  // Continue from the previous input
                  full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="VPK_transfer"
                                    name="VPK_transfer"
                                    type="checkbox"
                                    checked={formData.VPK_transfer}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="cf_on"
                                >
                                    CF On
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cf_on"
                                    name="cf_on"
                                    type="checkbox"
                                    checked={formData.cf_on}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="cf_off"
                                >
                                    CF Off
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cf_off"
                                    name="cf_off"
                                    type="checkbox"
                                    checked={formData.cf_off}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="incoming_call_popup"
                                >
                                    Incoming Call Popup
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="incoming_call_popup"
                                    name="incoming_call_popup"
                                    type="checkbox"
                                    checked={formData.incoming_call_popup}
                                    onChange={handleFormChange}
                                />
                            </div>
                            {/* Render a button that submits the form */}
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditFeatureSettings;

