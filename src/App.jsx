import { useParams } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

import "./global.css";

function App() {
  const { name } = useParams();
  return (
    <>
      <Header />
      {name === "about" ? (
        <About />
      ) : name === "contact" ? (
        <Contact />
      ) : name === "shop" ? (
        <Skills />
      ) : (
        <main className="main">
          <Home />
        </main>
      )}
    </>
  );
}

export default App;
