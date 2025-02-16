import "./App.css";
import About from "./components/About";
import Contact2 from "./components/Contact2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts2 from "./components/Posts2";
import Socials from "./components/Socials";
import Books from "./components/Books";
import ImageBreak from "./components/ImageBreak";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Socials />
      <About />
      <ImageBreak />
      <Books />
      <Posts2 />
      <Contact2 />
    </main>
    <Footer />
  </>
);

export default App;
