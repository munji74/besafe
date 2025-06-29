import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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

import Cyberbullying from "./pages/topics/Cyberbullying";
import DigitalEthics from "./pages/topics/DigitalEthics";
import UnwantedRequests from "./pages/topics/UnwantedRequests";
import OnlinePrivacy from "./pages/topics/OnlinePrivacy";
import OnlinePredators from "./pages/topics/OnlinePredators";
import OnlineGaming from "./pages/topics/OnlineGaming";
import AiDangers from "./pages/topics/AiDangers";
import InappropriateContent from "./pages/topics/InappropriateContent";




function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
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
        <Route path="/cyberbullying" element={<Cyberbullying />} />
        <Route path="/digital-ethics" element={<DigitalEthics />} />
        <Route path="/ai-dangers" element={<AiDangers />} />
        <Route path="/inappropriate-content" element={<InappropriateContent />} />
        <Route path="/unwanted-requests" element={<UnwantedRequests />} />
        <Route path="/online-gaming" element={<OnlineGaming />} />
        <Route path="/online-predators" element={<OnlinePredators />} />
        <Route path="online-privacy" element={<OnlinePrivacy />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
