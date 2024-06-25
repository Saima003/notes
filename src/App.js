import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import GenerateIDOnRefresh from './components/GenerateIDOnRefresh';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<GenerateIDOnRefresh />} /> */}
      <Route path="/" element={<HeroSection/>} />
    </Routes>
  </Router>
  );
}

export default App;
