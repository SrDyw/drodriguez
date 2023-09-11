import "./App.css";
import { IoLogoWhatsapp } from "react-icons/io";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import ModalContextProvider from "./assets/context/ModalContext";
import { useContext } from "react";
import { ServiceCardModal } from "./components/ServiceCardModal";

function App() {
  return (
    <div id="app">
      <ModalContextProvider>
        <Hero />
        <Services />
        <About />
        <Footer />
      </ModalContextProvider>
      <Navigator />

    </div>
  );
}

export default App;
