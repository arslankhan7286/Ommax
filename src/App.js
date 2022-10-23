import './App.css';
import Footer from './components/Footer';
// import Wrapper from './components/Content/Dashboard'
// import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Wrapper />
        <Footer />
        {/* <Routes>
          <Route path="/" element={<Wrapper />} />
        </Routes> */}
      </div>
  );
}

export default App;
