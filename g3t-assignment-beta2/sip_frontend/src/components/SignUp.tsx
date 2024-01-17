import React, {useState, MouseEventHandler, useEffect} from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios"; // import axios to make api calls

// Define the type for the component props
type Props = {
    handleToken: any;
};

// Use the Props type for the component parameter
const Signup: React.FC<Props> = ({handleToken}) => {
    // Use the useState generic to specify the state type
    const [showPopup, setShowPopup] = useState<boolean>(false); // state to toggle popup visibility
    const [username, setUsername] = useState<string>(""); // state to store username input
    const [email, setEmail] = useState<string>(""); // state to store email input
    const [password, setPassword] = useState<string>(""); // state to store password input

    const [token, setToken] = useState(null);


    // Use the MouseEventHandler generic for the event parameter
    const handleSignup: MouseEventHandler<HTMLButtonElement> = async (event) => {
        // Prevent default behavior
        event.preventDefault();
        // Validate username, email and password
        if (username && email && password) {
            // Perform signup logic here
            console.log(
                "Signed up with username:",
                username,
                "email:",
                email,
                "and password:",
                password
            );
            // Make an api call to the endpoint with username, email and password
            try {
                const response = await axios.post(
                    "http://localhost:3000/user/signup",
                    {
                        username,
                        email,
                        password,
                    }
                );
                // Handle the response
                //console.log("Response:", response.data);
                await Login(email, password);


            } catch (error: any) {
                // Handle the error
                console.error("Error:", error.message);
            }
            // Close the popup
            setShowPopup(false);
        } else {
            // Show error message
            alert("Please enter a valid username, email and password");
        }
    };



    const Login = async (email:string, password:string) => {


        // Validate email and password
        if (email && password) {
            // Perform login logic here
            console.log("Logged in with email:", email, "and password:", password);
            // Make an api call to the endpoint with email and password
            try {
                const response = await axios.post(
                    "http://localhost:3000/user/signin",
                    {
                        email,
                        password,
                    }
                );
                // Handle the response
                console.log("Response:", response.data);

                // Check if the response contains a token
                if (response.data.token) {
                    // Store the token in localStorage
                    localStorage.setItem("token", response.data.token);

                }

            } catch (error: any ) {
                // Handle the error
                console.error("Error:", error.message);
            }

        } else {
            // Show error message
            alert("Please enter a valid email and password");
        }
    };

    useEffect(() => {
        // Check if the token is present in localStorage
        const token = localStorage.getItem("token");
        handleToken(token);
    })


    return (
        <div className="flex items-center justify-center">
            {/* Button to open popup */}
            <button
                onClick={() => setShowPopup(true)}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
                SignUp
            </button>
            {/* Popup container */}
            {showPopup && (
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setShowPopup(false)}
                    ></div>
                    {/* Popup content */}
                    <div className="relative w-96 h-96 p-4 bg-white rounded shadow-lg">
                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>
                        {/* Popup header */}
                        <h1 className="text-2xl font-bold text-center text-gray-800">
                            Signup
                        </h1>
                        {/* Popup body */}
                        <div className="mt-4">
                            {/* Username input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                                />
                            </div>
                            {/* Email input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                                />
                            </div>
                            {/* Password input */}
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                                />
                            </div>
                            {/* Signup button */}
                            <div className="mb-4">
                                <button
                                    className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                                    onClick={handleSignup}
                                >
                                    Signup
                                </button>
                            </div>
                            {/* Social signup options */}
                            <div className="flex items-center justify-center">
                                <span className="text-sm text-gray-600">Or signup with</span>
                                <button className="mx-2 text-blue-600 hover:text-blue-700">
                                    <FaFacebook size={24} />
                                </button>
                                <button className="mx-2 text-red-600 hover:text-red-700">
                                    <FaGoogle size={24} />
                                </button>
                                <button className="mx-2 text-blue-400 hover:text-blue-500">
                                    <FaTwitter size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
