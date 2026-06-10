import portfolio from "../data/portfolio";
import MyExperience from "../components/MyExperience";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function WorksPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-24">
      <h1 className="text-[55px] md:text-[100px] font-black leading-none">
        WORKS
      </h1>

      <p className="text-gray-400 text-xl mt-6 max-w-2xl">
        A collection of my learning journey, projects, and frontend development experience.
      </p>

      <div className="mt-20">
        <MyExperience experiences={portfolio.experiences} />

      </div>
      <div className="bg-zinc-900 h-105 rounded-[40px] mx-6 md:mx-20 mt-24 flex flex-col justify-center items-center text-center">
  <h2 className="text-gray-400 text-[38px] md:text-[80px] font-black leading-tight">
    Let’s discuss about <br /> a project
  </h2>

  <Link
    to="/portfolio/contact"
    className="group inline-flex items-center gap-3 text-white font-[Inter] bg-orange-600 px-8 py-5 mt-8 rounded-xl hover:bg-orange-700 hover:shadow-orange-600 shadow-lg transition-all duration-300"
  >
    Work with me
    <FiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
  </Link>
</div>
<Footer />
    </main>
  );
}

export default WorksPage;