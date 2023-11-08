import '../src/components/styles.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Model from './components/Model';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/model" element={<Model/>} />
          </Routes>
          <br />
          <br />
        {/* </div>
      </div> */}
    </Router>
  );
}

export default App;
