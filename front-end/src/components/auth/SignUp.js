import React, { useState } from "react";
// import loginImg from '../assets/LoginAssets/login-2.jpg'
import cocoonImg from "../../assets/LoginAssets/logococoon.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../api";


export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isError } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    Phone_no:"",
    email: "",
    password: "",
  });

  // collecting data from user
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // handle sign up
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(dispatch, userData, navigate);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:w-[350px] m-auto md:w-[750px] h-[580px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-lg bg-bgMain">
        <div className="absolute hidden md:block border-8 border-main-50 bg-bgmain p-10 ml-5 w-[700px] h-[500px] my-12 rounded-lg  shadow-lg shadow-gray-600"></div>
        <div className="justify-between hidden md:block w-full h-[580px] bg-main rounded-lg"></div>
        <div className="p-4 flex flex-col justify-around bg-bgmain relative">
          <img
            src={cocoonImg}
            className="max-w-[200px] absolute top-0 right-0"
          />
          <form>
            <h2 className="mb-4 text-4xl font-bold text-center">SignUp</h2>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border p-2 mr-8"
                type="text"
                value={userData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Phone Number</label>
              <input
                className="border p-2 mr-8"
                type="text"
                value={userData.Phone_no}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border p-2 mr-8"
                type="password"
                value={userData.password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <p className="mt-2">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <button className="md:w-[300px] w-full py-2 mt-4 bg-main text-white border rounded-lg">
              Sign Up
            </button>
            <button className=" flex justify-center md:w-[300px] w-full py-2 mt-4 bg-google text-white border rounded-lg">
              <FcGoogle className="mx-4 my-auto" />
              Continue with Google
            </button>
            <div className="flex justify-center mt-4 mr-5">
              
              <p>
                Already have an account?{" "}
                <button className="text">Sign In</button>
              </p>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
