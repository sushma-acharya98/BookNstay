// 'use client'
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {Input,Button} from "@nextui-org/react";
// import { useRouter } from 'next/navigation';
// import styles from './Register.module.css'; // Import your CSS file

// const SignupForm = () => {
//   const router = useRouter()

//    const SignupSchema = Yup.object().shape({
//      email: Yup.string().email('Invalid email').required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });
 
//  const registerUser = async(values)=> {
//  const res=  await fetch('http://localhost:5000/register/',{
//     method: 'POST',
//     headers: {'Content-Type':'application/json' },
//     body: JSON.stringify(values)
//   })
//   const data = await res.json()
//   if(res.status == 200) {
//     router.push('/login')
//   }
//   toast(data.msg)
  
//  }
//   const formik = useFormik({
//     initialValues: {
//       phoneNumber: '',
//       email: '',
//       password: '',
//       role:''
//     },
//     validationSchema:SignupSchema,
//     onSubmit: values => {
//       registerUser(values)
//     },
//   });

//   return (
    
//     <form onSubmit={formik.handleSubmit}>
//       <h2>Register</h2>
//       <Input 
//        id="phoneNumber"
//        label="phoneNumber"
//        name="phoneNumber"
//        type="text"
//        onChange={formik.handleChange}
//        value={formik.values.phoneNumber}
//       />
//         {formik?.errors.phoneNumber}
//       <Input 
//        id="email"
//        name="email"
//        type="text"
//        onChange={formik.handleChange}
//        value={formik.values.email}
//       label="email" />
//               {formik?.errors.email}
//          <Input 
//        id="password"
//        name="password"
//        type="password"
//        onChange={formik.handleChange}
//        value={formik.values.password}
//       label="password" />
//           <Input 
//        id="role"
//        name="role"
//        type="text"
//        onChange={formik.handleChange}
//        value={formik.values.role}
//       label="role" />
//       <Button type="submit">Submit</Button>
//     </form>
  
//   );
// };

// export default SignupForm
// SignupForm.js

'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import styles from './Register.module.css'; // Import your CSS module

const SignupForm = () => {
  const router = useRouter()

  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
  });

  const registerUser = async (values) => {
    const res = await fetch('http://localhost:5000/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    const data = await res.json();
    if (res.status === 200) {
      router.push('/login');
    }
    // Assuming you have a toast function for displaying messages
    toast(data.msg);
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      password: '',
      role: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      registerUser(values);
    },
  });

  return (
    <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
      <h2>Register</h2>
      <Input
        id="phoneNumber"
        label="Phone Number"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      {formik?.errors.phoneNumber && <div className={styles.error}>{formik.errors.phoneNumber}</div>}
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        label="Email"
      />
      {formik?.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="Password"
      />
      {formik?.errors.role && <div className={styles.error}>{formik.errors.role}</div>}
      <Button className='submit' type="submit">Submit</Button>
    </form>
  );
};

export default SignupForm;
