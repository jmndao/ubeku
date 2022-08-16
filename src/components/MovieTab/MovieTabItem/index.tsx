import React from "react";
import Link from "next/link";
import { useGlobal } from "../../../context/global";

type Data = {
  name: string;
  query: string;
  active: boolean;
};

const MovieTabItem = ({ name, query, active }: Data) => {
  const { curMenu, changeMovieTab } = useGlobal();

  return (
    <Link href={`/${curMenu}?q=${query}`} passHref>
      <h3
        className={`${
          active
            ? "text-violet-700 font-bold"
            : "text-neutral-500 hover:scale-110 hover:px-2.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-200"
        } cursor-pointer p-1 my-2.5 whitespace-nowrap`}
        onClick={() => changeMovieTab(query)}
      >
        {name}
      </h3>
    </Link>
  );
};

export default MovieTabItem;
