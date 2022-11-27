import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Home from "./Component/Home.jsx";
import Feature from "./Component/Feature";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fatr" element={<Feature />} />
        </Routes>
      </Router>
    </div>
  );
}
