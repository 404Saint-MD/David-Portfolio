import About from "../components/About"
import Footer from "../components/Footer";
import MyExperience from "../components/MyExperience"
import portfolio from "../data/portfolio";
function AboutPage(){
    return(
<>
<main className="bg-black text-white min-h-screen w-full">
     <section className="px-6 md:px-20 py-24">
        <h1 className="text-[70px] md:text-[100px] font-[Inter] font-black leading-none">
          ABOUT ME
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mt-8 leading-relaxed">
          I am David Ibeh, a frontend developer focused on creating modern,
          responsive and user-friendly websites using React and Tailwind CSS.
        </p>

        <div className="mt-20">
        
        </div>
      </section>
<About />
<div className="bg-black px-6 md:px-20 pb-20">
  <MyExperience experiences={portfolio.experiences} />
  </div>
</main>
<Footer />
</>

    )
}
export default AboutPage;
