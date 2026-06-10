import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[150px] font-black text-orange-500 leading-none">
        404
      </h1>

      <h2 className="text-4xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-4 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/portfolio"
        className="mt-8 bg-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
      <Footer />
    </main>
  );
}

export default NotFound;