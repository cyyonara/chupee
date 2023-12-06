import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopArticle from "../components/ShopArticle";
import bg from "../assets/bg.jpg";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface LoginData {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<LoginData>({ username: "", password: "" });
  const { isPending, mutate } = useLogin();
  const { auth, setCredential } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.promise<string>(
      new Promise((resolve, reject) => {
        mutate(loginForm, {
          onSuccess: (data) => {
            setCredential(data.auth);
            resolve(`${data.auth.firstName} ${data.auth.lastName}`);
          },
          onError: (err) => {
            reject(err.response!.data.message);
          },
        });
      }),
      {
        loading: "Logging in...",
        success: (user: string) => `Logged in as ${user}`,
        error: (errString) => errString,
      }
    );
  };

  useEffect(() => {
    document.title = "Login - Chupee";
  });

  if (auth) return <Navigate to="/" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="min-h-[650px] relative flex items-center bg-cover bg-center px-8 before:content-[''] before:absolute before:inset-0 before:bg-black/40"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-1 m-auto flex max-w-[1400px] gap-x-10 items-center justify-between z-10">
          <ShopArticle />
          <div className="bg-white flex flex-col rounded-sm p-6 shadow-2xl flex-1 max-w-[410px] min-w-[400px] ">
            <h3 className="text-2xl">Login</h3>
            <form className="flex flex-col mt-8 gap-y-4" onSubmit={handleLogin}>
              <input
                id="username"
                type="text"
                className="border rounded-sm outline-none text-sm text-gray-600 p-2"
                placeholder="Username"
                value={loginForm.username}
                onChange={handleChange}
                disabled={isPending}
              />
              <div className="flex px-2 border items-center rounded-sm">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-0 outline-none text-sm text-gray-600 py-2 flex-1"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={handleChange}
                  disabled={isPending}
                />
                <span
                  className="text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <PiEyeThin /> : <PiEyeSlashThin />}
                </span>
              </div>
              <button
                type="submit"
                className="uppercase bg-c-black text-white py-2 rounded-sm mt-2 duration-150 hover:bg-c-black/90 active:bg-c-black/80 disabled:bg-c-black/70"
                disabled={isPending}
              >
                Login
              </button>
            </form>
            <span className="text-center mt-4 text-xs text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black hover:underline">
                Sign up
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
