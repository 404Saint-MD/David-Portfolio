
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import SkillsPage from "./pages/SkillsPage"
import AboutPage from "./pages/AboutPage"
import WorksPage from "./pages/WorksPage";
import NotfoundPage from "./pages/NotfoundPage"
import Footer from "./components/Footer";


function App() {
  return (
          <BrowserRouter>
          <Navbar />
    <Routes>
  <Route path="/" element={<PortfolioPage />} />
  <Route path="/portfolio" element={<PortfolioPage />} />
  <Route path="/portfolio/contact" element={<ContactPage />} />
  <Route path="/portfolio/MySkills" element={<SkillsPage />} />
  <Route path="/portfolio/About" element={<AboutPage />} />
  <Route path="/portfolio/Works" element={<WorksPage />} />
  <Route path="*" element={<NotfoundPage />}/>
 
          
</Routes>
</BrowserRouter>
  );
}

export default App;