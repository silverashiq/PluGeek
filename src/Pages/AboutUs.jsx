import React from 'react'

import Ashiq from "../assets/Ashiq.jpg";
import Nabi from "../assets/Nabi.jpg";

function AboutUs() {
  return (
    <div>
        <main className="container mx-auto py-12 px-4">
    <section className="mb-12">
      <h2 className="text-4xl font-bold mb-4 text-[#a16207]">About Us</h2>
      <p className="text-lg leading-relaxed">
        Welcome to PluGeek! We are a passionate team of gamers and developers dedicated to creating and sharing the best gaming experiences. Our mission is to bring joy and excitement to gamers of all ages through innovative and engaging games.
      </p>
    </section>

    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-4 text-[#a16207]">Our Story</h3>
      <p className="text-lg leading-relaxed">
        PluGeek was founded in 2024 by Syed Ashiqur Rahman who shares a deep love for games. From humble beginnings as a small indie studio, the site promises to grow into a thriving community of gamers and creators. Our journey has been fueled by our commitment to quality, creativity, and the endless possibilities of the gaming world.
      </p>
    </section>

    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-4 text-[#a16207]">Meet Our Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-lg">
          <img src={Ashiq} alt="Team Member" className="w-auto h-64 object- rounded-lg mb-4"></img>
          <h4 className="text-2xl font-bold mb-2 text-white">Solver Silver</h4>
          <p className="text-gray-200">Lead Developer</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <img src={Nabi} alt="Team Member" className="w-auto h-64 object-cover rounded-lg mb-4"></img>
          <h4 className="text-2xl font-bold mb-2 text-white">Shamaun Nabi</h4>
          <p className="text-gray-200">Project Manager</p>
        </div>

      </div>
    </section>

    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-4 text-[#a16207]">Our Values</h3>
      <ul className="list-disc list-inside text-lg leading-relaxed">
        <li>Innovation: Pushing the boundaries of what games can be.</li>
        <li>Community: Building a welcoming and inclusive space for all gamers.</li>
        <li>Quality: Delivering polished and enjoyable experiences.</li>
        <li>Passion: Loving what we do and sharing that love with the world.</li>
      </ul>
    </section>
  </main>
    </div>
  )
}

export default AboutUs