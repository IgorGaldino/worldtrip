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
    fontSize: "20px",
    cursor: "pointer",
    px: 4,
    background: `url(${img}) center/cover no-repeat`,
  });

  const sendContinent = (continent: string, img: string) => {
    const nameImg = img.split("/").at(-1);
    router.push(`/${continent}?img=${nameImg}`);
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
            onClick={() => sendContinent(continent.name, continent.img)}
          >
            <Text fontSize="36">{continent.name}</Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
