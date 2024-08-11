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
      <div class="bg-gray-100">
        <main class="flex items-center justify-center min-h-screen">
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
            <h2 class="text-2xl font-bold mb-6 text-center text-[#a16207]">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(mySubmit)} action="#" method="POST">
              <div class="mb-4">
                <label for="name" class="block text-gray-700">
                  Name
                </label>
                <input
                  {...register("Name")}
                  type="text"
                  id="name"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700">
                  Email
                </label>
                <input
                  {...register("Email")}
                  type="email"
                  id="email"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="subject" class="block text-gray-700">
                  Subject
                </label>
                <input
                  {...register("Subject")}
                  type="text"
                  id="subject"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700">
                  Message
                </label>
                <textarea
                  {...register("Message")}
                  id="message"
                  rows="5"
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></textarea>
              </div>
              <div class="flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                    type="submit"
                    class="bg-[#a16207] text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
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
