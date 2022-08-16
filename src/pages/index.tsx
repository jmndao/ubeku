import type { GetServerSideProps } from "next";
import { IMovies } from "../@types/movie";
import Layout from "../components/Layout";
import Movies from "../components/Movies";
import PresentationCard from "../components/PresentationCard";

const Home = ({ movies }: IMovies) => {
  
  const randPin = Math.floor(Math.random() * movies.length) - 1;

  return (
    <Layout>
      <PresentationCard movie={movies[randPin]} />
      <Movies movies={movies} />
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  // Fetch data from external API
  const response = await fetch(
    `${process.env.MOVIEDB_URL}/popular?api_key=${process.env.MOVIEDB_KEY}&language=en-US&page=1`
  );

  const res = await response.json();
  const movies: IMovies = res.results;

  // Pass data to the page via props
  return { props: { movies } };
};
