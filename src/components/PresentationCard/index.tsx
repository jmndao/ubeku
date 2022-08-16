import Image from "next/image";
import React from "react";
import { IData } from "../../@types/movie";

type Props = {
  movie: IData;
};

const PresentationCard = ({ movie }: Props) => {
  return (
    <div className="w-full mb-14 lg:mb-20 h-[400px] md:h-[500px] lg:h-[600px] relative rounded-lg shadow-lg shadow-zinc-400 dark:shadow-zinc-700">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        objectFit="cover"
        loading="lazy"
        layout="fill"
        className="w-full h-full rounded-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-zinc-200 dark:from-zinc-900 rounded-b-lg to-transparent ">
        <div className="w-full flex justify-center">
          <div 
          
          className="my-2 cursor-move h-2 w-20 rounded-full bg-violet-700 dark:bg-zinc-400 shadow-lg shadow-zinc-500 dark:shadow-zinc-500" />
        </div>

        <div className="w-full h-full rounded-b-lg">Hello World</div>
      </div>
    </div>
  );
};

export default PresentationCard;
