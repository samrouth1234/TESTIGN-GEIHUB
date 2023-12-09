"use client";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  // const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await axios.post(
  //       "http://139.59.252.233:9090/auth/register",
  //       values
  //     );
  //     console.log(response); // do something with the response
  //     router.push("/"); // Redirect to home page
  //   } catch (error) {
  //     console.error("Registration failed:", error.message);
  //   }
  // };

  return (
    <Formik
      onSubmit={(data) => {
        console.log(data);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSumit }) => {
        <form className="flex justify-center " onSubmit={handleSumit}>
          <div>
            <div className="flex flex-col mb-4">
              <label htmlFor="firstName" className="mb-1">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                className="border border-gray-500 rounded px-4 py-2"
                name="firstName"
              />
              <ErrorMessage
                name="firstName"
                className="text-red-400"
                component="div"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="lastName" className="mb-1">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                className="border border-gray-500 rounded px-4 py-2"
                name="lastName"
              />
              <ErrorMessage
                name="lastName"
                className="text-red-400"
                component="div"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                className="border border-gray-500 rounded px-4 py-2"
                name="email"
              />
              <ErrorMessage
                name="email"
                className="text-red-400"
                component="div"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                className="border border-gray-500 rounded px-4 py-2"
                name="password"
              />
              <ErrorMessage
                name="password"
                className="text-red-400"
                component="div"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                className="border border-gray-500 rounded px-4 py-2"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                className="text-red-400"
                component="div"
              />
            </div>

            <button type="submit">Register</button>
          </div>
        </form>;
      }}
      
    </Formik>
  );
};

export default RegistrationForm;
