import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as yup from "yup";

const LoginComponent = ({ mainBackgroundColor, textColor }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false);

  const validationSchema = yup.object({
    password: yup
      .string()
      .matches(/[a-zA-Z0-9]{6,}/, "the passwod is wrong")
      .required("Password entry is mandatory."),
    username: yup
      .string()
      .min(8, "Username must be at least 8 characters long.")
      .max(20, "Username must be at most 20 characters long.")
      .required("Username is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);

      const userData = {
        identifier: values.username,
        password: values.password,
      };

      fetch("http://localhost:4000/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          if (!res.ok) {
            return res.text().then((text) => {
              throw new Error(text);
            });
          } else {
            return res.json();
          }
        })
        .then((result) => {
          swal({
            title: "You have successfully logged in.",
            icon: "success",
            buttons: "Login to the panel.",
          }).then((value) => {
            navigate("/");
          });

          authContext.login({}, result.accessToken);
        })
        .catch((err) => {
          swal({
            title: "Such a user does not exist!",
            icon: "error",
            buttons: "try again",
          });
        });

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      formik.handleSubmit();
    }, 1000);
  };

  const onChangeHandler = () => {
    setIsGoogleRecaptchaVerify(true);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="p-20">
      <Helmet>
        <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
      </Helmet>
      <section
        className={`min-h-screen flex items-center justify-center ${mainBackgroundColor} ${textColor}`}
      >
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form onSubmit={formik.handleSubmit}>
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
                  placeholder="username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-black">{formik.errors.username}</div>
                ) : null}
                <i className="fa fa-user text-black"></i>
              </div>
              <div>
                <input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`text-black ${
                    formik.touched.password && formik.errors.password
                      ? "input-error"
                      : formik.touched.password && !formik.errors.password
                      ? "input-valid"
                      : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-black">{formik.errors.password}</div>
                ) : null}
                <i
                  className={`login-form__password-icon fa ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChangeHandler}
                  size="compact"
                />
              </div>

              <button
                type="submit"
                disabled={!formik.isValid || isSubmitting || isClicked}
                style={{
                  backgroundColor:
                    !formik.isValid || isSubmitting || isClicked
                      ? "grey"
                      : "rgba(253, 63, 85, 1)",
                  cursor:
                    !formik.isValid || isSubmitting || isClicked
                      ? "not-allowed"
                      : "pointer",
                }}
                onClick={handleClick}
                className="mt-4 w-full bg-[#002D74] text-white py-2 rounded-md hover:bg-[#002D74]/90 transition duration-200"
              >
                <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
                <span className="text-black">login</span>
              </button>
              <div>
                <label>
                  <input type="checkbox" />
                  <span className="text-black">remember me</span>
                </label>
                <label>
                  <a href="#">did you forget your paassword?</a>
                </label>
              </div>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Login with Google
            </button>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </div>
          </div>

          {/* image */}
          <div className="md:block hidden w-1/2 h-full">
            <img
              className="rounded-2xl"
              src="../../public/images/nab2.png"
              alt="Login"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponent;
