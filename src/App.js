import './App.css';
import Footer from './components/Footer';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import QuickFacts from './pages/QuickFacts';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/quickfacts" element={<QuickFacts />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
