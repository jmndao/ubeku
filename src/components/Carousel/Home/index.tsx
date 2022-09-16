import Image, { StaticImageData } from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import {
  ArrowCircleLeftOutline,
  ArrowCircleRightOutline,
} from "heroicons-react";
import "react-alice-carousel/lib/alice-carousel.css";
// Images
import Image1 from "../../../images/h-carousel/1.jpg";
import Image2 from "../../../images/h-carousel/2.jpg";
import Image3 from "../../../images/h-carousel/3.jpg";
import Image4 from "../../../images/h-carousel/4.jpg";
import { PlayCircle } from "react-feather";

type CarouselItemType = {
  imgUrl: string | StaticImageData;
  title: string;
  videoLink: string;
  description: string;
};

const CarouseItem = ({
  imgUrl,
  title,
  videoLink,
  description,
}: CarouselItemType) => {
  return (
    <div className="w-full h-auto">
      {/* Image Section with title */}
      <div className="relative h-[340px] md:h-[420px] lg:h-[660px] rounded-sm">
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="w-full h-full rounded-sm"
        />
        <div className="absolute h-[40%] bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-200 via-zinc-200/60 dark:from-zinc-900 dark:via-zinc-900/60 to-transparent">
          <div className="w-full h-auto py-2 px-4 md:px-8 lg:px-16 flex items-start justify-start">
            <div className="w-full md:w-1/2 lg:w-7/12 flex-col space-y-4">
              <p className="text-white dark:text-white tracking-wide leading-loose text-sm md:text-xl font-semibold">
                {description}
              </p>
              <div
                className="my-2 flex items-center space-x-2"
                onClick={() => console.log(`${videoLink}`)}
              >
                <PlayCircle
                  size={60}
                  strokeWidth={1}
                  className="cursor-pointer hover:scale-80 hover:text-violet-700 dark:hover:text-violet-500 text-white dark:text-white transition-all duration-200"
                />
                <h4 className="text-white dark:text-white text-sm md:text-lg">
                  Play
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Items = [
  <CarouseItem
    key={1}
    imgUrl={Image1}
    title="Image-1"
    videoLink="link-1"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
  />,
  <CarouseItem
    key={2}
    imgUrl={Image2}
    title="Image-2"
    videoLink="link-2"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
  />,
  <CarouseItem
    key={3}
    imgUrl={Image3}
    title="Image-3"
    videoLink="link-3"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
  />,
  <CarouseItem
    key={4}
    imgUrl={Image4}
    title="Image-4"
    videoLink="link-4"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque augue ut sem maximus, non consectetur tortor iaculis. Quisque vel lobortis nunc, non bibendum odio."
  />,
];

const Carousel = () => {
  return (
    <div className="w-full h-auto">
      <AliceCarousel
        animationType="fadeout"
        mouseTracking
        disableDotsControls={true}
        animationDuration={1500}
        items={Items}
        renderPrevButton={({ isDisabled }) => {
          return (
            <ArrowCircleLeftOutline
              size={40}
              className={`cursor-pointer absolute right-16 bottom-[15%] ${
                isDisabled
                  ? "text-zinc-800/60 dark:text-zinc-200/60 cursor-not-allowed"
                  : "text-white dark:text-white hover:text-violet-700 dark:hover:text-violet-700"
              } transition-all duration-150`}
            />
          );
        }}
        renderNextButton={({ isDisabled }) => {
          return (
            <ArrowCircleRightOutline
              size={40}
              className={`cursor-pointer absolute right-5 bottom-[15%] ${
                isDisabled
                  ? "text-zinc-800/60 dark:text-zinc-200/60 cursor-not-allowed"
                  : "text-white dark:text-white hover:text-violet-700 dark:hover:text-violet-700"
              } transition-all duration-150`}
            />
          );
        }}
      />
    </div>
  );
};

export default Carousel;
