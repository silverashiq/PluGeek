import React from 'react'
import PcGames from "../assets/pc.jpg";
import ConsoleGames from "../assets/console.jpg";
import MobileGames from "../assets/mobile.jpg";



function GameSection() {
  return (
    <div>
        <div>
        <div>
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Gaming Platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <img
                  src={PcGames}
                  alt="PC Gaming"
                  className="w-full h-48 object-cover rounded-t-lg"
                ></img>
                <h3 className="text-2xl text-white font-semibold mt-4">PC Gaming</h3>
                <p className="text-gray-400 mt-2 text-xl">
                  Experience high-quality graphics, customizable settings, and a
                  vast library of games.
                </p>
                <div>
                  <div className="mb-4 text-left">
                    <h4 className="text-xl font-semibold text-green-500">Pros</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>High-quality graphics and performance</li>
                      <li>Customizable hardware and settings</li>
                      <li>Large selection of games</li>
                    </ul>
                  </div>
                  <div className=" text-left">
                    <h4 className="text-xl font-semibold text-red-500">Cons</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Expensive initial setup</li>
                      <li>Requires technical knowledge</li>
                      <li>Potential compatibility issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <img
                  src={ConsoleGames}
                  alt="Console Gaming"
                  className="w-full h-48 object-cover rounded-t-lg"
                ></img>
                <h3 className="text-2xl text-white mt-4 font-semibold">Console Gaming</h3>
                <p className="text-gray-400 mt-2 text-xl">
                  Enjoy exclusive titles, easy setup, and a dedicated gaming
                  experience.
                </p>
                <div>
                  <div className="mb-4 text-left">
                    <h4 className="text-xl font-semibold text-green-500">Pros</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Easy to set up and use</li>
                      <li>Exclusive game titles</li>
                      <li>Optimized for gaming</li>
                    </ul>
                  </div>
                  <div className=" text-left">
                    <h4 className="text-xl font-semibold text-red-500">Cons</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Less customizable</li>
                      <li>Locked to specific hardware</li>
                      <li>Games can be more expensive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <img
                  src={MobileGames}
                  alt="Mobile Gaming"
                  className="w-full h-48 object-cover rounded-t-lg"
                ></img>
                <h3 className="text-2xl text-white mt-4 font-semibold">Mobile Gaming</h3>
                <p className="text-gray-400 mt-2 text-xl">
                  Play on the go with a wide range of games available anytime,
                  anywhere.
                </p>
                <div>
                  <div className="mb-4 text-left">
                    <h4 className="text-xl font-semibold text-green-500">Pros</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Play anywhere, anytime</li>
                      <li>Wide variety of free games</li>
                      <li>Simple and accessible</li>
                    </ul>
                  </div>
                  <div className=" text-left">
                    <h4 className="text-xl font-semibold text-red-500">Cons</h4>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Limited performance and graphics</li>
                      <li>Battery consumption</li>
                      <li>Micro transactions in many games</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="bg-slate-800 *:py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Advantages of Gaming</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <h3 className="text-2xl text-white mb-4">Cognitive Benefits</h3>
                <p className="text-gray-400">
                  Improve problem-solving skills, enhance memory, and boost
                  creativity through interactive gameplay.
                </p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <h3 className="text-2xl text-white mb-4">Social Interaction</h3>
                <p className="text-gray-400">
                  Connect with friends, join online communities, and engage in
                  multiplayer experiences that foster teamwork.
                </p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <h3 className="text-2xl text-white mb-4">Stress Relief</h3>
                <p className="text-gray-400">
                  Relax and unwind by immersing yourself in captivating worlds
                  and exciting challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>

    </div>
  )
}

export default GameSection