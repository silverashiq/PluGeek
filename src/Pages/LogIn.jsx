import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import { userGoogle, userLogin } from "../Firebas";


function LogIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmitData(data) {
    const { email, password } = data;
    userLogin(email, password)
  }

  function googleLogin(){
    userGoogle()
  }

  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-center">
                Log-in to your account
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmitData)} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="login-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="sr-only">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    id="login-password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    {...register("Remember Profile")}
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="/forgot"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                  <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#a16207] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                  onClick={googleLogin}
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In with Google
                </button>
                  </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
