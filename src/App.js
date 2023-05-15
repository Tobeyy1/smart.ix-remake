import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import LanguageModal from "./components/LanguageModal/LanguageModal";
import Platform from "./components/Platform/Platform";
import Pricing from "./components/Pricing/Pricing";
import Projects from "./components/Projects/Projects";
import Technology from "./components/Technology/Technology";
import Testimonial from "./components/Testimonial/Testimonial";
import { Suspense, useEffect, useState } from "react";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [closeWelcome, setCloseWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCloseWelcome(true);
    }, 2300);
  }, []);
  return (
    <Suspense fallback={null}>
      <div className="App">
        {!closeWelcome && <Welcome />}
        {closeWelcome && (
          <>
            <Hero />
            <LanguageModal />
            <Platform />
            <Technology />
            <HowWeWork />
            <Banner />
            <Projects />
            <About />
            <Pricing />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </Suspense>
  );
}

export default App;
