
'use client'
import React from 'react';
import { useFormik } from 'formik';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const SignInForm = () => {
  const router = useRouter();
  const dispatch =useDispatch()

  const SignupSchema = Yup.object().shape({
    PhoneNumber: Yup.string().required('PhoneNumber is required'),
    password: Yup.string().required('Password is required'),
  });

  const loginUser = async (values) => {
    const res = await fetch('http://localhost:3001/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    
    const data = await res.json()
      if(res.status == 200) {
        dispatch(addUserDetails(data))
        router.push('/dashboard'); 
        dispatch(addUserDetails(data))
      } else {
        toast(data.msg)

  }
  };

  return (
    <div className="flex mt-12 min-w-full justify-center">
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          loginUser(values);
        }}
      >
        {({ errors }) => (
          <Form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="font-bold text-2xl text-blue-500">Login To Your Account</h2>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <Field
                name="phoneNumber"
                type="text"
                className={`w-full p-3 border rounded ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phoneNumber && (
                <p className="absolute text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className={`w-full p-3 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="absolute text-red-500 text-xs">{errors.password}</p>}
            </div>
            <div className="text-sm">
              <p>
                  Don't have an account?{' '}
                  <Link href="/register" className="text-blue-700 underline">
                    Signup
                </Link>
              </p>
            </div>
            
            <Button className="bg-blue-500 text-white px-4 py-2 rounded text-center" type="submit">

               Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
    
  //   <div className="flex mt-12 min-w-full justify-center">

  //  <form className="max-w-2xl mx-auto mt-40 p-5 border border-gray-300 rounded shadow">
  //      <h2 className="font-bold text-2xl text-blue-500">Login To Your Account</h2>
  //     <Input
  //       className="mb-4"
  //       id="phonenumber"
  //       label="phonenumnber"
  //       name="phonenumber"
  //       type="text"
  //       onChange={formik.handleChange}
  //       value={formik.values.username}
  //     />
  //     {formik?.errors.phoneNumber && <div className="text-red-500">{formik.errors.phoneNumber}</div>}
  //     <Input
  //       className="mb-4"
  //       id="password"
  //       name="password"
  //       type="password"
  //       onChange={formik.handleChange}
  //       value={formik.values.password}
  //       label="Password"
  //     />
  //     {formik?.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
  //     <div className="text-sm">
  //       <p>
  //       Don't have an account?{' '}
  //       <Link href="/register" className="text-blue-700 underline">
  //         Signup
  //       </Link>
  //     </p>
  //     </div>
      
  //     <div className="flex justify-center">
  //       <Button className="bg-blue-500 text-white px-4 py-2 rounded text-center" type="submit">
  //         Login
  //       </Button>
  //     </div>
  //     </form>
  //   </div>
  );
};

export default SignInForm;

