import React from 'react'

function ContactUs() {
  return (
<>
<div class="bg-gray-100">
        <main class="flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-[#a16207]">Contact Us</h2>
      <form action="#" method="POST">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Name</label>
          <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></input>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></input>
        </div>
        <div class="mb-4">
          <label for="subject" class="block text-gray-700">Subject</label>
          <input type="text" id="subject" name="subject" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></input>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700">Message</label>
          <textarea id="message" name="message" rows="5" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required></textarea>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="bg-[#a16207] text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Send Message</button>
        </div>
      </form>
    </div>
  </main>
    </div>
</>
  )
}

export default ContactUs