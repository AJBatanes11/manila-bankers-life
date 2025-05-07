import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/qwerty">Sample 404 Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
