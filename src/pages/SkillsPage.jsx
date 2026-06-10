import Footer from "../components/Footer";
import MySkillsValues from "../components/MySkillsValues"
import portfolio from "../data/portfolio"
function SkillsPage(){
    return(
        <>    <main className="bg-black text-white min-h-screen">
        <MySkillsValues skills={portfolio.skills} /></main>
        <Footer />
        </>

    )
}

export default SkillsPage;