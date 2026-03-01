import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import Contacts from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;