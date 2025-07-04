import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded w-full h-64 object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
      <p className="text-gray-600">{movie.description}</p>
      <Link
        to={`/movie/${movie.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Book Now
      </Link>
    </div>
  );
}
