import Image from "next/image";
import Link from "next/link";
import { IData } from "../../@types/movie";

const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
}: Partial<IData>) => {
  return (
    <Link href={`/movie/${id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={title}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{title}</div>
          <p className="text-gray-700 text-base mb-1">
            {release_date
              ? new Date(release_date).toString()
              : new Date().toString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
