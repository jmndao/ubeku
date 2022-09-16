import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-black w-full h-auto mt-8">
      <div className="w-full h-full flex items-start px-4 md:px-8 lg:px-16 pb-4 pt-8 border-b border-zinc-200/30 dark:border-zinc-900/30">
        {/* Logo */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-1/3 py-4">
          <div className="w-60">
            <span className="text-xl bg-zinc-200 px-2.5 py-0.5 md:text-4xl lg:text-6xl font-bold text-violet-700 rounded-sm">
              Ubeku
            </span>
          </div>
          <p className="text-zinc-900 dark:text-zinc-200 text-lg font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            ullam architecto dolores magnam, doloremque facere placeat quo nihil
            sint accusamus iure ratione laboriosam natus porro illo odio
            repellendus qui magni!
          </p>
        </div>
        {/* Section Navs */}
        <div className="flex-grow flex items-start justify-center space-x-8">
          <div className="flex flex-col space-y-2">
            <Link href={"about"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Qui Sommes-Nous ?
              </h3>
            </Link>
            <Link href={"productions"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Nos Productions
              </h3>
            </Link>
            <Link href={"realizations"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Nos Realisations
              </h3>
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href={"#"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Nos Partenaires
              </h3>
            </Link>
            <Link href={"#"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Notre Equipe
              </h3>
            </Link>
            <Link href={"contact"} passHref>
              <h3 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 cursor-pointer">
                - Contact
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 dark:bg-zinc-900 flex items-center py-4 justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <Link href={"linkedin"} passHref>
            <Linkedin
              size={20}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={"twitter"} passHref>
            <Twitter
              size={20}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={"instagram"} passHref>
            <Instagram
              size={20}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={"facebook"} passHref>
            <Facebook
              size={20}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
          <Link href={"youtube"} passHref>
            <Youtube
              size={20}
              className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <p className="text-zinc-900 dark:text-zinc-200">
            ©2022 Ubeku Africa / Design by Jmndao
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
