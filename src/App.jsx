import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Navigator from "./components/Navigator/Navigator";
import ModalContextProvider from "./components/context/ModalContext";
import Contact from "./components/Contact/Contact";
import { useContext } from "react";
import { GlobalContext } from "./components/context/GlobalContext";
import { STATES } from "./models/types";
import Offers from "./components/Offers/Offers";

function App() {
  const { copied } = useContext(GlobalContext);

  return (
    <div id="app">
      <p className={`cp_clip ${copied == STATES.ENABLE ? 'cp_active' : ''}`}>Copiado en el portapapeles</p>
      <ModalContextProvider>
        <Hero />
        <Services />
        <Offers/>
        <About />
        <Contact />
        <Footer />
      </ModalContextProvider>
      <Navigator />
    </div>
  );
}

export default App;
