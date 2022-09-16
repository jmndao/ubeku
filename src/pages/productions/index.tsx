import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout/Home";
import ProductionCard from "../../components/ProductionCard";
// Image Landing
import ImageProduction from "../../images/home/bg.jpg";
// Image Productions
import Image1 from "../../images/h-carousel/1.jpg";
import Image2 from "../../images/h-carousel/2.jpg";
import Image3 from "../../images/h-carousel/3.jpg";
import Image4 from "../../images/h-carousel/4.jpg";

const Productions = () => {
  return (
    <Layout>
      {/* Landing Image */}
      <div className="relative h-[340px] md:h-[420px] lg:h-[660px] rounded-sm">
        <Image
          src={ImageProduction}
          layout="fill"
          objectFit="cover"
          alt={"Nos Productions"}
          className="w-full h-full rounded-sm"
        />
        <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-200 via-zinc-200/60 dark:from-zinc-900 dark:via-zinc-900/60 to-transparent">
          <div className="w-full md:w-2/3 lg:w-1/3 mx-auto flex flex-col space-y-4 items-center justify-center text-center">
            <h4 className="text-xl text-black dark:text-white md:text-4xl lg:text-7xl font-extrabold">
              Nos{" "}
              <span className="text-violet-700 dark:text-violet-700 underline">
                Productions
              </span>
            </h4>
            <p className="text-black dark:text-white font-semibold text-lg md:text-xl tracking-wide leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
              possimus.
            </p>
          </div>
        </div>
      </div>

      {/* Productions Contents */}
      <div className="w-full h-full mt-8 mb-4 px-4 md:px-8 lg:px-16 ">
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
          <ProductionCard
            key={1}
            imgUrl={Image1}
            title="Image 1"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
            videoUrl="image-1"
          />
          <ProductionCard
            key={2}
            imgUrl={Image2}
            title="Image 2"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
            videoUrl="image-2"
          />
          <ProductionCard
            key={1}
            imgUrl={Image3}
            title="Image 3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
            videoUrl="image-3"
          />
          <ProductionCard
            key={1}
            imgUrl={Image4}
            title="Image 4"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
            videoUrl="image-4"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Productions;
