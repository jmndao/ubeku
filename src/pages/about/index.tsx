import Image from "next/image";
import React from "react";
import { Aperture, Film, Umbrella, Video } from "react-feather";
import Carousel from "../../components/Carousel/Team";
import Layout from "../../components/Layout/Home";
import Rubrique from "../../components/Rubrique";

import ImageAbout1 from "../../images/about/1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Landing Image */}
      <div className="relative h-[340px] md:h-[420px] lg:h-[660px] rounded-sm">
        <Image
          src={ImageAbout1}
          layout="fill"
          objectFit="cover"
          alt={"Nos Productions"}
          className="w-full h-full rounded-sm"
        />
        <div className="absolute h-2/3 bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-200 via-zinc-200/60 dark:from-zinc-900 dark:via-zinc-900/60 to-transparent">
          <div className="w-full md:w-2/3 lg:w-1/3 mx-auto flex flex-col space-y-4 items-center justify-center text-center">
            <h4 className="text-xl text-black dark:text-white md:text-4xl lg:text-7xl font-extrabold">
              A{" "}
              <span className="text-violet-700 dark:text-violet-700 underline">
                Propos
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
        <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-between items-center px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-fit text-2xl md:text-7xl lg:text-9xl text-violet-700 bg-zinc-200 rounded-sm px-1.5 py-0.5 font-extrabold">
              Ubeku
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <p className="text-zinc-900 dark:text-zinc-200 text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sit
              nisi aspernatur quas beatae eius quam tempora? Fuga, iste iure!
            </p>
            <p className="text-zinc-900 dark:text-zinc-200 text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellendus quae perferendis rem autem possimus laboriosam nobis
              nulla reprehenderit molestias? Aliquam sint aspernatur iure est
              eos dolore voluptatibus aliquid amet.
            </p>
            <p className="text-zinc-900 dark:text-zinc-200 text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              suscipit quam voluptate! Libero laboriosam debitis error eum dolor
              impedit excepturi cum, ex dignissimos asperiores, sapiente, quod
              non! Sequi.
            </p>
          </div>
        </div>
      </div>

      {/* Rubriques */}
      <div className="w-full h-auto my-6 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-black dark:text-white text-center italic">
          Specialistes en
        </h1>
      </div>
      <div className="w-full lg:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-4 md:px-8 lg:px-16 py-2 my-8">
        <Rubrique
          title="Cinéma"
          icon={
            <Aperture
              size={60}
              strokeWidth={1}
              className="text-zinc-900 dark:text-zinc-200"
            />
          }
        />
        <Rubrique
          title="Média"
          icon={
            <Video
              size={60}
              strokeWidth={1}
              className="text-zinc-900 dark:text-zinc-200"
            />
          }
        />
        <Rubrique
          title="Communication 360"
          icon={
            <Film
              size={60}
              strokeWidth={1}
              className="text-zinc-900 dark:text-zinc-200"
            />
          }
        />
        <Rubrique
          title="Marketing Corporate"
          icon={
            <Umbrella
              size={60}
              strokeWidth={1}
              className="text-zinc-900 dark:text-zinc-200"
            />
          }
        />
      </div>

      {/* Our Team */}
      <div className="w-full h-auto my-20 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between">
          {/* Meet The Team */}
          <div className="w-full md:w-5/12 h-auto flex flex-col justify-center">
            <h3 className="text-xl md:text-3xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-200">
              Rencontrer
            </h3>
            <h3 className="text-xl md:text-3xl lg:text-5xl font-semibold text-violet-700 underline">
              {"l'Equipe"}
            </h3>
          </div>
          {/* Team Carousel */}
          <div className="w-full md:w-7/12 h-auto">
            <Carousel />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
