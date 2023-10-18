import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Home from "./Components/Home/Home";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />

        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
