import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const hotelCategories = [
  {
    label: "Resort",
    value: "resort",
    description: "A large commercial establishment that provides lodging, meals, and other services for guests and tourists.",
  },
  {
    label: "Boutique Hotel",
    value: "boutique_hotel",
    description: "A small stylish hotel, typically situated in a fashionable urban location.",
  },
  {
    label: "Bed and Breakfast (B&B)",
    value: "bed_and_breakfast",
    description: "A small lodging establishment that offers overnight accommodation and breakfast.",
  },
  { label: "Luxury Hotel", value: "luxury_hotel", description: "An upscale hotel with high-end amenities and services." },
  { label: "Budget Hotel", value: "budget_hotel", description: "An economical hotel offering affordable accommodation options." },
];

const SignupSchema = Yup.object().shape({
  hotelName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const HotelCategories = () => {
  return (
    <div>
      <h1>Add Hotel</h1>
      <Formik
        initialValues={{
          hotelName: "",
          selectedCategories: [],
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="formfields">
              <Input name="hotelName" label="Hotel Name" placeholder="Hotel Name" />
              {errors.hotelName && touched.hotelName ? <div>{errors.hotelName}</div> : null}
            </div>

            <div className="formfields">
              <Select
                name="selectedCategories"
                label="Hotel Type"
                placeholder="Select hotel type(s)"
                selectionMode="multiple"
                className="max-w-xs"
              >
                {hotelCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="formfields">
              <Input name="email" label="Email" placeholder="Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const HotelBookingPage = () => {
  return (
    <div>
      <HotelCategories />
    </div>
  );
};

export default HotelBookingPage;
