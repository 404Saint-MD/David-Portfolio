import portfolio from "../data/Portfolio";
import Header from "../components/Header";
import Footer from "../components/Footer";


function PortfolioPage() {
  return (
    <>
    <section className="bg-black min-h-screen">

      <Header
        firstName={portfolio.firstName}
        lastName={portfolio.lastName}
        description={portfolio.description}
        buttonText={portfolio.buttonText}
      />

      </section>
      <Footer />
    </>
  );
}

export default PortfolioPage;
