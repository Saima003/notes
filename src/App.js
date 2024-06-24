import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import GenerateIDOnRefresh from './components/GenerateIDOnRefresh';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<GenerateIDOnRefresh />} />
    </Routes>
  </Router>
  );
}

export default App;
