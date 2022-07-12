import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Box, Text } from "@chakra-ui/react";

export function ContinentSlide() {
  const continents = [
    {
      name: "América do Norte",
      img: "/imgs/continent/north-america.jpg",
      alt: "north-american",
    },
    {
      name: "América do Sul",
      img: "/imgs/continent/south-america.jpg",
      alt: "south-american",
    },
    {
      name: "Ásia",
      img: "/imgs/continent/asia.jpg",
      alt: "asia",
    },
    {
      name: "África",
      img: "/imgs/continent/africa.jpg",
      alt: "africa",
    },
    {
      name: "Europa",
      img: "/imgs/continent/europe.jpg",
      alt: "europe",
    },
    {
      name: "Oceania",
      img: "/imgs/continent/oceania.jpg",
      alt: "oceania",
    },
  ];

  const boxParams = (img: string) => ({
    w: "100%",
    h: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: `url(${img}) center/cover no-repeat`,
  });
  return (
    <>
      {/* <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination, A11y]}
      > */}
      <Swiper pagination={true} modules={[Pagination]}>
        {continents.map((continent) => (
          <SwiperSlide key={continent.name}>
            <Box sx={boxParams(continent.img)}>
              <Text fontSize="36">{continent.name}</Text>
            </Box>
            {/* <Image src={continent.img} alt={continent.alt} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
