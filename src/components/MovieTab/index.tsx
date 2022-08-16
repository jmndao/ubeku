import React from "react";
import { useGlobal } from "../../context/global";
import MovieTabItem from "./MovieTabItem";

const movieTabs = [
  {
    _id: 1,
    name: "Started",
    query: "started",
  },
  {
    _id: 2,
    name: "Popular",
    query: "popular",
  },
  {
    _id: 3,
    name: "Most Rated",
    query: "most-rated",
  },
  {
    _id: 4,
    name: "African Heroes",
    query: "african-heroes",
  },
  {
    _id: 5,
    name: "Senegalese Drama",
    query: "senegalese-drama",
  },
  {
    _id: 6,
    name: "Nigerian",
    query: "nigerian",
  },
  {
    _id: 7,
    name: "Latest",
    query: "latest",
  },
  {
    _id: 8,
    name: "Recommendations",
    query: "recommendations",
  },
  {
    _id: 9,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 10,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 11,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 12,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 13,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 14,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 15,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 16,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 17,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 18,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 19,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 20,
    name: "Actions",
    query: "actions",
  },
  {
    _id: 21,
    name: "Actions",
    query: "actions",
  },

  {
    _id: 22,
    name: "Actions",
    query: "actions",
  },
];

const MovieTab = () => {
  const { curMovieTab } = useGlobal();

  return (
    <div className="w-full h-auto relative ">
      <div className="w-full flex items-center py-2 space-x-4 whitespace-nowrap overflow-x-scroll scrollbar-hide last:pr-14 first:pl-14">
        {movieTabs.map((movie) => {
          return (
            <MovieTabItem
              key={movie._id}
              name={movie.name}
              query={movie.query}
              active={curMovieTab === movie.query}
            />
          );
        })}
      </div>
      <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-zinc-200 dark:from-zinc-900 to-transparent w-14 " />
      <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-zinc-200 dark:from-zinc-900 to-transparent w-14 " />
    </div>
  );
};

export default MovieTab;
