import './App.css';
import Dashboard from './components/Dashboard'
import About from './components/About'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
