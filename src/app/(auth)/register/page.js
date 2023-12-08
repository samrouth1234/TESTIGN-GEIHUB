"use client";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUpuser } from "@/store/feature/auth/authSlice";

// export const register = async (user) => {
//   const {
//     username,
//     familyName,
//     givenName,
//     email,
//     password,
//     confirmedPassword,
//     acceptTerms,
//   } = user;
//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   let raw = JSON.stringify({
//     username,
//     familyName,
//     givenName,
//     email,
//     password,
//     confirmedPassword,
//     acceptTerms,
//   });
//   let requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     // redirect: "/",
//   };
//   try {
//     const get = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}auth/register`,
//       requestOptions
//     );
//     const result = await get.json();
//     return result;
//   } catch (error) {
//     alert(error);
//   }
// };

// const initialValues = {
//   username: "",
//   familyName: "",
//   givenName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   acceptTerms:""
// };

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required("User Name is required"),
//   familyName: Yup.string().required("Family Name is required"),
//   givenName: Yup.string().required("Last Name is required"),
//   acceptTerms: Yup.string().required("AccepTerm is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

const RegistrationForm = () => {
  const [username, setusername] = useState("");
  const [lastname,setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // const dispatch = useDispatch()

  //  const handleSubmit = (data) => {
  //    axios
  //      .post("http://139.59.252.233:9090/auth/register", data)
  //      .then((response) => {
  //        console.log("Registration successful");
  //        console.log(response.data); // Optionally, you can log the response data
  //      })
  //      .catch((error) => {
  //        console.log("Registration error");
  //        console.log(error); // Optionally, you can log the error
  //      });
  //   };

  // const handleSubmit = (data) => {
  //   console.log(data);
  // };

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     validationSchema={validationSchema}
  //     onSubmit={handleSubmit}
  //   >
  //     <Form className="flex justify-center">
  //       <div>
  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="username" className="mb-1">
  //             username
  //           </label>
  //           <Field
  //             type="text"
  //             id="username"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="username"
  //           />
  //           <ErrorMessage
  //             name="username"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>
  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="firstName" className="mb-1">
  //             familyName
  //           </label>
  //           <Field
  //             type="text"
  //             id="firstName"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="firstName"
  //           />
  //           <ErrorMessage
  //             name="firstName"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>

  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="lastName" className="mb-1">
  //             givenName
  //           </label>
  //           <Field
  //             type="text"
  //             id="lastName"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="lastName"
  //           />
  //           <ErrorMessage
  //             name="lastName"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>

  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="email">Email</label>
  //           <Field
  //             type="email"
  //             id="email"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="email"
  //           />
  //           <ErrorMessage
  //             name="email"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>

  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="password">Password</label>
  //           <Field
  //             type="password"
  //             id="password"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="password"
  //           />
  //           <ErrorMessage
  //             name="password"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>

  //         <div className="flex flex-col mb-4">
  //           <label htmlFor="confirmPassword">Confirm Password</label>
  //           <Field
  //             type="password"
  //             id="confirmPassword"
  //             className="border border-gray-500 rounded px-4 py-2"
  //             name="confirmPassword"
  //           />
  //           <ErrorMessage
  //             name="confirmPassword"
  //             className="text-red-400"
  //             component="div"
  //           />
  //         </div>
  //         <button type="submit">Register</button>
  //       </div>
  //     </Form>
  //     ;
  //   </Formik>
  // );

  const registerHandler = () => {
    console.table(username, email, lastname, password);
    // dispatch(signUpuser({ username, email, lastname, password }));
  }
  return (
    <div className="flex justify-center">
      <form>
        <label for="fname">User Name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          className="border h-10"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          className="border h-10"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          id="Email"
          name="Email"
          className="border h-10"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          className="border h-10"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={registerHandler}
          className="border h-10 w-full mt-4"
        >
          {" "}
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
