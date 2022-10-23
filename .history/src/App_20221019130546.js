import './App.css';
import Dashboard from './components/Dashboard'
import About from './components/About'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Routes>
      <div className="App">
        {/* <Dashboard /> */}
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
      </div>
        </Routes>
  );
}

export default App;
