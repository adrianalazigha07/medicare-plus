import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
export default App;