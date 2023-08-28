import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/books" Component={Books}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
