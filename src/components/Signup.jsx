import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";


const title = "Signup";
const socialTitle = "Login With Social Account";
const btnText = "Login Now"

const socialList = [
    { iconName: 'fa-facebook', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-twitter', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-linkedin', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-instagram', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-pinterest', siteLink: '#', className: 'fa-brands', },
]

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must include 6 characters one uppercase and one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Signup Data", values);
    alert("Congratulations! SignUp is successful, Proceed to login.");
     // Redirect to the login page on successful signup
     navigate("/login");
  };
  let navigate = useNavigate();
  <button onClick={() => {navigate("/login");}}/>

  return (
    <div data-aos='fade-up' className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h2>SignUp</h2>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {() => (
                            <Form>
                            <div>
                              <label>Username:</label>
                              <Field type="text" name="username" />
                              <ErrorMessage name="username" component="div" className="error" />
                            </div>
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
                              <label>Confirm Password:</label>
                              <Field type="password" name="confirmPassword" />
                              <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>
                            <button type="submit">Sign Up</button>
                          </Form>
                        )}
                    </Formik>

                    {/* account button */}
                    <div className='account-button'>
                        <span className='d-block cate pt-5'>
                            Already Have An Account? <Link to="/login">Login</Link>
                        </span>
                        <span className='or'>
                            <span>or</span>
                        </span>

                        {/* social login */}
                        <h5 className='subtitle'>{socialTitle}</h5>
                        <ul className='lab-ul social-icons justify-content-center'>
                            <li>
                                <a href='' className='facebook'><i className="fa-brands fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href='/' className='linkedin'><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href='/' className='instagram'><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href='/' className='twitter'><i className="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href='/' className='github'><i className="fa-brands fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
