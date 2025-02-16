import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

export default function FlagSwiper() {
  const flags = [
    {
      id: 1,
      name: "USA",
      image: "../../public/images/Flag_of_the_United_States.svg",
    },
    {
      id: 2,
      name: "Canada",
      image: "../../public/images/Flag_of_Canada_(Pantone).svg.png",
    },
    {
      id: 3,
      name: "UK",
      image: "../../public/images/Flag_of_the_United_Kingdom_(1-2).svg.png",
    },
    {
      id: 4,
      name: "France",
      image: "../../public/images/Flag_of_France.svg.png",
    },
    {
      id: 5,
      name: "Germany",
      image: "../../public/images/Flag_of_Germany.svg",
    },
    {
      id: 6,
      name: "Japan",
      image: "../../public/images/Flag_of_Japan.svg.png",
    },
    {
      id: 7,
      name: "Australia",
      image: "../../public/images/Flag_of_Australia.svg",
    },
    {
      id: 8,
      name: "India",
      image: "../../public/images/Flag_of_India.svg.png",
    },
    {
      id: 9,
      name: "Brazil",
      image: "../../public/images/Flag_of_Brazil.svg.png",
    },
  ];

  return (
    <Swiper
      className="mt-1"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {flags.map((flag) => (
        <SwiperSlide key={flag.id} className="text-black w-screen bg-gray-100">
          <img
            src={flag.image}
            alt={flag.name}
            className="w-full h-40 object-cover"
          />
          <p className="mt-2 text-center">{flag.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
