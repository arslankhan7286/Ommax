import './App.css';
import Dashboard from './components/Dashboard'
import About from './components/About'
import {Route, Router} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Dashboard />
        <Router>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
        </Router>
      </div>
  );
}

export default App;
