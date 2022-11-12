import CalcSuite from "./component/CalcSuite"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./component/Home";
import { addition, squares, squaresComplex } from "./types/Calculation";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/battle/calcSuite/squares"
            element={<CalcSuite topic="squares" exercises={squares} />} />
          <Route path="/battle/calcSuite/addition"
            element={<CalcSuite topic="addition" exercises={addition} />} />
          <Route path="/battle/calcSuite/squaresComplex"
            element={<CalcSuite topic="squaresComplex" exercises={squaresComplex} />} />
          <Route path="/battle" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;