import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout/Home";
import ProductionCard from "../../components/ProductionCard";
// Image Landing
import ImageProd1 from "../../images/productions/1.jpg";
import ImageProd2 from "../../images/productions/2.jpg";
import ImageProd3 from "../../images/productions/3.jpg";
import ImageProd4 from "../../images/productions/4.jpg";
// Image Productions
import Image1 from "../../images/h-carousel/1.jpg";
import Image2 from "../../images/h-carousel/2.jpg";
import Image3 from "../../images/h-carousel/3.jpg";
import Image4 from "../../images/h-carousel/4.jpg";
import { Badge } from "@nextui-org/react";

type TabsType =
  | "animations"
  | "films"
  | "spot_publicitaire"
  | "video_clips"
  | "production_executive";
type TabsElementType = {
  key: string;
  name: string;
  tabIndex: TabsType;
  count: number;
};

const tabs: TabsElementType[] = [
  { name: "Animations", count: 4, tabIndex: "animations", key: "1-an-diw" },
  { name: "Films", count: 2, tabIndex: "films", key: "2-sie-is" },
  { name: "Video Clips", count: 2, tabIndex: "video_clips", key: "29-si-i" },
  {
    name: "Spot Publicitaire",
    count: 2,
    tabIndex: "spot_publicitaire",
    key: "80-sie-uw",
  },
  {
    name: "Production Executive",
    count: 0,
    tabIndex: "production_executive",
    key: "03-ie-uw",
  },
];

const Productions = () => {
  const [selectedTab, setSelectedTab] = React.useState<TabsType>("animations");

  return (
    <Layout>
      {/* Landing Image */}
      <div className="relative h-[340px] md:h-[420px] lg:h-[660px] rounded-sm">
        <Image
          src={ImageProd2}
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

      {/* More on Productions */}
      <div className="w-full h-auto my-20">
        <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-between items-center my-10 px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="flex items-center justify-start space-x-4">
              <div
                className="relative w-[100px] h-[100px] rounded-full"
                key={11}
              >
                <Image
                  src={ImageProd1}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                  alt="Description"
                />
              </div>
              <div
                className="relative w-[100px] h-[100px] rounded-full"
                key={22}
              >
                <Image
                  src={ImageProd3}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                  alt="Description"
                />
              </div>
              <div
                className="relative w-[100px] h-[100px] rounded-full"
                key={33}
              >
                <Image
                  src={ImageProd4}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                  alt="Description"
                />
              </div>
            </div>
            <div className="text-zinc-900 dark:text-zinc-200 text-base md:text-lg">
              <span className="text-violet-700 bg-zinc-200 rounded-sm px-1.5 py-0.5 font-semibold">
                Ubeku
              </span>
              <p className="text-inherit">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                magni.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <h4 className="text-lg md:text-xl lg:text-2xl font-extrabold text-black dark:text-white mb-1 uppercase">
              Some title here.
            </h4>
            <p className="text-zinc-900 dark:text-zinc-200 text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellendus quae perferendis rem autem possimus laboriosam nobis
              nulla reprehenderit molestias? Aliquam sint aspernatur iure est
              eos dolore voluptatibus aliquid amet.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto my-6 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-9xl font-extrabold text-violet-700 text-center">
          10
        </h1>
        <h4 className="text-zinc-900 dark:text-zinc-200 font-light my-1 text-center">
          Totales Productions
        </h4>
      </div>

      <div className="w-full mx-auto flex space-x-4 justify-center overflow-x-scroll py-3 my-3 px-4 md:px-8 lg:px-16">
        {tabs.map((tab) => {
          return (
            <Badge key={tab.key} color="error" content={tab.count} placement="top-right" className="pt-0.5 pr-3">
              <h4
                onClick={() => setSelectedTab(tab.tabIndex)}
                className={`uppercase text-sm font-semibold text-center ${
                  selectedTab === tab.tabIndex
                    ? "text-violet-700"
                    : "text-zinc-900/60 dark:text-zinc-200/60"
                } hover:text-violet-500 dark:hover:text-violet-500 hover:scale-105 transition-all duration-200 cursor-pointer`}
              >
                {tab.name}
              </h4>
            </Badge>
          );
        })}
      </div>

      {/* Productions Contents */}
      <div className="w-full h-full my-10 px-4 md:px-8 lg:px-16 ">
        {selectedTab === "animations" && (
          <React.Fragment>
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
                key={3}
                imgUrl={Image3}
                title="Image 3"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
                videoUrl="image-3"
              />
              <ProductionCard
                key={4}
                imgUrl={Image4}
                title="Image 4"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
                videoUrl="image-4"
              />
            </div>
          </React.Fragment>
        )}
        {selectedTab === "films" && (
          <React.Fragment>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
              <ProductionCard
                key={31}
                imgUrl={Image1}
                title="Image 1"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
                videoUrl="image-1"
              />
              <ProductionCard
                key={32}
                imgUrl={Image2}
                title="Image 2"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
    placeat nostrum eos quidem ex cum dicta praesentium ipsum qui
    possimus."
                videoUrl="image-2"
              />
            </div>
          </React.Fragment>
        )}
      </div>

      {/* Load More button  */}
      <div className="w-full h-auto flex items-center justify-center my-4">
        <div className="text-zinc-200 dark:text-zinc-900 font-light w-fit px-6 py-2 text-lg bg-zinc-900 dark:bg-zinc-200 hover:bg-violet-700 dark:hover:bg-violet-700 hover:text-white dark:hover:text-white transition-all rounded-sm cursor-pointer duration-200">
          Load More...
        </div>
      </div>
    </Layout>
  );
};

export default Productions;
