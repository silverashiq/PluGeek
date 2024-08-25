import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { userGoogle, userRegister } from "../Firebas";


function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const [userEmail, setUserEmail] = useState("");
  function onSubmitData(data) {
    const { email, password } = data;
    userRegister(email, password)
  }

  function googleLogin(){
    userGoogle()
  }
  

  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full space-y-8 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-center">
                Sign Up for an account
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(onSubmitData)}
              className="mt-8 space-y-6"
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="signup-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  ></input>
                </div>
                <div>
                  <label for="signup-password" className="sr-only">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    id="signup-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  ></input>
                </div>
                <div>
                  <label for="signup-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword")}
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  ></input>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  {...register("agreeTerms")}
                  id="terms-checkbox"
                  type="checkbox"
                  required
                  className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                ></input>
                <label
                  required
                  for="terms-checkbox"
                  className="ml-2 text-sm font-normal text-white"
                >
                  I agree with the
                  <a
                    href="/terms"
                    className="text-blue-600 hover:underline font-normal"
                  >
                    {" "}
                    terms and conditions
                  </a>
                </label>
              </div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#a16207] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>

                <button onClick={googleLogin} className="group relative w-full flex justify-center py-2 mt-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up with Google
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
