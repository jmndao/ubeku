import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

type TeamCardType = {
  imgUrl: string | StaticImageData;
  name: string;
  description: string;
  twitterLink?: string;
  fbLink?: string;
  instaLink?: string;
  linkedinLink?: string;
};

const TeamCard = ({
  imgUrl,
  name,
  description,
  twitterLink,
  fbLink,
  instaLink,
  linkedinLink,
}: TeamCardType) => {
  return (
    <div className="bg-white dark:bg-black max-w-md h-fit p-4 rounded-sm mx-2">
      <div className="w-full h-full flex flex-col space-y-4">
        <div className="relative w-[200px] h-[200px] rounded-full" key={22}>
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-full w-full h-full"
            alt={name}
          />
        </div>
        <h4 className="uppercase font-semibold text-sm md:text-lg text-violet-700">{name}</h4>
        <p className="text-zinc-900 dark:text-zinc-200 leading-relaxed tracking-wide md:text-lg font-light">
          {description}
        </p>
        <div className="flex items-center space-x-4">
          <Link href={`${linkedinLink}`} passHref>
            <Linkedin
              size={26}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={`${twitterLink}`} passHref>
            <Twitter
              size={26}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={`${instaLink}`} passHref>
            <Instagram
              size={26}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={`${fbLink}`} passHref>
            <Facebook
              size={26}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
