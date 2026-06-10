import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const activeLink = ({ isActive }) =>
  isActive
? "text-orange-500 font-bold"
: "text-white hover:text-orange-500 transition-colors";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="bg-black text-white flex justify-between items-center px-20 py-8">
      <div className="hidden md:flex gap-8">
        <NavLink to="/portfolio" end className={activeLink}>Home</NavLink>
        <NavLink to="/portfolio/about" className={activeLink}>About</NavLink>
        <NavLink to="/portfolio/Works" className={activeLink}>Works</NavLink>
        
      </div>
      <Link to="/portfolio" className="text-xl md:text-3xl font-bold tracking-widest">
        DAVID<span className="text-orange-500">.</span>
      </Link>

      <div className="hidden md:flex gap-8">
        <NavLink to="/portfolio/MySkills" className={activeLink}>Skills</NavLink>
        <NavLink to="/portfolio/contact" className={activeLink}>Contact</NavLink>

        </div>
      <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-2xl"
  >
    <FaBars />
  </button>

    </nav>
     {
    menuOpen && (
      
        <div className="md:hidden bg-zinc-900 text-white flex flex-col gap-6 px-6 py-6">
    <NavLink to="/portfolio" end className={activeLink}>Home</NavLink>
    <NavLink to="/portfolio/about" className={activeLink}>About</NavLink>
    <NavLink to="/portfolio/works" className={activeLink}>Works</NavLink>
    <NavLink to="/portfolio/MySkills" className={activeLink}>Skills</NavLink>
    <NavLink to="/portfolio/contact" className={activeLink}>Contact</NavLink>
  </div>

        
    )
     }
     </>
  );
}

export default Navbar;