
'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
// import styles from './SignInForm.module.css'; // Import your CSS file
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const SignInForm = () => {
  const router = useRouter();
  const dispatch =useDispatch()

  const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const loginUser = async (values) => {
    const res = await fetch('http://localhost:5000/login/', {
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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      loginUser(values);
    },
  });

  return (
    // <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
    //   <h2 className='font-bold text-2xl text-blue-500' >Login To Your Account</h2>
    //   <Input className={styles.inputField}
    //     id="username"
    //     label="Username"
    //     name="username"
    //     type="text"
    //     onChange={formik.handleChange}
    //     value={formik.values.username}
    //   />
    //   {formik?.errors.username && <div className={styles.error}>{formik.errors.username}</div>}
    //   <Input className={styles.inputField}
    //     id="password"
    //     name="password"
    //     type="password"
    //     onChange={formik.handleChange}
    //     value={formik.values.password}
    //     label="Password"
    //   />
    //   {formik?.errors.password && <div className={styles.error}>{formik.errors.password}</div>}
    //    <div className='justify-center'>
    //       <Button className= 'bg-blue-500 text-white px-4 py-2 rounded  text-center' type="submit">Login</Button>
    //    </div>
    // </form>
    <div className="flex mt-12 min-w-full justify-center">

   <form className="max-w-2xl mx-auto mt-40 p-5 border border-gray-300 rounded shadow">
       <h2 className="font-bold text-2xl text-blue-500">Login To Your Account</h2>
      <Input
        className="mb-4"
        id="username"
        label="Username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik?.errors.username && <div className="text-red-500">{formik.errors.username}</div>}
      <Input
        className="mb-4"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="Password"
      />
      {formik?.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
      <p className="text-sm">
        Don't have an account?{' '}
        <Link href="/register" className="text-blue-700 underline">
          Signup
        </Link>
      </p>
      <div className="flex justify-center">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded text-center" type="submit">
          Login
        </Button>
      </div>
      </form>
    </div>
  );
};

export default SignInForm;

