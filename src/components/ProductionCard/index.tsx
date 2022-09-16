import React from "react";
import Image, { StaticImageData } from "next/image";
import { PlayOutline } from "heroicons-react";

type ProductionCardType = {
  imgUrl: string | StaticImageData;
  title: string;
  description: string;
  videoUrl: string;
};

const ProductionCard = ({
  imgUrl,
  title,
  description,
  videoUrl,
}: ProductionCardType) => {
  return (
    <div className="w-full h-[300px] rounded-sm relative production__card">
      <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" className="hover:scale-110 transition-all duration-200" />

      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t  from-zinc-900 via-zinc-900/60 to-transparent rounded-sm">
        <div className="px-4 py-2.5 w-full md:w-10/12 mx-auto h-full">
          <h4 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            {title}
          </h4>
          <p className="text-white dark:text-white leading-relaxed font-light">
            {description}
          </p>
          <div className="w-full flex items-center justify-end">
            <PlayOutline
              size={50}
              strokeWidth={1}
              onClick={() => console.log(videoUrl)}
              className="text-white cursor-pointer hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;
