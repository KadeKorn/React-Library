import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = book.url;
    imageLoader.onload = () => {
      setTimeout(() => {
        setImgSrc(imageLoader.src);
      }, 1500);
    }; // The Book component receives a book prop and initializes a state variable imgSrc to manage the source URL of an image. Utilizing the useEffect hook, it preloads the image from the book.url, and once loaded, sets the imgSrc state with a delay of 1.5 seconds; if the image fails to load, an error is logged to the console.

    // Optional: Handle image loading errors
    imageLoader.onerror = () => {
      console.error("Failed to load the image:", book.url);
    };
  }, [book.url]); // Dependency on book.url ensures this effect runs if the url changes

  return (
    <div className="book">
      {imgSrc ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={imgSrc} alt="" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;

// ACHTUNG -- This is the code that supposedly correct, but I think the documentation is from an older version as when I use the code below the books do not load
//   const mountedRef = useRef(true);

//   useEffect(() => {
//     const imageLoader = new Image();
//     imageLoader.src = book.url;
//     imageLoader.onload = () => {
//       setTimeout(() => {
//         if (mountedRef.current) {
//           setImgSrc(imageLoader.src);
//         }
//       }, 150);
//     };

//     // Optional: Handle image loading errors
//     imageLoader.onerror = () => {
//       console.error("Failed to load the image:", book.url);
//     };

//     return () => {
//       // When the component unmounts
//       mountedRef.current = false;
//     };
// }, [book.url]);
