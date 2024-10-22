import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(5, "Name must have atlast 5 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(4, "Password must have atlast 4 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const nameErrors = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );

  const emailErrors = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );

  const passErrors = formik.touched.password && formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );

  return (
    <div>
      <h1>Register Now</h1>
      <form action="#" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <br />
        {nameErrors}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br />
        {emailErrors}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        {passErrors}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formik;

//! 06 How to Control From Data using {formik} and {yup} in React.Js
