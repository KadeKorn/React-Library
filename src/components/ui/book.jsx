import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const book = ({ book }) => {
  function imageLoaded(){
    console.log('imageloaded')
  }
  return (
    <div className="book">
      <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
      
      {/* <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" onLoad={imageLoaded}/>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} /> */}
    </div>
  );
};

export default book;
