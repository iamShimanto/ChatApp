import React, { useState } from "react";
import { Link } from "react-router";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailErr("Email is required");
    } else if (!password) {
      setPasswordErr("Password is required");
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1012] px-4">
      <div className="bg-[#16181C] p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01]">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#7289DA] mb-2">
            Welcome Back!
          </h2>
          <p className="text-[#99AAB5]">We're so excited to see you again!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            {emailErr && (
              <div className="absolute -top-6 left-0 text-red-500 text-sm">
                {emailErr}
              </div>
            )}
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99AAB5] group-hover:text-[#7289DA] transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              value={email}
              className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2 ${
                emailErr ? "border-red-500" : "border-[#2C2F33]"
              } rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA]`}
            />
          </div>

          <div className="relative group">
            {passwordErr && (
              <div className="absolute -top-6 left-0 text-red-500 text-sm">
                {passwordErr}
              </div>
            )}
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#99AAB5] group-hover:text-[#7289DA] transition-colors" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value), setPasswordErr("");
              }}
              value={password}
              className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2 ${
                passwordErr ? "border-red-500" : "border-[#2C2F33]"
              } rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA]`}
            />
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
              to="/"
              className="text-[#7289DA] hover:text-[#5869a6] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#7289DA] text-white rounded-lg font-semibold hover:bg-[#5869a6] transform transition-all hover:scale-[1.02] focus:scale-[0.98] active:scale-[0.98]"
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
