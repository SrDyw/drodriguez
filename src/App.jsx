import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Navigator from "./components/Navigator/Navigator";
import ModalContextProvider from "./assets/context/ModalContext";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div id="app">
      <ModalContextProvider>
        <Hero />
        <Services />
        <About />
        <Contact/>
        <Footer />
      </ModalContextProvider>
      <Navigator />

    </div>
  );
}

export default App;
