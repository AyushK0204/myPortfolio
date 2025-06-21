import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/stack";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Footer />
    </>
  );
};

export default App;
