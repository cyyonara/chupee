import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopArticle from "../components/ShopArticle";
import * as yup from "yup";
import bg from "../assets/bg.jpg";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { IoAlertCircle } from "react-icons/io5";
import { useSignup } from "../hooks/useSignup";
import { toast } from "sonner";
import { useEffect } from "react";

import { useAuthStore } from "../store/authStore";

interface ISignupForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const requiredNotice = "This field is required";
const passwordPattern = /^.{8,}$/;

const signupValidation = yup.object().shape({
  firstName: yup.string().required(requiredNotice),
  lastName: yup.string().required(requiredNotice),
  username: yup.string().required(requiredNotice),
  password: yup
    .string()
    .matches(passwordPattern, "Password must be atleast 8 characters")
    .required(requiredNotice),
});

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { auth, setCredential } = useAuthStore((state) => state);
  const { mutate, isPending } = useSignup();
  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik<ISignupForm>({
      initialValues: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      },
      validationSchema: signupValidation,
      onSubmit: (formData) => {
        toast.promise<string>(
          new Promise((resolve, reject) => {
            mutate(formData, {
              onSuccess: (data) => {
                setCredential(data.auth);
                resolve("Success");
              },
              onError: (err) => reject(err.response!.data.message),
            });
          }),
          {
            loading: "Setting up your account...",
            success: "Account successfully created!",
            error: (err) => err,
          }
        );
      },
    });

  useEffect(() => {
    document.title = "Signup - Chupee";
  }, []);

  if (auth) return <Navigate to="/" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="min-h-[650px] relative flex items-center bg-cover bg-center px-8 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-1 m-auto flex items-center justify-between gap-x-10 max-w-[1400px] z-10">
          <ShopArticle />
          <div className="bg-white flex flex-col rounded-sm p-6 shadow-2xl flex-1 max-w-[400px] min-w-[400px]">
            <h3 className="text-2xl">Sign up</h3>
            <form className="flex flex-col mt-8 gap-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="f_name"
                  className="text-sm text-gray-500 after:content-['*'] after:text-red-500 after:ml-1"
                >
                  First name
                </label>
                <input
                  id="f_name"
                  name="firstName"
                  type="text"
                  className="border rounded-sm outline-none text-sm text-gray-500 p-2"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isPending}
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="l_name"
                  className="text-sm text-gray-500 after:content-['*'] after:text-red-500 after:ml-1"
                >
                  Last name
                </label>
                <input
                  id="l_name"
                  name="lastName"
                  type="text"
                  className="border rounded-sm outline-none text-sm text-gray-500 p-2"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isPending}
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="username"
                  className="text-sm text-gray-500 after:content-['*'] after:text-red-500 after:ml-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="border rounded-sm outline-none text-sm text-gray-500 p-2"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isPending}
                />
                {errors.username && touched.username && (
                  <p className="text-red-500 text-xs">{errors.username}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-500 after:content-['*'] after:text-red-500 after:ml-1"
                >
                  Password
                </label>
                <div
                  className="border flex items-center px-2"
                  style={{ borderColor: errors.password && touched.password ? "red" : "" }}
                >
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="text-sm outline-none text-gray-500 py-2 w-0 flex-1"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isPending}
                  />
                  <span
                    className="cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <PiEyeThin size={20} /> : <PiEyeSlashThin size={20} />}
                  </span>
                </div>
                <div className="flex text-xs text-gray-500 items-center gap-x-1">
                  <IoAlertCircle size={16} />
                  <p>Use at least 8 characters</p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-c-black mt-3 text-white uppercase rounded-sm duration-150 hover:bg-c-black/90 active:bg-c-black/80 py-2 disabled:bg-c-black/75"
                disabled={isPending}
              >
                Sign up
              </button>
            </form>
            <span className="text-center text-gray-400 text-xs mt-4">
              Have an account?{" "}
              <Link to="/login" className="text-black hover:underline">
                Login
              </Link>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
