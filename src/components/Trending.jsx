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
          Trending Games to play
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          className="mb-7"
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {gameList.map((game) => (
            <SwiperSlide key={game.id}>
              <GameCard gameInfo={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Trending;
