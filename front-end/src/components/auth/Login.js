import cocoonImg from '../../assets/LoginAssets/logococoon.png'
import {FcGoogle} from 'react-icons/fc'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const { isFetching, isError } = useSelector((state) => state.auth);

      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, { email, password }, navigate);
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
              <h2 className="text-4xl font-bold text-center ">Login</h2>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  className="border p-2 mr-8"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  className="border p-2 mr-8"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* {!isError && (
                <p className="text-red-500">invalid username or password</p>
              )} */}

           <Link to = "/">

              <button
                className="md:w-[300px] w-full py-2 mt-4 bg-main text-white border rounded-lg "
                // onClick={(e) => handleSubmit(e)}
              >
                Sign In
              </button>
           </Link>
              <button className=" flex justify-center md:w-[300px] w-full py-2 mt-4 bg-google text-white border rounded-lg">
                <FcGoogle className="mx-4 my-auto" />
                Continue with Google
              </button>
              <div className="flex justify-center mt-4 mr-5">
                <p>
                  Don't have an account?{" "}
                  <button className="text">Sign Up</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}