import FixedHeader from "./components/FixedHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AchievementsCerts from "./pages/AchievementsCerts";

const App = () => {
  return (
    <>
      <FixedHeader />
      <div className="pt-16 pl-2 bg-pink-100 text-black min-h-screen">
        <Home />
        <About />
        <Skills />
        <Projects />
        <AchievementsCerts />
        <Contact />
      </div>
    </>
  );
};

export default App;
