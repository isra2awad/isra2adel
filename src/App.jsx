import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Home from "./Components/Home/Home";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />

        <Contact />

        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;
