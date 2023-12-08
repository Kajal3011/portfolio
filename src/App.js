import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className=" bg-light ">
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
