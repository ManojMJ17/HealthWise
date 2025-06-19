import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../../api/AppPath";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (loading) setLoading(true);

      if (response.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          toast.success("Login successfull");
          navigate("/home");
        } else {
          toast.error("No token received from server");
        }
      } else {
        toast.error("Login Failed");
        setError(data.message || "Loginfailed");
      }
      //   console.log(localStorage.getItem("token"));

      if (error) toast.error("Login Failed");
    } catch (error) {
      console.error("Login Failed", error);
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full my-5 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <form
          onSubmit={loginHandler}
          className="flex flex-col items-center my-6 gap-4 w-[50%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-4 flex justify-center text-white bg-[#789CBA] px-3 py-2 rounded-4xl cursor-pointer w-[50%]">
            <button type="submit" className="text-black font-semibold">
              Login
            </button>
          </div>
          <div className="mt-1 flex justify-center text-white bg-[#2E363D] px-3 py-2 rounded-4xl cursor-pointer w-[50%]">
            <button type="submit" className="text-white font-semibold">
              Continue with Google
            </button>
          </div>
          <div>
            <p className="opacity-40">
              Don't have an account?<Link to="/register"> Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
