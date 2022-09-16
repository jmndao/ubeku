import React from "react";
import TeamCard from "../../TeamCard";
import AliceCarousel from "react-alice-carousel";
import {
  ArrowCircleLeftOutline,
  ArrowCircleRightOutline,
} from "heroicons-react";
import "react-alice-carousel/lib/alice-carousel.css";
// Images
import Image1 from "../../../images/h-carousel/1.jpg"
import Image2 from "../../../images/h-carousel/2.jpg";
import Image3 from "../../../images/h-carousel/3.jpg";
import Image4 from "../../../images/h-carousel/4.jpg";

const Items = [
  <TeamCard
    key={1}
    imgUrl={Image1}
    name="Demba Sene"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
    twitterLink="link-1"
  />,
  <TeamCard
    key={2}
    imgUrl={Image2}
    name="Falilou Gueye"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
    linkedinLink="link-2"
  />,
  <TeamCard
    key={3}
    imgUrl={Image3}
    name="Ousmane Keita"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
    instaLink="link-3"
  />,
  <TeamCard
    key={4}
    imgUrl={Image4}
    name="Binta Sall"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
    linkedinLink="link-4"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel = () => {
  return (
    <div className="w-full h-auto relative">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableDotsControls={true}
        animationDuration={1500}
        controlsStrategy="alternate"
        items={Items}
        renderPrevButton={({ isDisabled }) => {
          return (
            <ArrowCircleLeftOutline
              size={40}
              className={`cursor-pointer absolute right-16 top-5 ${
                isDisabled
                  ? "text-zinc-800/60 dark:text-zinc-200/60 cursor-not-allowed"
                  : "text-black dark:text-white hover:text-violet-700 dark:hover:text-violet-700"
              } transition-all duration-150`}
            />
          );
        }}
        renderNextButton={({ isDisabled }) => {
          return (
            <ArrowCircleRightOutline
              size={40}
              className={`cursor-pointer absolute right-5 top-5 ${
                isDisabled
                  ? "text-zinc-800/60 dark:text-zinc-200/60 cursor-not-allowed"
                  : "text-black dark:text-white hover:text-violet-700 dark:hover:text-violet-700"
              } transition-all duration-150`}
            />
          );
        }}
      />
    </div>
  );
};

export default Carousel;
