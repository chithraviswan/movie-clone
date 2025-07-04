import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">🎬 BookMyShow Clone</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/signup" className="hover:underline">
          Signup
        </Link>
      </div>
    </nav>
  );
}
