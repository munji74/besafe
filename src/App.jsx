import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import SafetyTips from "./components/SafetyTips";
import ResourcesCTA from "./components/ResourcesCTA";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <SafetyTips />
          <ResourcesCTA />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
