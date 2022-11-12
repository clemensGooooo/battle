import CalcSuite from "./component/CalcSuite"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./component/Home";
import { addition, squares } from "./types/Calculation";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/calcSuite/squares" element={<CalcSuite topic="squares" exercises={squares} />} />
        <Route path="/calcSuite/addition" element={<CalcSuite topic="addition" exercises={addition} />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;