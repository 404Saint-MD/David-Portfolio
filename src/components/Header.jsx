import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";


function Header({ firstName, lastName, title, description, buttonText }) {
  return (
    <header className="bg-black">
      <h1 className="text-white text-[35px] md:text-[160px] font-bold tracking-[0.3em] justify-center gap-7  flex font-[Inter]">
        <span>{firstName}</span> <span>{lastName}</span>
      </h1>

      <div className="h-px bg-white w-full md:w-165 mt-10 mx-auto "></div>
      <div className="hidden md:flex ml-27 w-16 text-white gap-6">
        <NavLink to="https://facebook.com">
        <FaFacebookSquare className=" relative top-50  md:top-50 hover:bg-orange-700 hover:shadow-orange-600" /></NavLink>
        <NavLink to="https://instagram.com"><FaInstagramSquare className="relative top-50 hover:bg-orange-700 hover:shadow-orange-600"/></NavLink>
      </div>
      <div className="w-full md:w-175 px-6 md:px-0 md:ml-auto">
        <p className="text-gray-600 text-2xl font-[Inter]">{description}</p>
        <Link
          to="/portfolio/contact"
          className="group inline-flex items-center gap-3 text-white font-[Inter] bg-orange-600 px-6 py-6 mt-7 rounded-2xl hover:bg-orange-700 hover:shadow-orange-600 shadow-lg transition-all duration-300"
        >
          {buttonText}{" "}
          <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1  transition-transform duration-300" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
