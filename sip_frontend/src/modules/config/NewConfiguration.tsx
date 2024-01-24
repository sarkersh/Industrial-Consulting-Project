import React, { useState } from 'react';
import axios from 'axios';

interface MPK  {
        mode_323: string,
        mode_324: string,
        mode_325: string,
        mode_326: string,
        mode_327: string,
        mode_328: string,
        mode_329: string,
        mode_353: string,

        account_301: string,
        account_304: string,
        account_307: string,
        account_310: string,
        account_313: string,
        account_316: string,
        account_319: string,
        account_354: string,

        desc_302: string,
        desc_305: string,
        desc_308: string,
        desc_311: string,
        desc_314: string,
        desc_317: string,
        desc_320: string,
        desc_355: string,

        value_303: string,
        value_306: string,
        value_309: string,
        value_312: string,
        value_315: string,
        value_318: string,
        value_321: string,
        value_356: string,
}
// Define the interface for the form data
interface FormData {
    accountActive: boolean;
    macAddress: string;
    accountName: string;
    sipServer: string;
    sipUserId: string;
    authId: string;
    authPassword: string;
    name: string;
    voicemailUserId: string;
    checkSipUserId: boolean;
    disableDirectIpCall: boolean;
    localSipPort: string;

    firstCodec: string;
    secondCodec: string;
    thirdCodec: string;
    handsetTxGain: string;

    attendedTransfer    : string;
    transferModeViaVPK  : string;
    enableCallFeatures  : string;
    displayDateFormat   : string;
    returnCodeWhenEnableDND : string;
    disableCallWaiting  : boolean;
    dndOnCode: string   ;
    dndOffCode: string  ;
    callForwardOnCode   : string;
    callForwardOffCode  : string;

    mpk: MPK;
    account: string;
    description: string;
    value: string;

    vlanTag: number;
    priorityValue: number;
    pcPortVlanTag: number;
    pcPortPriorityValue: number;
    hostName: string;
    showLabel: boolean;
    useLongLabel: boolean;

    weatherUpdates: number;
    currencyExchangeUpdates: number;
    firmwareUpgradeVia: string;
    firmwareUpgrade: string;
    acsUrl: string;
    periodicInformEnable: boolean;

    adminPassword: string;
    confirmAdminPassword: string;
}

// Define the tabs as an array of objects
const tabs = [
    { id: 0, name: 'Account Settings' },
    { id: 1, name: 'Audio Settings' },
    { id: 2, name: 'Features Setting' },
    { id: 3, name: 'Programmable Keys' },
    { id: 4, name: 'Advance Settings' },
    { id: 5, name: 'Web Service' },
    { id: 6, name: 'Device Admin' },
];

// Define the options for the dropdown menus
const codecOptions = ['G729A/B', 'PCMA', 'PCMU', 'G722', 'G726-32'];
const gainOptions = ['-6 decibel', '-3 decibel', '0 decibel', '3 decibel', '6 decibel'];
const enableDNDOptions = ['Busy(486)', 'Temporarily Unavailable(480)', 'Not Found(404)', 'Decline(603)'];

// Define the options for the dropdown menus
const modeOptions = ['None', 'Speed Dial', 'Busy Lamp Field (BLF)'];
const accountOptions = ['Account1', 'Account2', 'Account3', 'Account4', 'Account5', 'Account6', 'Account7', 'Account8'];


// Define the options for the dropdown menus
const yesNoOptions = ['Yes', 'No'];
const transferModeOptions = ['Blind Transfer(Default)', 'Attended Transfer', 'NewCall'];
const dateFormatOptions = [
    'dd.MM.yyyy',
    'yyyy-MM-dd',
    'yy-MM-dd',
    'MM-dd-yy',
    'dd-MM-yyyy',
    'yyyy/MM/dd',
    'yy/MM/dd',
    'MM/dd/yy',
    'dd/MM/yyyy',
    'yyyy.MM.dd',
    'yy.MM.dd',
    'MM.dd.yy',
];


// Define the options for the dropdown menus
const firmwareUpgradeViaOptions = ['HTTP', 'HTTPS'];
const periodicInformEnableOptions = ['No', 'Yes'];

// Define the options for the dropdown menus
const localSipPortOptions = ['Default(5060)', 'Alternate(5063)'];



