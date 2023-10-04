import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Socials from "./components/Socials";
import Works from "./components/Works";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Socials />
      <About />
      <Works />
      <Posts />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
