import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import {FaRegEdit} from "react-icons/fa";

// define the validation schema for the form fields
const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID is required"),
    phone_name: Yup.string().required("Phone name is required"),
    mp_keys: Yup.string().required("MP keys are required"),
    common: Yup.string().required("Common is required"),
});

// define the interface for the props
interface EditPhoneModelProps {
    id: string;
    phone_name: string;
    mp_keys: string;
    common: string;
}

// define the interface for the form data
interface EditPhoneModelData {
    id: string;
    phone_name: string;
    mp_keys: string;
    common: string;
}

// define the component function
const EditPhoneModel: React.FC<EditPhoneModelProps> = (props) => {
    // use state to manage the visibility of the popup window
    const [showPopup, setShowPopup] = useState(false);

    // use the useForm hook to handle the form logic
    const { register, handleSubmit, reset, formState } = useForm<EditPhoneModelData>({
        resolver: yupResolver(validationSchema),
        defaultValues: props, // set the default values from the props
    });

    // get the errors object from the form state
    const { errors } = formState;

    // define the function to handle the form submission
    const onSubmit = (data: EditPhoneModelData) => {
        // call the API to update the record in the database
        axios
            .post("http://localhost:3000/deviceAdmin/update/000B8292EEF2", data)
            .then((response) => {
                // handle the response
                console.log(response.data);
                // close the popup window
                setShowPopup(false);
                // reset the form
                reset();
            })
            .catch((error) => {
                // handle the error
                console.error(error);
            });
    };

    // define the function to toggle the popup window
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    // return the JSX template
    return (
        <div className="container">
            <button className="btn btn-primary" onClick={togglePopup}>
                Edit Phone Model
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={() => setShowModal(true)}
            >
                <FaRegEdit/>
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input
                                    id="id"
                                    name="id"
                                    type="text"
                                    className={`form-control ${errors.id ? "is-invalid" : ""}`}
                                    {...register("id")}
                                />
                                <div className="invalid-feedback">{errors.id?.message}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone_name">Phone Name</label>
                                <input
                                    id="phone_name"
                                    name="phone_name"
                                    type="text"
                                    className={`form-control ${errors.phone_name ? "is-invalid" : ""}`}
                                    {...register("phone_name")}
                                />
                                <div className="invalid-feedback">{errors.phone_name?.message}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mp_keys">MP Keys</label>
                                <input
                                    id="mp_keys"
                                    name="mp_keys"
                                    type="text"
                                    className={`form-control ${errors.mp_keys ? "is-invalid" : ""}`}
                                    {...register("mp_keys")}
                                />
                                <div className="invalid-feedback">{errors.mp_keys?.message}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="common">Common</label>
                                <input
                                    id="common"
                                    name="common"
                                    type="text"
                                    className={`form-control ${errors.common ? "is-invalid" : ""}`}
                                    {...register("common")}
                                />
                                <div className="invalid-feedback">{errors.common?.message}</div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditPhoneModel;
