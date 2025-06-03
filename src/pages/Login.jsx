import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

   signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        if (auth.currentUser.emailVerified) {
          navigate("/chat");
        } else {
          toast.error("Email isn't Verified!")
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Enter Your Valid Email");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Enter Your Password!");
        }
        if (error.code === "auth/invalid-credential") {
          toast.error("Password Wrong!");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1012] px-4">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="bg-[#16181C] p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01]">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#7289DA] mb-2">Welcome</h2>
          <p className="text-[#99AAB5]">We're so excited to see you again!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="relative group">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99AAB5] group-hover:text-[#7289DA] transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => {
                setUserData((prev) => ({ ...prev, email: e.target.value }));
              }}
              className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2  "border-[#2C2F33]"
               rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA]`}
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99AAB5] group-hover:text-[#7289DA] transition-colors" />
            <div className="relative">
              <input
                type={isOpen ? "password" : "text"}
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2  "border-[#2C2F33]"
               rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA]`}
              />
              {isOpen ? (
                <IoIosEyeOff
                  className="text-[#99AAB5] text-2xl absolute top-5 right-5 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <IoIosEye
                  className="text-[#99AAB5] text-2xl absolute top-5 right-5 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-[#99AAB5] hover:text-white cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 rounded border-[#2C2F33] bg-[#1E2124]"
              />
              Remember me
            </label>
            <Link
              to="/reset"
              className="text-[#7289DA] hover:text-[#5869a6] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#7289DA] text-white rounded-lg font-semibold hover:bg-[#5869a6] transform transition-all hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.98] cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[#99AAB5]">
            Need an account?{" "}
            <Link
              to="/register"
              className="text-[#7289DA] hover:text-[#5869a6] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
