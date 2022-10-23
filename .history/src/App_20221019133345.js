import './App.css';
import Dashboard from './components/Dashboard'
import About from './components/About'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
