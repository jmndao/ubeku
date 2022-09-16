import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Aperture, Film, Umbrella, Video } from "react-feather";
import Carousel from "../components/Carousel/Home";
import Layout from "../components/Layout/Home";
import RealizationCard from "../components/RealizationCard";
import Rubrique from "../components/Rubrique";

// Image Images
import Image1 from "../images/h-carousel/1.jpg";
import Image2 from "../images/h-carousel/2.jpg";
import Image3 from "../images/h-carousel/3.jpg";
import Image4 from "../images/h-carousel/4.jpg";
// Bg Image
import ImageBg from "../images/home/bg.jpg";
// Partners Image
import DaustImg from "../images/partners/daust.png";


const Partner = ({
  imgUrl,
  name,
}: {
  imgUrl: string | StaticImageData;
  name: string;
}) => {
  return (
    <div className="h-36 w-36">
      <Image src={imgUrl} alt={name} layout="responsive" objectFit="contain" />
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      {/* Shows Newly published Events */}
      <Carousel />

      {/* Section presentation of Ubeku */}
      <div className="h-auto w-full px-4 md:px-8 lg:px-16 py-2 my-8">
        {/* Logo */}
        <div className="w-full flex items-center justify-center">
          <span className="text-xl md:text-2xl lg:text-4xl bg-zinc-200 px-4 py-1.5 font-bold text-violet-700 rounded-sm">
            Ubeku
          </span>
        </div>
        {/* Presentation Text */}
        <div className="w-full md:w-1/2 lg:w-5/12 mx-auto text-center px-4 mt-4 mb-6">
          <p className="text-zinc-900 dark:text-zinc-200 text-lg leading-relaxed tracking-wide">
            Communiques non seulement avec les clients actuels et potentiels,
            mais aussi avec les producteurs, la population et/ou avec quiconque
            souhaitant obtenir des renseignements ou communiquer avec UBEKU. Les
            personnes intéressées par la société et ses différentes activités
            peuvent le consulter et y trouver les informations en rapport aux
            services que nous proposons. Ils pourront demander des devis pour
            les services, et aussi le site sera un portfolio de nos différentes
            réalisations faites.
          </p>
        </div>
        {/* Rubriques */}
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
      </div>

      {/* Shows some realizations with link */}
      <div className="w-full space-y-4 md:space-y-0 md:flex md:space-x-4 px-4 md:px-8 lg:px-16 h-auto py-2 my-4">
        <div className="w-1/3 flex space-y-8 flex-col justify-center">
          <h4 className="font-bold text-zinc-900 dark:text-zinc-200 text-xl md:text-5xl">
            Mes{" "}
            <span className="underline text-violet-700 dark:text-violet-700 text-xl md:text-5xl font-semibold">
              Réalisations
            </span>
          </h4>
          <span className="text-zinc-200 dark:text-zinc-900 font-light w-fit px-6 py-2 text-lg bg-zinc-900 dark:bg-zinc-200 hover:bg-violet-700 dark:hover:bg-violet-700 hover:text-white dark:hover:text-white transition-all rounded-sm cursor-pointer duration-200">
            Voir Plus...
          </span>
        </div>
        {/* Show 4 Realization Cards */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-3">
          <RealizationCard key={1} imgUrl={Image1} title="Image-1" />
          <RealizationCard key={2} imgUrl={Image2} title="Image-2" />
          <RealizationCard key={3} imgUrl={Image3} title="Image-3" />
          <RealizationCard key={4} imgUrl={Image4} title="Image-4" />
        </div>
      </div>

      {/* Best Productions */}
      <div className="w-full h-[400px] my-8 relative">
        <div className="absolute inset-0">
          <Image
            src={ImageBg}
            alt="Nos Productions"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Dark layer on top of the image-bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 dark:from-zinc-900 dark:via-zinc-900/30 to-transparent" />
        {/* Content */}
        <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 w-8/12 h-full mx-auto backdrop-blur-sm bg-zinc-200/60 dark:bg-zinc-900/60 rounded-sm">
          <div className="w-full h-full px-4 py-8 flex flex-col md:flex-row space-x-4 items-center">
            <div className="flex flex-col space-y-4 w-1/2">
              <h4 className="text-xl md:text-5xl text-zinc-900 dark:text-zinc-200 font-semibold">
                Retrouvez Nos Meilleures{" "}
                <p className="underline text-violet-700 dark:text-violet-700 text-xl md:text-5xl font-semibold">
                  Productions
                </p>
              </h4>
              <p className="text-zinc-900 dark:text-zinc-200 text-lg leading-relaxed tracking-wide">
                Des centaines de productions matérialisées avec des agences de
                communication, des annonceurs et partenaires pour de nombreux
                secteurs {"d’activités"}.
              </p>
              <Link href={"productions"} passHref>
                <div className="mt-4 mb-2 text-zinc-200 dark:text-zinc-900 font-light w-fit px-6 py-2 text-lg bg-zinc-900 dark:bg-zinc-200 hover:bg-violet-700 dark:hover:bg-violet-700 hover:text-white dark:hover:text-white transition-all rounded-sm cursor-pointer duration-200">
                  Voir Plus...
                </div>
              </Link>
            </div>
            <div className="relative w-96 h-96 rounded-sm">
              <Image
                src={ImageBg}
                alt="Nos Productions"
                layout="fill"
                objectFit="contain"
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="w-full h-auto py-4">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center justify-center my-4 space-y-4">
          <h4 className="text-xl md:text-5xl text-zinc-900 dark:text-zinc-200 font-semibold">
            Nos{" "}
            <span className="underline text-violet-700 dark:text-violet-700 text-xl md:text-5xl font-semibold">
              Partenaires
            </span>
          </h4>
          <p className="text-lg text-zinc-900 dark:text-zinc-200 w-1/2 text-center tracking-wide leading-relaxed">
            Nous accompagnons régulièrement des grandes structures locales sous
            régionales et internationales en quête de qualité de production tant
            sur le plan humain que logistique.
          </p>
        </div>
        {/* Listing Partners */}
        <div className="w-full md:w-11/12 lg:w-10/12 mx-auto h-auto flex items-center justify-center space-x-4 px-4 md:px-8 lg:px-16 py-2 my-8">
          <Partner imgUrl={DaustImg} name="DAUST" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
