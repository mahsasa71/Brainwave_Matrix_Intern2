import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterComponent = ({ mainBackgroundColor, textColor }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Full name is required"),
    username: yup
      .string()
      .min(8, "Username must be at least 8 characters long.")
      .max(20, "Username must be at most 20 characters long.")
      .required("Username is required."),
    email: yup
      .string()
      .email("The entered email is not correct")
      .required("Email field is required."),
    password: yup
      .string()
      .matches(/[a-zA-Z0-9]{6,}/, "The password is incorrect")
      .required("Password entry is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Confirming the password is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);

      const newUserInfos = {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phone: values.phone,
      };

      fetch("http://localhost:4000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInfos),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            if (res.status === 403) {
              swal({
                title: "This phone number has been blocked",
                icon: "error",
                buttons: "Oh no!",
              });
            }
          }
        })
        .then((result) => {
          authContext.login(result.user, result.accessToken);
          navigate("/");
        });

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    },
  });

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
      </Helmet>
      <section
        className={`min-h-screen flex items-center justify-center ${mainBackgroundColor} ${textColor}`}
      >
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">Create a new account</p>

            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-black ${
                    formik.touched.name && formik.errors.name
                      ? "input-error"
                      : formik.touched.name && !formik.errors.name
                      ? "input-valid"
                      : ""
                  }`}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error-message text-black">
                    {formik.errors.name}
                  </div>
                ) : null}
                <i className="fa fa-user"></i>
              </div>
              <div>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-black ${
                    formik.touched.username && formik.errors.username
                      ? "input-error"
                      : formik.touched.username && !formik.errors.username
                      ? "input-valid"
                      : ""
                  }`}
                  type="text"
                  placeholder="Username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error-message text-black">
                    {formik.errors.username}
                  </div>
                ) : null}
                <i className="fa fa-user"></i>
              </div>
              <div>
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-black ${
                    formik.touched.email && formik.errors.email
                      ? "input-error"
                      : formik.touched.email && !formik.errors.email
                      ? "input-valid"
                      : ""
                  }`}
                  type="text"
                  placeholder="Email Address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message text-black">
                    {formik.errors.email}
                  </div>
                ) : null}
                <i className="fa fa-envelope"></i>
              </div>
              <div>
                <input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`login-form__password-input text-black ${
                    formik.touched.password && formik.errors.password
                      ? "input-error"
                      : formik.touched.password && !formik.errors.password
                      ? "input-valid"
                      : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-message text-black">
                    {formik.errors.password}
                  </div>
                ) : null}
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <div>
                <input
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`login-form__password-input text-black ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "input-error"
                      : formik.touched.confirmPassword &&
                        !formik.errors.confirmPassword
                      ? "input-valid"
                      : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="error-message text-black">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <div>
                <input
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-black ${
                    formik.touched.phone && formik.errors.phone
                      ? "input-error"
                      : formik.touched.phone && !formik.errors.phone
                      ? "input-valid"
                      : ""
                  }`}
                  type="text"
                  placeholder="Phone Number"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error-message text-black">
                    {formik.errors.phone}
                  </div>
                ) : null}
                <i className="fa fa-phone"></i>
              </div>

              <button
                type="submit"
                disabled={!formik.isValid || isSubmitting}
                style={{
                  backgroundColor:
                    !formik.isValid || isSubmitting
                      ? "grey"
                      : "rgba(253, 63, 85, 1)",
                  cursor:
                    !formik.isValid || isSubmitting ? "not-allowed" : "pointer",
                }}
                className="mt-4 w-full bg-[#002D74] text-white py-2 rounded-md hover:bg-[#002D74]/90 transition duration-200"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </form>

            <div className="mt-4 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already registered?</p>
              <button
                onClick={handleLoginClick}
                className="py-2 px-5 bg-white border rounded-md hover:bg-gray-100 transition duration-200"
              >
                login
              </button>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="../../public/images/nab3.png"
              alt="Register"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterComponent;
