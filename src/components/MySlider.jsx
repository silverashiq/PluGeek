
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow  } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Images
import Gta1 from "../assets/Gta1.jpg";
import Gta2 from "../assets/Gta2.jpg";
import Witcher3 from "../assets/Witcher3.jpg";
import Witcher4 from "../assets/Witcher4.jpg";
import Portal5 from "../assets/Portal5.jpg";
import Portal6 from "../assets/Portal6.jpg";
import Tomb7 from "../assets/Tomb7.jpg";
import Tomb8 from "../assets/Tomb8.jpg";
import War9 from "../assets/War9.jpg";
import War10 from "../assets/War10.jpg";

import Spid1 from "../assets/Spid1.jpg";
import Spid2 from "../assets/Spid2.jpg";
import Bat1 from "../assets/Bat1.jpg";
import Bat2 from "../assets/Bat2.jpg";
import Shad1 from "../assets/Shad1.jpg";
import Shad2 from "../assets/Shad2.jpg";
import Rock1 from "../assets/Rock1.jpg";
import Rock2 from "../assets/Rock2.jpg";
import Cyber1 from "../assets/Cyber1.jpg";
import Cyber2 from "../assets/Cyber2.jpg";

function MySlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, ]}
        effect={'coverflow'}
        className="mb-7"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={War9}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={War10}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Witcher3}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Witcher4}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Tomb7}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Tomb8}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Gta1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Gta2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>


        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Cyber1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Cyber2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Bat1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Bat2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Spid1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Spid2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Rock1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Rock2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Shad1}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Shad2}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Portal5}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover object-center"
            src={Portal6}
            alt="Gameplay Screenshot"
          />
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export default MySlider;
