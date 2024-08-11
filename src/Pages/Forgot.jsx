import React from "react";
import { useForm } from "react-hook-form";

const Forgot = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mySubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Forgot Your Password?
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Enter your email address below, and we'll send you a link to reset
          your password.
        </p>
        <form onSubmit={handleSubmit(mySubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
            {...register("Email")}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
