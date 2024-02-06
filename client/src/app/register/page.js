'use client'
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const page = () => {
  const router = useRouter();
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("required"),
    phoneNumber: Yup.string().min(4, "Invalid Phonenumber").required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 letters")
      .required("Password is required"),
  });

  const handleRegister = async (values) => {
  try {
    const res = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (res.status === 200) {
      router.push('/login'); // Use router to navigate
    }
    toast(data.msg);
  } catch (error) {
    console.error(error);
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
          handleRegister(values);
        }}
      >
        {({ errors }) => (
          <Form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="font-bold text-2xl text-blue-500">Register</h2>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                className={`w-full lg:w-96 p-3 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="absolute text-red-500 text-xs">{errors.fullName}</p>}
            </div>

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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="absolute text-red-500 text-xs">{errors.email}</p>}
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
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-700 underline">
                    Signin
                  </Link>
              </p>
            </div>
            
            <Button className="bg-blue-500 text-white px-4 py-2 rounded text-center" type="submit">

              Register
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;