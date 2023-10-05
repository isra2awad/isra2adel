import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>

      <About />

      <Contact />

      <Skills />
    </>
  );
}

export default App;
