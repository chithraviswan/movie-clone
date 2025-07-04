import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const movies = useSelector((state) => state.movie.movies);
  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
