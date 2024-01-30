
'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import styles from './SignInForm.module.css'; // Import your CSS file
import { toast } from 'react-toastify';
const SignInForm = () => {
  const router = useRouter();
  // const dispatch =useDispatch()

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
    <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
      <h2>Hotel Booking Login</h2>
      <Input
        id="username"
        label="Username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik?.errors.username && <div className={styles.error}>{formik.errors.username}</div>}
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="Password"
      />
      {formik?.errors.password && <div className={styles.error}>{formik.errors.password}</div>}
      <Button className="submit" type="submit">Login</Button>
    </form>
  );
};

export default SignInForm;