// Define a component for the tab content
const TabContent = ({activeTab,formData,setFormData,}: {
    activeTab: number;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}) => {
    // Handle the input change event
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleMPKInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;


        //setFormData((prev) => ({ ...prev, [name]: value }));
        setFormData((prev) => ({
            ...prev,
            mpk: {
                ...prev.mpk,
                [name]: value,
            },
        }));
    };

    // Handle the radio button change event
    const handleRadioChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked, value } = e.target;

        const value2 = value === 'true'? true : false;


        setFormData((prev) => ({ ...prev, [name]: value2 }));
    };

    // Handle the dropdown change event
    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMKPDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            mpk: {
                ...prev.mpk,
                [name]: value,
            },
        }));


        //setFormData((prev) => ({ ...prev, [name]: value }));
    };



    // Render the form based on the active tab
    switch (activeTab) {
        case 0:
            // Account Settings
            return (
                <div className="flex flex-col p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Account Settings
                        </label>
                        <div className="grid grid-cols-1 gap-4">

                            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                                <label className="block text-gray-700 text-sm mb-2">
                                    Account Active
                                </label>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="accountActive"
                                            value="true"
                                            checked={formData.accountActive === true}
                                            onChange={handleRadioChange}
                                            className="mr-2"
                                        />
                                        <label className="text-gray-700 text-sm">Yes</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="accountActive"
                                            value="false"
                                            checked={!formData.accountActive === true}
                                            onChange={handleRadioChange}
                                            className="mr-2"
                                        />
                                        <label className="text-gray-700 text-sm">No</label>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Mac Address
                                </label>
                                <input
                                    type="text"
                                    name="macAddress"
                                    value={formData.macAddress}
                                    onChange={handleInputChange}
                                    placeholder="mac address"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Account name
                                </label>
                                <input
                                    type="text"
                                    name="accountName"
                                    value={formData.accountName}
                                    onChange={handleInputChange}
                                    placeholder="account name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    SIP Server (Default)
                                </label>
                                <input
                                    type="text"
                                    name="sipServer"
                                    value={formData.sipServer}
                                    onChange={handleInputChange}
                                    placeholder="sip server"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    SIP User ID
                                </label>
                                <input
                                    type="text"
                                    name="sipUserId"
                                    value={formData.sipUserId}
                                    onChange={handleInputChange}
                                    placeholder="sip user id"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Auth ID
                                </label>
                                <input
                                    type="text"
                                    name="authId"
                                    value={formData.authId}
                                    onChange={handleInputChange}
                                    placeholder="auth id"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Auth Password
                                </label>
                                <input
                                    type="text"
                                    name="authPassword"
                                    value={formData.authPassword}
                                    onChange={handleInputChange}
                                    placeholder="auth password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Voicemail User ID
                                </label>
                                <input
                                    type="text"
                                    name="voicemailUserId"
                                    value={formData.voicemailUserId}
                                    onChange={handleInputChange}
                                    placeholder="*123"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="block text-gray-700 text-lg font-bold mb-2">
                            Security Settings
                        </h2>
                        <div className="grid grid-cols-1 gap-4">

                            <div className="flex items-center w-full">
                                <label className="block text-gray-700 text-sm mb-2 w-1/5">
                                    Check SIP User ID for Incoming Invite
                                </label>

                                <input
                                    type="radio"
                                    id="checkSipUserId-yes"
                                    name="checkSipUserId"
                                    value="true"
                                    onChange={handleRadioChange}
                                    checked={formData.checkSipUserId === true}
                                    className="mr-2"
                                />
                                <label htmlFor="yes" className="text-gray-700 mr-4">
                                    Yes
                                </label>
                                <input
                                    type="radio"
                                    id="checkSipUserId-no"
                                    name="checkSipUserId"
                                    value="false"
                                    onChange={handleRadioChange}
                                    checked={formData.checkSipUserId === false}
                                    className="mr-2"
                                />
                                <label htmlFor="no" className="text-gray-700">
                                    No
                                </label>
                            </div>
                            <div className="flex items-center w-full">
                                <label className="block text-gray-700 text-sm mb-2 w-1/5">
                                    Disable Direct IP Call
                                </label>

                                <input
                                    type="radio"
                                    id="disableDirectIpCall-yes"
                                    name="disableDirectIpCall"
                                    value="true"
                                    checked={formData.disableDirectIpCall === true}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="yes" className="text-gray-700 mr-4">
                                    Yes
                                </label>
                                <input
                                    type="radio"
                                    id="disableDirectIpCall-no"
                                    name="disableDirectIpCall"
                                    value='false'
                                    checked={formData.disableDirectIpCall === false}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="no" className="text-gray-700">
                                    No
                                </label>
                            </div>
                            <div className="flex items-center w-full">
                                <label className="block text-gray-700 text-sm mb-2 w-1/5">
                                    Local SIP Port
                                </label>
                                <div className="flex items-center">
                                    {localSipPortOptions.map((option) => (
                                        <div key={option} className="mr-4">
                                            <input
                                                type="radio"
                                                id={option}
                                                name="localSipPort"
                                                value={option}
                                                checked={option === formData.localSipPort}
                                                onChange={handleRadioChange2}
                                                className="mr-2"
                                            />
                                            <label htmlFor={option} className="text-gray-700">
                                                {option}
                                            </label>
                                        </div>

                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            );
        case 1:
            // Audio Settings
            return (
                <div className=" flex flex-col p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Audio Settings
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">First Codec</label>
                                <select
                                    name="firstCodec"
                                    value={formData.firstCodec}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {codecOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">Second Codec</label>
                                <select
                                    name="secondCodec"
                                    value={formData.secondCodec}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {codecOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">Third Codec</label>
                                <select
                                    name="thirdCodec"
                                    value={formData.thirdCodec}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {codecOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Handset
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Handset TX Gain (dB)
                                </label>
                                <select
                                    name="handsetTxGain"
                                    value={formData.handsetTxGain}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {gainOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 2:

            // Features Setting
            return (
                <div className="flex flex-col p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Features Setting
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Attended Transfer
                                </label>
                                <select
                                    name="attendedTransfer"
                                    value={formData.attendedTransfer}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {yesNoOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Transfer Mode via VPK
                                </label>
                                <select
                                    name="transferModeViaVPK"
                                    value={formData.transferModeViaVPK}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {transferModeOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Enable Call Features
                                </label>
                                <select
                                    name="enableCallFeatures"
                                    value={formData.enableCallFeatures}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {yesNoOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Display Date Format
                                </label>
                                <select
                                    name="displayDateFormat"
                                    value={formData.displayDateFormat}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {dateFormatOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Return Code When Enable DND
                                </label>
                                <select
                                    name="returnCodeWhenEnableDND"
                                    value={formData.returnCodeWhenEnableDND}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    {enableDNDOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Call Features
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">Disable Call Waiting</label>

                                <input
                                    type="radio"
                                    id="yes"
                                    name="disableCallWaiting"
                                    value="true"
                                    checked={formData.disableCallWaiting}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="yes">Yes</label>
                                <br/>
                                <input
                                    type="radio"
                                    id="no"
                                    name="disableCallWaiting"
                                    value="false"
                                    checked={!formData.disableCallWaiting}
                                    onChange={handleRadioChange}
                                    className="mr-2"
                                />
                                <label htmlFor="no">No</label>
                            </div>

                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Do Not Disturb (DND)
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">On (*78) </label>
                                <input
                                    type="text"
                                    name="dndOnCode"
                                    value={formData.dndOnCode}
                                    placeholder={"*78"}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">Off (*79) </label>
                                <input
                                    type="text"
                                    name="dndOffCode"
                                    value={formData.dndOffCode}
                                    placeholder={"*79"}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Call Forward Unconditionally (All)
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                     On
                                </label>
                                <input
                                    type="text"
                                    name="callForwardOnCode"
                                    value={formData.callForwardOnCode}
                                    placeholder={"*71"}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Off (*72)
                                </label>
                                <input
                                    type="text"
                                    name="callForwardOffCode"
                                    value={formData.callForwardOffCode}
                                    placeholder={"*72"}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 3:
            //Programmable Keys
            return (
                <div className="flex flex-col p-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Mode
                            </label>
                            <select
                                name="mode_323"
                                value={formData.mpk.mode_323}
                                onChange={handleMKPDropdownChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {modeOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Account
                            </label>
                            <select
                                name="account_301"
                                value={formData.mpk.account_301}
                                onChange={handleMKPDropdownChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {accountOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                name="desc_302"
                                value={formData.mpk.desc_302}
                                onChange={handleMPKInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Value
                            </label>
                            <input
                                type="text"
                                name="value_303"
                                value={formData.mpk.value_303}
                                onChange={handleMPKInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-2">
                        <div>
                            <select
                                name="mode_324"
                                value={formData.mpk.mode_324}
                                onChange={handleMKPDropdownChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {modeOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>

                            <select
                                name="account_304"
                                value={formData.mpk.account_304}
                                onChange={handleMKPDropdownChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {accountOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>

                            <input
                                type="text"
                                name="desc_305"
                                value={formData.mpk.desc_305}
                                onChange={handleMPKInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>

                            <input
                                type="text"
                                name="value_306"
                                value={formData.mpk.value_306}
                                onChange={handleMPKInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            );
        case 4:
            // Advance Settings
            return (
                <div className="flex flex-col gap-4 p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Advance Settings
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Layer 2 QoS 802.1Q/VLAN Tag
                                </label>
                                <input
                                    type="number"
                                    name="vlanTag"
                                    value={formData.vlanTag}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Layer 2 QoS 802.1p Priority Value
                                </label>
                                <input
                                    type="number"
                                    name="priorityValue"
                                    value={formData.priorityValue}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    PC Port VLAN Tag
                                </label>
                                <input
                                    type="number"
                                    name="pcPortVlanTag"
                                    value={formData.pcPortVlanTag}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    PC Port Priority Value
                                </label>
                                <input
                                    type="number"
                                    name="pcPortPriorityValue"
                                    value={formData.pcPortPriorityValue}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Host name (Option 12)
                                </label>
                                <input
                                    type="text"
                                    name="hostName"
                                    value={formData.hostName}
                                    onChange={handleInputChange}
                                    placeholder={"Voip-"}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Idle Screen Settings
                        </label>
                        <div className="flex items-center">
                            <label className="block text-gray-700 text-sm mb-2 w-1/6">Show Label</label>
                            <input
                                type="radio"
                                id="showLabel-yes"
                                name="showLabel"
                                value="true"
                                checked={formData.showLabel}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            <label htmlFor="yes" className="text-gray-700 mr-4">
                                Yes
                            </label>
                            <input
                                type="radio"
                                id="showLabel-no"
                                name="showLabel"
                                value="false"
                                checked={!formData.showLabel}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            <label htmlFor="no" className="text-gray-700">
                                No
                            </label>
                        </div>
                        <div className="flex items-center">
                            <label className="block text-gray-700 text-sm mb-2 w-1/6">Use Long Label</label>
                            <input
                                type="radio"
                                id="useLongLabel-yes"
                                name="useLongLabel"
                                value="true"
                                checked={formData.useLongLabel}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            <label htmlFor="yes" className="text-gray-700 mr-4">
                                Yes
                            </label>
                            <input
                                type="radio"
                                id="useLongLabel-no"
                                name="useLongLabel"
                                value="false"
                                checked={!formData.useLongLabel}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            <label htmlFor="no" className="text-gray-700">
                                No
                            </label>
                        </div>
                    </div>
                </div>
            );
        case 5:
            // Web Service
            return (
                <div className="flex flex-col gap-4 p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Web Service
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Weather Updates
                                </label>
                                <input
                                    type="number"
                                    name="weatherUpdates"
                                    value={formData.weatherUpdates}
                                    placeholder={"0"}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Currency Exchange Updates
                                </label>
                                <input
                                    type="number"
                                    name="currencyExchangeUpdates"
                                    value={formData.currencyExchangeUpdates}
                                    onChange={handleInputChange}
                                    placeholder={"0"}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Firmware upgrade Via
                                </label>
                                <select
                                    name="firmwareUpgradeVia"
                                    value={formData.firmwareUpgradeVia}
                                    onChange={handleDropdownChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    {firmwareUpgradeViaOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Firmware upgrade
                                </label>
                                <input
                                    type="text"
                                    name="firmwareUpgrade"
                                    value={formData.firmwareUpgrade}
                                    onChange={handleInputChange}
                                    placeholder={"0"}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">ACS URL</label>
                                <input
                                    type="text"
                                    name="acsUrl"
                                    value={formData.acsUrl}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Periodic Inform Enable
                                </label>
                                <div className="flex items-center">
                                    {periodicInformEnableOptions.map((option) => (
                                        <div key={option} className="mr-4">
                                            <input
                                                type="radio"
                                                id={option}
                                                name="periodicInformEnable"
                                                value={option === 'Yes'}
                                                checked={
                                                    option === 'Yes'
                                                        ? formData.periodicInformEnable
                                                        : !formData.periodicInformEnable
                                                }
                                                onChange={handleRadioChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor={option} className="text-gray-700">
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            );
        case 6:
            // Device Admin
            return (
                <div className="flex flex-col gap-4 p-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2">
                            Device Admin Password Change
                        </label>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Admin Password
                                </label>
                                <input
                                    type="password"
                                    name="adminPassword"
                                    value={formData.adminPassword}
                                    onChange={handleInputChange}
                                    placeholder="new admin password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="block text-gray-700 text-sm mb-2 w-1/6">
                                    Confirm Admin Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmAdminPassword"
                                    value={formData.confirmAdminPassword}
                                    onChange={handleInputChange}
                                    placeholder="confirm password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );

        // ... other cases
        default:
            return null;
    }
};

// Define a component for the tabs
const Tabs = () => {
    // Use state to keep track of the active tab and the form data
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState<FormData>({

        accountActive       : true,
        macAddress          : '',
        accountName         : '',
        sipServer           : '',
        sipUserId           : '',
        authId              : '',
        authPassword        : '',
        name                : '',
        voicemailUserId     : '',
        checkSipUserId      : true,
        disableDirectIpCall : true,
        localSipPort        : '',
        firstCodec          : '',
        secondCodec         : '',
        thirdCodec          : '',
        handsetTxGain       : '',

        //Features Setting
        attendedTransfer    :'',
        transferModeViaVPK  :'',
        enableCallFeatures  :'',
        displayDateFormat   :'',
        returnCodeWhenEnableDND : '',
        disableCallWaiting  :true,
        dndOnCode           :    '',
        dndOffCode          : '',
        callForwardOnCode   :'',
        callForwardOffCode  :'',

        //Programmable Keys
        mpk               : {
            mode_323: '',
            mode_324: '',
            mode_325: '',
            mode_326: '',
            mode_327: '',
            mode_328: '',
            mode_329: '',
            mode_353: '',

            account_301: '',
            account_304: '',
            account_307: '',
            account_310: '',
            account_313: '',
            account_316: '',
            account_319: '',
            account_354: '',

            desc_302: '',
            desc_305: '',
            desc_308: '',
            desc_311: '',
            desc_314: '',
            desc_317: '',
            desc_320: '',
            desc_355: '',

            value_303: '',
            value_306: '',
            value_309: '',
            value_312: '',
            value_315: '',
            value_318: '',
            value_321: '',
            value_356: '',
        },

        account             : '',
        description         : '',
        value               : '',

        //Advance Settings
        vlanTag             : 0,
        priorityValue       : 0,
        pcPortVlanTag       : 0,
        pcPortPriorityValue : 0,
        hostName            : '',
        showLabel           : false,
        useLongLabel        : true,

        //webservices
        weatherUpdates      :  0,
        currencyExchangeUpdates: 0,
        firmwareUpgradeVia  :  '',
        firmwareUpgrade     :  '',
        acsUrl              :  '',
        periodicInformEnable:  false,


        // Device Admin
        adminPassword       : '',
        confirmAdminPassword: ''

    });



    const handleSubmit = async () => {
        try {

            const apiUrl = 'http://localhost:3000/api/config/create/'

            await axios.post(apiUrl, formData);
            alert('Configuration file created!');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };


    //console.log('F O R M  D A T A', formData)

    // Render the tabs and the tab content
    return (
        <div className="tabs flex flex-col mb-8">

            <div className="flex flex-wrap p-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700'
                        } font-bold py-2 px-4 w-full sm:w-auto mr-1.5 rounded-l-lg focus:outline-none focus:shadow-outline`}
                    >
                        {tab.name}
                    </button>
                ))}

            </div>
            <TabContent
                activeTab={activeTab}
                formData={formData}
                setFormData={setFormData}
            />


            <hr/>
            <div className="flex items-center justify-end pr-8">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create Configuration File
                </button>
            </div>

        </div>
    );
};

export default Tabs;
