import React from "react";
 import book from "../components/ui/book";

const Cart = ({ cart, changeQuantity }) => {
const TAX_RATE = 0.10; //10%

  const calculateTotalForBook = (book) => {
  const price = book.salePrice || book.originalPrice;
  return price * book.quantity
}

const calculateSubtotal = () => {
  return cart.reduce((acc, book) => acc + calculateTotalForBook(book), 0);
}

const calculateTax = () => {
  return calculateSubtotal() * TAX_RATE;
}

const calculateTotal = () => {
  const total = calculateSubtotal() + calculateTax();
  return total;
}


  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img
                        src={book.url}
                        className="cart__book--img"
                        alt=""
                      />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                        <button className="cart__book--remove">Remove</button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                        onChange={(event) => changeQuantity(book, event.target.value)}
                        value={book.quantity}
                      />
                    </div>
                    <div className="cart__total">${calculateTotalForBook(book).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub--total">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert("not implemented yet buddy")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;



//Old code just for reference will delete
// import React from "react";
// import book from "../components/ui/book";

// const Cart = ({ cart }) => {
//   return (
//     <div id="books__body">
//       <main id="books__main">
//         <div className="books__container">
//           <div className="row">
//             <div className="book__selected--top">
//               <h2 className="cart__title">Cart</h2>
//             </div>
//             <div className="cart">
//               <div className="cart__header">
//                 <span className="cart__book">Book</span>
//                 <span className="cart__quantity">Quantity</span>
//                 <span className="cart__total">Price</span>
//               </div>
//               <div className="cart__body">
//                 {
//                   cart.map(book => {
//                     return (
//                       {
//                         cart.map(book => (
//                           <div className="cart__item">
//                             <div className="cart__book">
//                               <img
//                                 src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
//                                 className="cart__book--img"
//                                 alt=""
//                               />
//                               <div className="cart__book--info">
//                                 <span className="cart__book--title">craking along</span>
//                                 <span className="cart__book--price">$10.00</span>
//                                 <button className="cart__book--remove">Remove</button>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       }

//                     )
//                   })
//                 }
//                 {/* <div className="cart__item">
//                   <div className="cart__book">
//                     <img
//                       src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
//                       className="cart__book--img"
//                       alt=""
//                     />
//                     <div className="cart__book--info">
//                       <span className="cart__book--title">craking along</span>
//                       <span className="cart__book--price">$10.00</span>
//                       <button className="cart__book--remove">Remove</button>
//                     </div>
//                   </div> */}
//                 <div className="cart__quantity">
//                   <input
//                     type="number"
//                     min={0}
//                     max={99}
//                     className="cart__input"
//                   />
//                 </div>
//                 <div className="cart__total">$10.00</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="total">
//             <div className="total__item total__sub--total">
//               <span>Subtotal</span>
//               <span>$9.00</span>
//             </div>
//             <div className="total__item total__tax">
//               <span>Tax</span>
//               <span>$1.00</span>
//             </div>
//             <div className="total__item total__price">
//               <span>Total</span>
//               <span>$10.00</span>
//             </div>
//             <button className="btn btn__checkout no-cursor" onClick={() => alert('not implemented yet buddy')}>
//               Proceed to checkout
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Cart;
