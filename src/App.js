import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
