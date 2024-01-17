import React, {useEffect, useState} from "react";
//import { Redirect, useNavigate, useNavigation } from "react-router-dom";

type LogoutButtonProps = {
    // optional props for customizing the button
    className?: string;
    label?: string;
    handleToken: any;
};

function LogoutButton({ className, label, handleToken }: LogoutButtonProps) {

    // state variable for redirecting
    //const [redirect, setRedirect] = useState(false);
    //const navigate = useNavigate();



    // handle logout button click
    const handleLogout = () => {
        // delete the token from local storage
        localStorage.removeItem("token");
        handleToken("");

        console.log("Logged out");
    };

    const redirect = false;


    // render component based on redirect
    if (redirect) {
        // redirect to home page
        //return <Redirect to="/" />;
    } else {
        // show logout button with tailwind gcc styling
        return (
            <button
                onClick={handleLogout}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            >
                {label || "Logout"}
            </button>
        );
    }
}

export default LogoutButton;