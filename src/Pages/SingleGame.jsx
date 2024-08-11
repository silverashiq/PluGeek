import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Progress } from "@nextui-org/react";
import { motion } from "framer-motion"

function SingleGame() {
  const { id } = useParams();

  const [singleList, setSinglelist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${
            import.meta.env.VITE_MY_KEY
          }`
        );
        const data = await response.json();
        setSinglelist(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <div className="w-full h-[100vh] flex justify-center items-center">
            <Progress
              size="sm"
              isIndeterminate
              aria-label="Loading..."
              className="max-w-md h-auto"
            />
          </div>
        ) : (
          singleList && (
            <div   style={{ backgroundImage: `url(${singleList.background_image_additional})` }}
            className="bg-cover ">
              <div className="min-h-screen  text-white py-10 px-6 drop-shadow-2xl ">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-96">
                      <img
                        src={singleList.background_image}
                        alt={singleList.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                          {singleList.name}
                        </h1>
                      </div>
                    </div>
                    <div className="p-6 md:p-10">
                      <div className="flex justify-between items-center">

                        <span className="px-4 py-1 bg-gray-700 rounded-md text-xs ">
                          Release Date - {singleList.released}
                          <br />
                          Rating - {singleList.rating} / 5
                          <br />
                          Genre - {singleList.genres
                            ? singleList.genres
                                .map((genre) => genre.name)
                                .join(", ")
                            : "Genre Unavailable"}  
                        </span>
                            <motion.div whileHover={{ scale: 1.15 }}>
                            <NavLink to={singleList.website} className="bg-blue-600 text-2xl px-4 py-2 rounded-md text-white">BUY</NavLink>
                            </motion.div>
                      </div>

                      <p className="mt-4 text-gray-300 text-lg leading-relaxed"> <span className="text-white font-semibold">Description - </span>
                        {singleList.description_raw ||
                          "Description Unavailable"}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">
                        {singleList.tags ? (
                          singleList.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                            >
                              {tag.name}
                            </span>
                          ))
                        ) : (
                          <span>No Tags Available</span>
                        )}
                      </div>

                      <div className="mt-8">
                        <h2 className="text-2xl font-semibold">
                          System Requirements
                        </h2>
                        <ul className="mt-2 text-gray-300">
                          {singleList.platforms ? (
                            singleList.platforms.map((platform, index) => (
                              <li key={index}>
                                • {platform.platform.name}:{" "}
                                {platform.requirements?.minimum ||
                                  "No Minimum Requirements"}
                              </li>
                            ))
                          ) : (
                            <li>No System Requirements Available</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default SingleGame;
