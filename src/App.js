import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, {useState} from "react";
function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }
  
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} cart={cart} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
