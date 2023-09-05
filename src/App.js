import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]); // initializes it as an empty array

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  const removeBookFromCart = (bookToRemove) => {
    const updatedCart = cart.filter(book => book.id !== bookToRemove.id);
    setCart(updatedCart);
  }


  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeBook={removeBookFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
