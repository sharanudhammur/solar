"use client";

import { Box, Stack, Button, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import "./Home.scss";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"

export default function Home() {
  return (
    <div className="home-component">

      <div className="hero-section">
        <img style={{ borderRadius: "10px" }} className="mobile-image" src="https://sdmntprwestus.oaiusercontent.com/files/00000000-7f14-5230-8933-c74a2db8fef8/raw?se=2025-04-06T15%3A49%3A16Z&sp=r&sv=2024-08-04&sr=b&scid=3ad1fad2-ee49-56cd-8b56-649b2ce4bcbe&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T19%3A32%3A33Z&ske=2025-04-06T19%3A32%3A33Z&sks=b&skv=2024-08-04&sig=aPSNzEioh0UGY8joLjURNqczH%2BsDGVhn9xeJpkOxmKQ%3D" alt="" />
        <div className="hero-info">
          <div className="hero-title">Power Your Future with Clean Energy</div>
          <div className="hero-desc">Leading the way in solar energy innovation, XYZ Products delivers reliable, eco-friendly solutions to power your home and business. From solar water heaters to rooftop systems, we help build a sustainable future.</div>

          <Button style={{ marginTop: "30px", backgroundColor: "#2b6cb0", color: "white" }} variant="solid">
            Get started <RiArrowRightLine />
          </Button>
        </div>
        <div>
          <img style={{ borderRadius: "10px" }} className="web-image" src="https://sdmntprwestus.oaiusercontent.com/files/00000000-7f14-5230-8933-c74a2db8fef8/raw?se=2025-04-06T15%3A49%3A16Z&sp=r&sv=2024-08-04&sr=b&scid=3ad1fad2-ee49-56cd-8b56-649b2ce4bcbe&skoid=4ae7b564-2531-470e-8ddb-6913f4bee2ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-05T19%3A32%3A33Z&ske=2025-04-06T19%3A32%3A33Z&sks=b&skv=2024-08-04&sig=aPSNzEioh0UGY8joLjURNqczH%2BsDGVhn9xeJpkOxmKQ%3D" alt="" />
        </div>
      </div>
      <div className="our-story-wrapper">
        <div className="our-story">OUR STORY</div>
        <div className="title">Welcome to our products</div>
        <div className="desc">
          Our products is one of the Leading Solar Water Heaters manufacturing companies in India, based out of Bengaluru and established in the year 2004. It has grown from a modest customer base to a trusted brand in the home appliances market across the country.
          We recently introduced Glass-Lined Solar Water Heating Systems into the market, an internationally renowned technology in Solar Water Heating Systems to help provide clean hot water.
          Our products include Solar Water Heaters (Evacuated Tube Collectors and Flat Plate Collectors), Solar Rooftop Solutions, Electric Geysers, Heat Pumps, Kitchen Chimneys, and more.
        </div>
      </div>

      <div>
        <div></div>
      </div>

    </div>
  );
}
