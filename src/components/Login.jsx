import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = ({ onLogin }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Login Data", values);
    alert("Congratulations! You are logged in successfully");
       // Redirect to the home page on successful login
       navigate("/home");

    // Simulate profile data (replace with real API call)
    const profile = {
      email: values.email,
      imageUrl: "https://www.facebook.com/miracle.nweze.524", // Replace with a real profile image
    };

    // Call the parent's onLogin function
    onLogin(profile);

  };

  let navigate = useNavigate();
    <button onClick={() => {navigate("/home");}}/>
    
  return (
    <div data-aos="fade-up" className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h2>Login</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {() => (
              <Form>
                <div>
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <label>Password:</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div>
                  <button type="submit">Login Now</button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Account button */}
          <div className="account-button">
            <span className="d-block cate pt-5">
              Do not Have An Account? <Link to="/sign-up">SignUp</Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>

            {/* Social login */}
            <h5 className="subtitle">Login With Social Account</h5>
            <ul className="lab-ul social-icons justify-content-center">
              <li>
                <a href="#" className="facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="github">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
