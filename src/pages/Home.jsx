import React from "react";
import HomeIntro from "../components/HomeIntro";
import HeroSection from "../components/HeroSection";
import ShoesDetails from "../components/ShoesDetails";
import SportShowcase from "../components/SportShowcase";
import GenderShowcase from "../components/GenderShowcase";
import FeaturedProducts from "../components/FeaturedProducts";
import useSEO from "../hook/useSEO";

const Home = ({ isLoaded }) => {
  useSEO({
    title: "Nike Sneaker | Basket, Tennis, Running, Training e Calcio",
    description:
      "Scopri la nuova collezione Nike: sneaker basket, tennis, running, training, calcio, apparel tecnico e lifestyle. Sezioni Uomo, Donna e Bambino.",
    image: "/images/jordan.png",
  });

  return (
    <>
      <HomeIntro isLoaded={isLoaded} />
      <HeroSection isLoaded={isLoaded} />
      <ShoesDetails />
      <SportShowcase />
      <GenderShowcase />
      <FeaturedProducts />
    </>
  );
};

export default Home;
