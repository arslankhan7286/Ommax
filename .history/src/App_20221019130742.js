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
      <div className="App">
        <BrowserRouter>
        <Routes>
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="/" element={<About />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
