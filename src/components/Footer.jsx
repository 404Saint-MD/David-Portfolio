import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">

        <div>
          <h2 className="text-3xl font-black tracking-widest">
            DAVID<span className="text-orange-500">.</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Frontend Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2026 David Ibeh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;