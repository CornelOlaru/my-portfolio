import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Footer from "./components/Footer";
//import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
