import "./App.css";
import About from "./components/About";
// import Contact from "./components/Contact";
import Contact2 from "./components/Contact2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Socials from "./components/Socials";
import Books from "./components/Books";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Socials />
      <About />
      <Books />
      <Posts />
      {/* <Contact /> */}
      <Contact2 />
    </main>
    <Footer />
  </>
);

export default App;
