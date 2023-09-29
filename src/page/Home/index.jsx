import Nav from "../Nav";
import Hero from "./Hero";
import BestSeller from "./BestSeller";
import SubHero from "./SubHero";
import News from "./News";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <BestSeller />
        <SubHero />
        <News />
        <Footer />
      </main>
    </>
  );
};

export default Home;
