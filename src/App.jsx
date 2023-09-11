import "./App.css";
import { IoLogoWhatsapp } from "react-icons/io";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";

function App() {
  return (
    <div id="app">
      <Hero />
      <Services />
      <About />
      <Footer />
      <Navigator />
    </div>
  );
}

export default App;
