import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mySubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-gray-100">
        <main className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#a16207]">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(mySubmit)} action="#" method="POST">
              <div className="mb-4">
                <label for="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  {...register("Name")}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label for="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  {...register("Email")}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label for="subject" className="block text-gray-700">
                  Subject
                </label>
                <input
                  {...register("Subject")}
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div className="mb-4">
                <label for="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  {...register("Message")}
                  id="message"
                  rows="5"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                    type="submit"
                    className="bg-[#a16207] text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Send Message
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default ContactUs;
