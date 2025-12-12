import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StepByStep from "./components/StepByStep";
import BentoGrid from "./components/BentoGrid";
import CompaniesFeaturesLine from "./components/CompaniesFeaturesLine";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <StepByStep />
        <BentoGrid />
        <CompaniesFeaturesLine />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;
