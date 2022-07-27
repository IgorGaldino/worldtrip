import React from "react";
import { useRouter } from "next/router";

import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, A11y } from "swiper";

export function ContinentSlide() {
  const router = useRouter();

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
    cursor: "pointer",
    px: 4,
    background: `url(${img}) center/cover no-repeat`,
  });

  const sendContinent = () => {
    router.push("/continent");
  }

  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination, A11y]}
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.name}>
          <Box
            sx={boxParams(continent.img)}
            onClick={() => sendContinent()}
          >
            <Text fontSize={["2xl", "3xl", "4xl"]}>{continent.name}</Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
