import './App.css';
import Dashboard from './components/Dashboard'
import About from './components/About'
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
