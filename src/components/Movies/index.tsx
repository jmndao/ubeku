import React from "react";
import { IMovies } from "../../@types/movie";
import MovieCard from "../MovieCard";

const Movies = ({ movies }: IMovies) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-6">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default Movies;
