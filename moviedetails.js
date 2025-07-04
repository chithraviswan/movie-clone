import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useSelector((state) =>
    state.movie.movies.find((m) => m.id === parseInt(id))
  );

  if (!movie) return <p className="p-4">Movie not found.</p>;

  return (
    <div className="p-6">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <p className="text-lg text-gray-700">{movie.description}</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Confirm Booking
      </button>
    </div>
  );
}
