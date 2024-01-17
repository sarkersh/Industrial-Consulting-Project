import { useFormik, Field, FormikProvider } from "formik";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { string, object } from "yup";


// TypeScript types for your form values
interface FormValues {
  p271: string;
  mac: string;
  p270: string;
  p47: string;
  p35: string;
  p36: string;
  p34: string;
  p3: string;
  p33: string;
  p258: string;
  p1310: string;
  p40: string;
}

const account_setting_schema = object({
  p271: string().required(),
  mac: string().required(),
  p270: string().required(),
  p47: string().required(),
  p35: string().required(),
  p36: string().required(),
  p34: string().required(),
  p3: string().required(),
  p33: string().required(),
  p258: string().required(),
  p1310: string().required(),
  p40: string().required(),
});

const AccountSettingPage: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      p271: "0",
      mac: "",
      p270: "",
      p47: "",
      p35: "",
      p36: "",
      p34: "",
      p3: "",
      p33: "",
      p258: "0",
      p1310: "0",
      p40: "5060",
    },
    validationSchema: account_setting_schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mx-4 my-2">
      <div className="">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h1 className="text-4xl font-semibold font-sans border-b-2 w-full border-slate-600 p-5">
                Account Settings
              </h1>
              <table className="mt-10 ml-10 font-sans">
                <tbody className="">
                <tr className="">

                  <td className="font-semibold text-xl px-5 py-2">
                    Account Active
                  </td>
                  <td className="text-lg px-5 py-2">
                    <label htmlFor="activeYes" className="mx-2">
                      <Field
                          type="radio"
                          id="activeYes"
                          name="p271"
                          value="1"
                      />
                      Yes
                    </label>
                    <label htmlFor="activeNo" className="mx-2">
                      <Field
                          type="radio"
                          id="activeNo"
                          name="p271"
                          value="0"
                          checked
                      />
                      No
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Mac Address
                  </td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="mac"
                        placeholder="mac address"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Account name
                  </td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p270"
                        placeholder="account name"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    SIP Server (Default)
                  </td>
                  <td className="text-lg px-5 py-2 ">
                    <div className="flex justify-between items-center">
                      <Field
                          type="text"
                          name="mac"
                          placeholder="sip server"
                          className="bg-transparent border-2 rounded-l-lg border-slate-500 border-r-0 p-2 px-5"
                      />
                      <button
                          type="button"
                          className="bg-red-600 rounded-r-lg text-white h-12 px-4"
                      >
                        <FaRegEdit/>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    SIP User ID
                  </td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p35"
                        placeholder="sip user id"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">Auth ID</td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p36"
                        placeholder="auth id"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Auth Password
                  </td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p34"
                        placeholder="auth password"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">Name</td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p3"
                        placeholder="name"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Voicemail User ID
                  </td>
                  <td className="text-lg px-5 py-2">
                    <Field
                        type="text"
                        name="p33"
                        placeholder="voice mail user id"
                        className="bg-transparent border-2 rounded-lg border-slate-500 p-1 px-10"
                    />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1 className="text-4xl font-semibold font-sans border-b-2 w-full border-slate-600 p-5">
                Security Settings
              </h1>
              <table className="mt-10 ml-10 font-sans">
                <tbody>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Check SIP User ID for Incoming Invite
                  </td>
                  <td className="text-lg px-5 py-2">
                    <label htmlFor="activeYes" className="mx-2">
                      <Field
                          type="radio"
                          id="activeYes"
                          name="p258"
                          value="1"
                      />
                      Yes
                    </label>
                    <label htmlFor="activeNo" className="mx-2">
                      <Field
                          type="radio"
                          id="activeNo"
                          name="p258"
                          value="0"
                          checked
                      />
                      No
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Disable Direct IP Call
                  </td>
                  <td className="text-lg px-5 py-2">
                    <label htmlFor="activeYes" className="mx-2">
                      <Field
                          type="radio"
                          id="activeYes"
                          name="p1310"
                          value="1"
                      />
                      Yes
                    </label>
                    <label htmlFor="activeNo" className="mx-2">
                      <Field
                          type="radio"
                          id="activeNo"
                          name="p1310"
                          value="0"
                          checked
                      />
                      No
                    </label>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-semibold text-xl px-5 py-2">
                    Local SIP Port
                  </td>
                  <td className="text-lg px-5 py-2">
                    <label htmlFor="activeYes" className="mx-2">
                      <Field
                          type="radio"
                          id="activeYes"
                          name="p40"
                          value="5060"
                          checked
                      />
                      Default(5060)
                    </label>
                    <label htmlFor="activeNo" className="mx-2">
                      <Field
                          type="radio"
                          id="activeNo"
                          name="p40"
                          value="5063"
                      />
                      Alternate(5063)
                    </label>
                  </td>
                </tr>
                {/* ... rest of your form JSX */}
                </tbody>
              </table>
            </div>
          </form>
        </FormikProvider>
        <div className="font-semibold text-xl px-5 py-2">

        </div>
      </div>
    </div>
  );
};

export default AccountSettingPage;
