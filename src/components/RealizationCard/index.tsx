import { ArrowRightOutline } from "heroicons-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type RealizationCardType = {
  imgUrl: string | StaticImageData;
  title: string;
};

const RealizationCard = ({ imgUrl, title }: RealizationCardType) => {
  return (
    <div className="w-full h-[210px] md:h-[330px] relative rounded-sm">
      <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" />
      {/* Black gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 dark:from-zinc-900 dark:via-zinc-900/30 to-transparent" />
      <div className="absolute bottom-5 left-0 right-0 h-1/4 px-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-lg md:text-2xl lg:text-4xl">
          {title}
        </h3>
        <ArrowRightOutline
          size={30}
          strokeWidth={1}
          className="text-white hover:text-violet-700 dark:hover:text-violet-700 hover:scale-150 cursor-pointer transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default RealizationCard;
