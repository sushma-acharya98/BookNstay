// import * as Yup from "yup";
// import { Formik, Form, Field } from "formik"; // Import Formik components
// import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation'
// import Link from "next/link";
// import { addUserDetails } from "@/redux/reducerSlice/userSlice";
// import { useDispatch } from "react-redux";

// // Define the validation schema
// const SignInSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().required("Required"),
// });

// const page = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleLogin = async (values) => {
//     try {
//       const res = await fetch("http://localhost:5000/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await res.json();
//       if (res.status === 200) {
//         dispatch(addUserDetails(data));
//         router.push("/");
//       } else {
//         toast(data.msg);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex min-w-full justify-center h-[90vh] items-center">
//       <Formik
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         validationSchema={SignInSchema}
//         onSubmit={handleLogin}
//       >
//         <Form>
//           <div>
//             <Field
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               className="w-auto p-3 border border-gray-300 rounded"
//             />
//           </div>

//           <div>
//             <Field
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               className="w-auto p-3 border border-gray-300 rounded"
//             />
//           </div>

//           <p>Don't have an account? <Link href="/register" className="text-blue-700">SignUp</Link></p>

//           <button
//             type="submit"
//             className="w-auto ml-30 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Login
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default page;
// SignInForm.js
// 'use client'
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Input, Button } from '@nextui-org/react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import { Link } from 'next/link';
// import { useDispatch } from 'react-redux';

// // Import your CSS file (if you still need it for some styles)
// import styles from './SignInForm.module.css';

// const SignInForm = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const SignInSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const loginUser = async (values) => {
//     const res = await fetch('http://localhost:5000/login/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(values),
//     });

//     const data = await res.json();
//     if (res.status === 200) {
//       dispatch(addUserDetails(data));
//       router.push('/dashboard');
//       dispatch(addUserDetails(data));
//     } else {
//       toast(data.msg);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema: SignInSchema,
//     onSubmit: (values) => {
//       loginUser(values);
//     },
//   });

//   return (
//     <form className="max-w-2xl mx-auto mt-40 p-10 border border-gray-300 rounded shadow">
//       <h2 className="font-bold text-2xl text-blue-500">Login To Your Account</h2>
//       <Input
//         className="mb-4"
//         id="username"
//         label="Username"
//         name="username"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.username}
//       />
//       {formik?.errors.username && <div className="text-red-500">{formik.errors.username}</div>}
//       <Input
//         className="mb-4"
//         id="password"
//         name="password"
//         type="password"
//         onChange={formik.handleChange}
//         value={formik.values.password}
//         label="Password"
//       />
//       {formik?.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
//       <p className="text-sm">
//         Don't have an account?{' '}
//         <Link href="/register" className="text-blue-700 underline">
//           Signup
//         </Link>
//       </p>
//       <div className="flex justify-center">
//         <Button className="bg-blue-500 text-white px-4 py-2 rounded text-center" type="submit">
//           Login
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default SignInForm;