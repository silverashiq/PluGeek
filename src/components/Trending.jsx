import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Trending() {
  const [gameList, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_MY_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGamelist(data.results.slice(0, 20));
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mb-16">
        <h1 className="my-11 text-center text-4xl text-gray-800 font-bold">
          {" "}
          Trending Games to play
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          className="mb-7"
          // centeredSlides={true}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="flex container mx-auto gap-7 flex-wrap my-4 justify-center">
            {gameList.map((game) => (
              <SwiperSlide>
                <GameCard key={game.id} gameInfo={game} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Trending;
