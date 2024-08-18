import './App.css';
import { Routes, Route } from "react-router-dom"
import Canvas from './components/Canvas/Canvas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Canvas/>} />
      </Routes>
    </div>
  );
}

export default App;